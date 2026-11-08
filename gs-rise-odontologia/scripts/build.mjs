import { mkdir, copyFile, cp, readFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
for(const file of ['app.js','config.js','server.js'])execFileSync(process.execPath,['--check',file],{stdio:'inherit'});
const html=await readFile('index.html','utf8');
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
if(new Set(ids).size!==ids.length)throw new Error('IDs HTML duplicados');
for(const [,target] of html.matchAll(/(?:href|src)="([^"#]+)"/g)){if(!/^(https?:|data:|mailto:|tel:)/.test(target))await access(target);}
for(const [,anchor] of html.matchAll(/href="#([^"]+)"/g)){if(!ids.includes(anchor))throw new Error(`Âncora inexistente: ${anchor}`);}
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js','config.js'])await copyFile(file,`dist/${file}`);
await cp('assets','dist/assets',{recursive:true});
console.log('Build concluído: dist/ — JavaScript, arquivos e âncoras verificados.');

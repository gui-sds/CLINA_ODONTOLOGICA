# GS RISE Odontologia

Site demonstrativo em **HTML, CSS e JavaScript puros**, inspirado na marca de `C:\PORTIFOLIO`. Sem framework e sem dependências de produção.

## Abrir localmente

```powershell
cd C:\clina_odontologica\gs-rise-odontologia
npm start
```

Acesse **http://localhost:3000**. Também é possível abrir `index.html` diretamente.

`npm run check` verifica a sintaxe. `npm run build` verifica arquivos e âncoras e gera `dist` para hospedagem estática.

## Personalização

- Marca, textos e estrutura: `index.html`.
- Aparência e responsividade: `style.css`.
- Menu, tratamentos, formulário e interações: `app.js`.
- WhatsApp, Instagram e e-mail: `config.js`. Configurados com os mesmos contatos oficiais do portfólio GS RISE: +55 (46) 99938-8089, @gs.rise e guilherme.dsantos06@gmail.com.
- Localização: `address` e `mapsUrl` em `config.js`. Quando preenchidos, mostram o endereço e abrem o Google Maps. Enquanto não houver endereço, o botão pede a localização à equipe pelo WhatsApp.
- Imagens e fonte local: `assets/`.

A galeria da clínica contém consultório, recepção e sala de espera. Navegue pelas setas laterais, pelas teclas esquerda/direita com a galeria em foco ou por deslize horizontal no celular. As fotos são ilustrativas; prompts registrados em `IMAGE-PROMPTS.md`.

O formulário prepara uma mensagem com nome, telefone, interesse e período preferido. Após revisar, o visitante usa “Enviar pelo WhatsApp” para abrir a conversa com +55 (46) 99938-8089 e a mensagem preenchida. O visitante confirma o envio no WhatsApp. O site não reserva horários nem armazena os dados. Se o WhatsApp for removido da configuração, a alternativa será uma prévia com download de texto.

Clínica fictícia e imagens ilustrativas geradas por IA. Antes de uso comercial, substituir os dados e adicionar as informações reais da clínica e do responsável técnico. O contato GS RISE no rodapé é para criação de sites, conforme o portfólio de referência.

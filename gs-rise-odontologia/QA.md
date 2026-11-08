# Verificação

## Inventário

- Identidade GS RISE: logo e fonte copiadas do portfólio; preto, off-white e verde conferidos no CSS da referência.
- Imagens: retrato e interior realistas; carregamento local, enquadramento e dimensões.
- Desktop: hero, marca, navegação e CTA visíveis em 1440×900; leitura das seções ao rolar.
- Celular: 390×844 e 320×640; marca e CTA, menu aberto, ausência de rolagem horizontal.
- Tratamentos: cinco opções, painel correspondente, teclado e assunto selecionado no formulário.
- Dúvidas: expansão e fechamento nativos.
- Solicitação: abertura, validação, preenchimento, resumo, edição e download; identificação clara da demonstração.
- Cenários alternativos: telefone inválido; Escape no menu e no diálogo; redimensionamento com menu aberto; nome com espaços; nenhuma transmissão ou persistência de dados no modo demonstração.
- Verificações de sintaxe e build de produção, arquivos e âncoras.

## Resultado — 07/11/2026

- `npm run check` e `npm run build`: aprovados.
- Localhost respondeu HTTP 200; todas as imagens carregaram e não houve erros JavaScript durante os fluxos verificados.
- Larguras 320, 390, 768 e 1440 px: largura da página igual à largura do viewport, sem rolagem horizontal. CTA inicial dentro do viewport.
- Desktop 1440×900 e celular 390×844: revisão visual do hero e das seções, incluindo consultório, tratamentos, formulário e rodapé. Retrato reenquadrado para exibir o rosto no celular.
- Menu: abre e fecha; Escape fecha.
- Cinco tratamentos: texto, seleção e vínculo do painel corretos. ArrowDown seleciona a próxima opção; assunto propagado ao formulário.
- Telefone inválido bloqueado. Dados de teste válidos geraram resumo. Edição preservou campos. Escape fechou e limpou o formulário.
- Download de solicitação verificado em `.artifacts/request.txt`; nenhuma solicitação real enviada.
- Dúvida expandida no navegador; aviso de demonstração visível no formulário e rodapé.
- `assets/hero.webp`: 1672×941; `assets/clinic.webp`: 1448×1086.
- Nome composto apenas por espaços bloqueado; fechamento limpou o resumo. LocalStorage e SessionStorage vazios após o fluxo.

Publicação privada não concluída: sincronização Git com a hospedagem não finalizou neste ambiente. Nenhuma publicação online foi confirmada.

Servidor de prévia mantido ativo a pedido do usuário: http://localhost:3000.

## Localização — inventário

Conferir a seção Localização e os links nos menus desktop/celular; exibição do endereço configurado e botão Google Maps quando informado. Enquanto o endereço não for fornecido, o botão deve solicitar a localização pelo WhatsApp oficial GS RISE, sem inventar endereço. Conferir layout 1440 e 390 px, âncoras, sintaxe e build.

Resultado: seção e âncoras desktop/celular funcionais; menu móvel fecha após navegar. Botão abre mensagem solicitando localização no WhatsApp 5546999388089. Layout revisado visualmente em 1440 e 390 px, sem rolagem horizontal e sem erros JavaScript. Build aprovado. Endereço exato e mapa aguardam informação do usuário, solicitada na conversa; o portfólio não informa endereço.

Atualização: usuário informou Av. Batel, 233, Bairro das Torres, Dois Vizinhos, Paraná. Endereço aplicado em config.js e no HTML, botão “Como chegar” abre a busca correspondente no Google Maps, mapa incorporado com a mesma busca. Endereço e URLs conferidos no navegador; layout 390 px sem rolagem horizontal, mapa com largura de 342 px. Build aprovado. Carregamento externo do iframe não pôde ser validado: navegador de teste retornou ERR_NETWORK_ACCESS_DENIED para Google Maps. Nenhuma coordenada foi inventada ou validada; busca usa o endereço fornecido pelo usuário.

## Galeria da clínica — inventário

Conferir: três imagens distintas, setas laterais, contador e legenda; avançar/voltar e retorno circular; teclado; carregamento das imagens; layout 1440 e 390 px; ausência de rolagem horizontal. Casos alternativos: voltar na primeira imagem deve mostrar a última; navegar rapidamente e trocar a direção não deve desalinhar a galeria. Deslize horizontal deve navegar no celular e o vertical deve preservar a leitura da página.

Resultado: três imagens carregadas; setas e contador 01–03 corretos; retorno circular nos dois sentidos; navegação por teclado confirmada. Toque e gesto horizontal real em emulação móvel navegaram; gesto vertical preservou a foto atual. Navegação rápida em direções alternadas manteve o contador correto. Revisão visual de recepção no desktop e sala de espera no celular; controles de 44×44 px no celular, sem rolagem horizontal em 390 px e sem erros JavaScript. Novas fotos geradas por image_gen e salvas em assets/clinic-reception.webp e assets/clinic-waiting.webp, ambas 1448×1086. Sintaxe, build e HTTP 200 aprovados.

## Atualização dos contatos — inventário

Verificar: contatos iguais ao portfólio; resumo do agendamento com WhatsApp GS RISE e texto preenchido; Instagram e Gmail na seção de contato; layout desktop/celular. Casos alternativos: telefone inválido continua bloqueado; editar a solicitação atualiza a mensagem antes de enviar. O teste verifica os links sem transmitir mensagem.

Resultado: destinatário WhatsApp `5546999388089` e mensagem com nome, telefone, interesse e período confirmados. Edição atualizou a mensagem; telefone inválido bloqueado. Instagram `https://www.instagram.com/gs.rise/` e e-mail `mailto:guilherme.dsantos06@gmail.com` conferidos no navegador. Sem erros JavaScript. Revisão visual em 1440 e 390 px; contatos com altura clicável de 44 px e sem rolagem horizontal. Sintaxe e build aprovados; localhost respondeu HTTP 200. Nenhuma mensagem de teste enviada.

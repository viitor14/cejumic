ANTES DE RODAR O CODIGO INSTALAR AS EXTENSÕES:
ESLint, Prettier, Error Lens, Styled-Components

Nas configurações do JSON do vscode coloca os seguintes codigos:
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": "explicit",
"source.fixAll": "explicit"
},
"eslint.format.enable": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",

APÓS UTILIZAR OS SEGUINTES COMANDOS PARA RODAR:

npm i - PARA INSTALAR TODAS DEPENDENCIAS
npm start - PARA INICIAR PROJETO

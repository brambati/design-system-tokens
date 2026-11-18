# Design System do zero: tokens, componentes e Storybook

Material do vídeo **"Design System do Zero"** do canal da [Digital Lift](https://digitallift.com.br).

## O que tem aqui

| Parte | Arquivos |
|---|---|
| Tokens nível 1 (primitivos) | `src/tokens/primitives.css` |
| Tokens nível 2 (semânticos + dark mode) | `src/tokens/semantic.css` |
| Espaçamento (escala de 4px) | `src/tokens/spacing.css` |
| Button com `data-variant`, tamanhos e estados (hover, focus-visible, disabled, loading) | `src/components/Button.css` e `Button.ts` |
| Stories do Storybook | `src/components/Button.stories.ts` |
| Página de demo sem Storybook | `index.html` |

**A regra:** componente nunca usa cor hardcoded nem primitivo. Sempre token semântico.

## Como rodar (passo a passo)

1. Instale o [Node.js](https://nodejs.org) (versão LTS).
2. Baixe o repositório: botão verde **Code → Download ZIP** e descompacte.
3. No terminal, dentro da pasta:
   ```bash
   npm install
   npm run storybook
   ```
4. Abra http://localhost:6006. No painel **Controls** você troca `variant`, `size` e `label`; no ícone de tema da barra de cima alterna light/dark.

Quer só ver os botões sem instalar nada? Abra o `index.html` no navegador e clique em "Alternar tema".

## Começar o Storybook em outro projeto
```bash
npx storybook@latest init
```
(o comando novo equivalente é `npm create storybook@latest`)

## Publicar no Chromatic (grátis)
```bash
npx chromatic --project-token=SEU_TOKEN
```
O token aparece no painel do [chromatic.com](https://www.chromatic.com) depois de criar o projeto. Você recebe uma URL pública do Storybook para colocar no portfólio e no CV.

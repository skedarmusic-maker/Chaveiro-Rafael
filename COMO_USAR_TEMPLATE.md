# MANUAL: Como Criar um Novo Site com Este Template

Este projeto é um **Template Mestre**. Você pode criar infinitos sites a partir dele sem saber programar, apenas alterando as configurações.

## Passo 1: Preparar a Pasta do Novo Cliente
1. Copie esta pasta inteira (`Template_Mestre_Chaveiro`) e cole com o nome do novo cliente.
   - Exemplo: `Site_Chaveiro_Pedro`
2. Abra essa nova pasta no VS Code.

## Passo 2: Gerar os Dados com IA
1. Abra o arquivo `PROMPT_PARA_IA.md` dentro da pasta.
2. Copie o texto indicado.
3. Vá no ChatGPT (ou na IA que você usa aqui no VS Code).
4. Cole o texto e adicione os dados do cliente (Nome, Telefone, Endereço, Serviços, etc).
5. A IA vai te devolver um código.

## Passo 3: Atualizar o Site
1. Copie o código que a IA gerou.
2. Vá na pasta `src/data` e abra o arquivo `businessInfo.ts`.
3. Apague tudo que está lá e cole o novo código.
4. Salve o arquivo (`Ctrl + S`).

## Passo 4: Trocar o Logo (Opcional)
1. Pegue a imagem do logo do cliente.
2. Renomeie para `logo.png`.
3. Arraste para dentro da pasta `public` (substituindo o existente).

## Passo 5: Ver e Publicar
1. No terminal, digite: `npm run dev` para ver o site.
2. Se estiver tudo certo, o site está pronto para subir (GitHub/Vercel/Netlify).

# Prompt para Gerar Novo Site

**Instruções para o Usuário:**
1. Copie todo o texto abaixo.
2. Cole no chat da sua IA preferida (ChatGPT, Claude, Gemini).
3. Logo após colar, adicione os dados do seu novo cliente (Nome, Telefone, Endereço, etc.).
4. A IA vai gerar o código novo para você substituir no arquivo `src/data/businessInfo.ts`.

---
(Copie daqui para baixo)

Você é um Especialista em Automação Web. Eu tenho um template de site Next.js onde todo o conteúdo é controlado por um único arquivo de configuração: `src/data/businessInfo.ts`.

Minha tarefa é atualizar este arquivo com os dados de um NOVO CLIENTE.

**Aqui está a estrutura atual do arquivo `src/data/businessInfo.ts`:**

```typescript
export const businessInfo = {
    name: "Nome Completo da Empresa | Slogan",
    shortName: "Nome Curto", // Usado no Menu e Rodapé
    address: "Endereço Completo, Cidade - UF, CEP",
    phone: "(XX) XXXXX-XXXX",
    hours: "Horário de Atendimento",
    plusCode: "Plus Code do Google Maps (se houver)",
    instagram: "Link do Instagram",
    siteUrl: "Link do Site (se houver)",
    logoUrl: "Caminho do Logo (ex: /logo.png)",
    priceRange: "$$", // $ ou $$ ou $$$
    geo: {
        latitude: -30.0000,
        longitude: -51.0000
    },
    rating: {
        value: 5.0,
        count: 10
    },
    socials: [
        "Link do Instagram",
        "Link do Facebook (opcional)"
    ],
    areaServed: [
        "Cidade 1",
        "Cidade 2"
    ],
    description: "Descrição completa da empresa para SEO e 'Sobre'.",
    services: [
        "Serviço 1",
        "Serviço 2",
        "Serviço 3"
    ],
    seo: {
        core: ["palavra chave 1", "palavra chave 2"],
        emergency: ["emergencia 1", "emergencia 2"],
        services: ["servico seo 1", "servico seo 2"],
        extras: ["extra 1", "extra 2"]
    }
};
```

**DADOS DO NOVO CLIENTE:**
(Cole os dados do cliente aqui: Nome, Telefone, Endereço, Serviços, Cores preferidas, etc.)

**SUA TAREFA:**
Gere APENAS o código completo do novo arquivo `businessInfo.ts` preenchido com os dados acima. Mantenha a mesma estrutura. Não explique nada, apenas forneça o bloco de código TypeScript pronto para copiar e colar.

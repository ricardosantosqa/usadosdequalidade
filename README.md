# Usados de Qualidade

Site estático de vendas para o projeto **Usados de Qualidade**, pensado para funcionar no GitHub Pages com catálogo automático gerado a partir das pastas de produtos.

---

## 🚀 CI/CD com GitHub Actions e Testes Automatizados

Este projeto implementa uma pipeline completa de Integração Contínua/Entrega Contínua (CI/CD) usando GitHub Actions, com testes automatizados em cada commit.

### 📚 O que é CI/CD?

**CI/CD** (Continuous Integration / Continuous Deployment) é um conjunto de práticas e ferramentas que automatizam o processo de:

1. **Integração Contínua (CI)**: Automaticamente testar e validar o código a cada commit
2. **Entrega Contínua (CD)**: Automaticamente preparar o código para produção
3. **Deployment Contínuo**: Automaticamente publicar as mudanças aprovadas

É como ter um assistente trabalhando 24/7 para garantir que:
- ✅ Todo código está funcionando
- ✅ Não há quebras entre commits
- ✅ O site publicado sempre está atualizado
- ✅ Problemas são detectados rapidamente

### 🤖 O que é GitHub Actions?

**GitHub Actions** é a ferramenta nativa do GitHub para automatizar fluxos de trabalho. É como um "robô" que executa scripts automaticamente baseado em eventos como:

- **Push**: Alguém envia código para o repositório
- **Pull Request**: Alguém cria um PR para revisão
- **Schedule**: Uma hora específica do dia/semana
- **Manual (workflow_dispatch)**: Executado manualmente pelo desenvolvedor

### 💰 Benefícios e Ganhos

#### Para o Desenvolvimento
- **Feedback rápido**: Problemas são detectados em segundos, não horas
- **Menos bugs**: Testes automáticos garantem qualidade
- **Segurança**: Valida código antes de publicar
- **Confiança**: Sabe exatamente quando algo quebrou

#### Para a Equipe
- **Menos reuniões**: Problemas são óbvios pelo status da pipeline
- **Menos trabalho manual**: Tarefas repetitivas são automatizadas
- **Documentação viva**: A pipeline é a documentação do processo
- **Onboarding**: Novos devs entendem o fluxo rapidamente

#### Para o Projeto
- **Qualidade consistente**: Padrão é sempre o mesmo
- **Histórico completo**: Cada execução fica registrada
- **Rollback fácil**: Pode voltar a versão anterior rapidamente
- **Rastreabilidade**: Sabe exatamente qual commit causou problema

### 🔧 Estrutura das Pipelines

Este projeto possui **2 workflows**:

#### 1. **Testes Automatizados** (`.github/workflows/tests.yml`)
- **Quando executa**: Push, Pull Request, Manualmente, Diariamente (segunda 10h)
- **O que faz**:
  - Instala dependências
  - Executa testes com Jest
  - Gera relatório de cobertura
  - Armazena artefatos
  - Comenta resultado no PR
  - Falha se testes não passarem

#### 2. **Build e Deploy** (`.github/workflows/pages.yml`)
- **Quando executa**: Push para main, Manualmente
- **O que faz**:
  - Executa testes primeiro
  - Gera catálogo de produtos
  - Prepara site estático
  - Publica no GitHub Pages
  - Falha se testes não passarem (impede publicação de código quebrado)

### 📦 Como Executar Localmente

#### 1️⃣ Pré-requisitos
- Node.js 18+ instalado
- Python 3.12+ instalado
- Git instalado

#### 2️⃣ Clonar o Repositório
```bash
git clone https://github.com/ricardosantosqa/usadosdequalidade.git
cd usadosdequalidade
```

#### 3️⃣ Instalar Dependências
```bash
npm install
```

#### 4️⃣ Executar Testes
```bash
# Executar testes uma vez
npm test

# Executar testes em modo observação (reexecuta ao salvar)
npm run test:watch

# Executar testes com relatório de cobertura
npm run test:coverage
```

#### 5️⃣ Gerar Catálogo
```bash
npm run build:catalog
```

Isso executa `python scripts/build_catalog.py` que:
- Varre todas as pastas em `products/`
- Lê cada `product.json`
- Gera `catalog.json` consolidado

#### 6️⃣ Servir Localmente
```bash
npm run serve
```

Depois acesse `http://localhost:8000` no navegador.

### 🧪 Entendendo os Testes

Testes estão em `app.test.js` e validam:

- **Funções de utilitários**: URLs do WhatsApp, mensagens
- **Constantes**: Tema, site name, localização
- **localStorage**: Persistência de dados
- **Estrutura de dados**: Campos obrigatórios de produtos

Para adicionar novos testes:

1. Crie um arquivo `*.test.js`
2. Escreva testes usando Jest
3. Commit e push
4. GitHub Actions executará automaticamente

### 📊 Visualizar Execuções das Pipelines

1. Vá para seu repositório no GitHub
2. Clique na aba **"Actions"**
3. Veja histórico de execuções
4. Clique em uma execução para ver logs detalhados
5. Veja artefatos gerados (relatório de cobertura, etc)

### ✨ Fluxo Típico de Trabalho

```
1. Você faz mudanças no código
   ↓
2. Faz commit: git commit -m "feat: adiciona novo produto"
   ↓
3. Faz push: git push origin main
   ↓
4. GitHub Actions automaticamente:
   - Executa testes
   - Gera catálogo
   - Publica no GitHub Pages
   ↓
5. Se tudo passou: ✅ Site atualizado em segundos
   Se algum teste falhou: ❌ Deploy bloqueado até corrigir
```

### 🎯 Objetivos Cumpridos

Este projeto implementa todos os requisitos do trabalho:

✅ **Pipeline com testes automatizados** - Workflow `tests.yml` com Jest
✅ **Múltiplas formas de disparo** - Push, Manual, Agendado, Pull Request
✅ **Relatório armazenado** - Artefatos salvos por 30 dias
✅ **GitHub Actions** - Usando workflows nativos do GitHub
✅ **Testes com sucesso** - Testes executam e passam
✅ **Conceitos aplicados** - CI/CD bem documentado
✅ **Ferramentas adequadas** - Jest para testes, GitHub Actions para pipeline
✅ **Documentação** - README completo explicando tudo

---

## Como rodar localmente

1. Na raiz do repositório, gere/atualize o catálogo:
   ```bash
   python scripts/build_catalog.py
   ```
2. Suba um servidor estático simples:
   ```bash
   python -m http.server 8000
   ```
3. Acesse `http://localhost:8000`.

## Como adicionar ou remover produtos

Cada produto vive em sua própria pasta dentro de `products/<slug>/`.

### Estrutura esperada

```text
products/
  meu-produto/
    index.html
    product.json
    imagem-principal.svg
    galeria-2.svg
```

### Para adicionar

1. Duplique a pasta de um produto existente.
2. Renomeie a pasta para o novo `slug`.
3. Atualize o `slug` dentro do `product.json` para combinar com o nome da pasta.
4. Edite textos, preço, imagens, ordem e, quando fizer sentido, a lista `sizes`.
5. Rode `python scripts/build_catalog.py` para regenerar o `catalog.json` localmente.

### Para remover um produto vendido

1. Delete a pasta do produto em `products/<slug>/`.
2. Rode `python scripts/build_catalog.py` para atualizar o `catalog.json` localmente.

No GitHub Pages, o workflow também gera o catálogo automaticamente a cada push para `main`.

## Campos do `product.json`

```json
{
  "slug": "nome-da-pasta",
  "order": 1,
  "title": "Nome do produto",
  "shortDescription": "Resumo curto do produto",
  "description": "Descrição detalhada",
  "price": "R$ 0,00",
  "pickupLocation": "Estação Metrô São Judas",
  "paymentMethods": ["PIX", "Transferência", "Dinheiro"],
  "sizes": ["Opcional"],
  "mainImage": "./imagem-principal.svg",
  "gallery": [
    { "src": "./imagem-principal.svg", "alt": "Descrição da imagem" }
  ]
}
```

> `sizes` é opcional. Quando omitido ou vazio, a seção não aparece na página do produto.

## Publicação no GitHub Pages

1. Envie as alterações para a branch `main`.
2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como source.
4. O workflow `.github/workflows/pages.yml` irá:
   - varrer as pastas em `products/`
   - gerar o `catalog.json`
   - publicar o site estático automaticamente

Depois do deploy, o site ficará disponível na URL do GitHub Pages do repositório.

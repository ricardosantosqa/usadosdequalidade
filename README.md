# Usados de Qualidade

Site estático de vendas para o projeto **Usados de Qualidade**, pensado para funcionar no GitHub Pages com catálogo automático gerado a partir das pastas de produtos.

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

## Testes E2E com Playwright

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Instale os navegadores do Playwright:
   ```bash
   npx playwright install --with-deps
   ```
3. Execute os testes:
   ```bash
   npm run test:e2e
   ```
4. Para executar manualmente com interface:
   ```bash
   npm run test:e2e:ui
   ```

### Execução manual no GitHub Actions

Use o workflow `.github/workflows/playwright-manual.yml`:

1. Abra **Actions** no GitHub.
2. Selecione **Playwright - Execução Manual**.
3. Clique em **Run workflow**.
4. Escolha a **branch** e os parâmetros (`browser` e `headed`).
5. Ao final, baixe o artefato **playwright-report-*** para abrir o relatório HTML no navegador.

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

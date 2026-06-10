const { test, expect } = require('@playwright/test');

test.describe('Catálogo Usados de Qualidade', () => {
  test('deve exibir produtos disponíveis na página inicial', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /Economize sem abrir mão da qualidade/i })).toBeVisible();
    await expect(page.locator('.product-card').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Ver detalhes' }).first()).toBeVisible();
  });

  test('deve filtrar produtos por categoria tecnologia', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Tecnologia' }).click();

    const cards = page.locator('.product-card');
    await expect(cards.first()).toBeVisible();
    await expect(cards.filter({ hasText: 'Monitor LG UltraWide 29"' }).first()).toBeVisible();
  });

  test('deve abrir detalhes do produto e exibir ações principais', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Ver detalhes' }).first().click();

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: /Fechar negócio no WhatsApp/i })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Compartilhar' })).toBeVisible();
  });
});

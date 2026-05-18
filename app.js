const STORAGE_KEY = 'novachance-theme';
const DEFAULT_DARK = 'dark';
const WHATSAPP_NUMBER = '5511982633161';
const SITE_NAME = 'NovaChance';
const PICKUP_LOCATION = 'Estação Metrô São Judas';
const FIXED_PAYMENT = 'PIX, Transferência, Dinheiro';

const icons = {
  site: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm6.92 9h-3.01a15.92 15.92 0 00-1.38-5.02A8.03 8.03 0 0118.92 11ZM12 4.04c.83 1.2 1.86 3.6 2.15 6.96H9.85C10.14 7.64 11.17 5.24 12 4.04ZM8.47 5.98A15.92 15.92 0 007.09 11H4.08a8.03 8.03 0 014.39-5.02ZM4.08 13h3.01c.17 1.82.63 3.55 1.38 5.02A8.03 8.03 0 014.08 13ZM12 19.96c-.83-1.2-1.86-3.6-2.15-6.96h4.3c-.29 3.36-1.32 5.76-2.15 6.96ZM15.53 18.02c.75-1.47 1.21-3.2 1.38-5.02h3.01a8.03 8.03 0 01-4.39 5.02ZM16.91 11H7.09c.18-2.07.74-3.93 1.55-5.35C9.46 4.27 10.61 3.5 12 3.5c1.39 0 2.54.77 3.36 2.15.81 1.42 1.37 3.28 1.55 5.35Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 103 4.97 1.97 1.97 0 005.25 3ZM20.44 12.72c0-3.42-1.82-5.01-4.25-5.01a3.69 3.69 0 00-3.23 1.77h-.05V8.5H9.64V20h3.38v-6.2c0-1.63.31-3.2 2.33-3.2s2 1.9 2 3.3V20h3.38v-6.78Z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 000 12.67a12.17 12.17 0 008.2 11.56c.6.12.82-.27.82-.59v-2.08c-3.34.75-4.04-1.66-4.04-1.66-.55-1.42-1.33-1.8-1.33-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.27 1.84 1.27 1.08 1.89 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.36-5.46-6.06 0-1.34.46-2.43 1.23-3.28-.12-.31-.54-1.56.12-3.25 0 0 1-.33 3.3 1.26a11.16 11.16 0 016 0c2.3-1.59 3.3-1.26 3.3-1.26.66 1.69.24 2.94.12 3.25.77.85 1.23 1.94 1.23 3.28 0 4.71-2.8 5.75-5.47 6.06.43.38.82 1.13.82 2.27v3.36c0 .32.22.71.83.59A12.17 12.17 0 0024 12.67 12 12 0 0012 .5Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2Zm0 1.8A3.7 3.7 0 003.8 7.5v9a3.7 3.7 0 003.7 3.7h9a3.7 3.7 0 003.7-3.7v-9a3.7 3.7 0 00-3.7-3.7h-9Zm10.65 1.35a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4ZM12 7a5 5 0 110 10 5 5 0 010-10Zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4Z"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.89 11.89 0 0012.08 0 11.93 11.93 0 001.89 17.94L0 24l6.25-1.84a11.96 11.96 0 005.83 1.5h.01A11.92 11.92 0 0024 11.7a11.9 11.9 0 00-3.48-8.22ZM12.09 21.9h-.01a10 10 0 01-5.1-1.41l-.37-.22-3.7 1.09 1.09-3.6-.24-.37a10.03 10.03 0 0116.58-12.5 10.03 10.03 0 01-7.34 17.01Zm5.73-7.5c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.21.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.67-.96-2.29-.25-.6-.5-.52-.7-.53h-.6c-.21 0-.54.08-.83.39-.28.31-1.09 1.06-1.09 2.58 0 1.52 1.12 3 1.28 3.2.16.21 2.2 3.36 5.33 4.7.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.83-.74 2.09-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.59-.36Z"/></svg>',
};

function getCatalogPath() {
  // Works for GitHub Pages in a subfolder and for direct /index.html access.
  if (document.body?.dataset?.page === 'product') {
    // /products/<slug>/index.html
    return '../../catalog.json';
  }
  return './catalog.json';
}

function resolvePath(path) {
  return new URL(path, window.location.href).toString();
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function currentPageMessage(product) {
  const link = window.location.href;
  if (product) {
    return `Olá! Tenho interesse no produto "${product.title}" da ${SITE_NAME}. Link: ${link}`;
  }
  return `Olá! Quero fechar negócio com a ${SITE_NAME}. Pode me enviar mais detalhes do catálogo? Link: ${link}`;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;
  const isDark = theme === DEFAULT_DARK;
  toggle.setAttribute('aria-pressed', String(!isDark));
  toggle.querySelector('.theme-toggle__icon').textContent = isDark ? '☀' : '☾';
  toggle.querySelector('.theme-toggle__label').textContent = isDark ? 'Tema claro' : 'Tema escuro';
}

function initializeTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? DEFAULT_DARK : 'light');
  applyTheme(theme);
  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === DEFAULT_DARK ? 'light' : DEFAULT_DARK;
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

async function loadCatalog() {
  const response = await fetch(getCatalogPath(), { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Não foi possível carregar o catálogo.');
  }
  return response.json();
}

function formatProductUrl(product) {
  // Always point to index.html for maximum compatibility on GitHub Pages.
  return resolvePath(`./products/${product.slug}/index.html`);
}

function renderFooter(product) {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  const whatsappMessage = currentPageMessage(product);
  footer.innerHTML = `
    <div class="site-footer__inner">
      <div class="footer-meta">
        <span class="footer-avatar" aria-hidden="true">SQ</span>
        <div>
          <strong>Desenvolvido por SantosQA</strong>
          <span>Layout acessível, responsivo e preparado para GitHub Pages.</span>
        </div>
      </div>
      <div class="footer-links" aria-label="Links SantosQA">
        <a class="icon-link" href="https://santosqa.github.io/" target="_blank" rel="noreferrer" aria-label="Site SantosQA">${icons.site}</a>
        <a class="icon-link" href="https://www.linkedin.com/in/santosqa/" target="_blank" rel="noreferrer" aria-label="LinkedIn SantosQA">${icons.linkedin}</a>
        <a class="icon-link" href="https://github.com/santosqa" target="_blank" rel="noreferrer" aria-label="GitHub SantosQA">${icons.github}</a>
        <a class="icon-link" href="https://www.instagram.com/santosqa_" target="_blank" rel="noreferrer" aria-label="Instagram SantosQA">${icons.instagram}</a>
        <a class="icon-link" href="${buildWhatsAppUrl(whatsappMessage)}" target="_blank" rel="noreferrer" aria-label="WhatsApp NovaChance">${icons.whatsapp}</a>
      </div>
    </div>
  `;
}

function setWhatsAppCtas(product) {
  document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
    link.setAttribute('href', buildWhatsAppUrl(currentPageMessage(product)));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noreferrer');
  });
}

function renderHome(products) {
  const list = document.querySelector('#product-list');
  if (!list) return;

  const sorted = [...products].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  if (!sorted.length) {
    list.innerHTML = '<div class="empty-state">Nenhum produto cadastrado no momento.</div>';
    return;
  }

  list.innerHTML = sorted
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-card__image">
            <img src="${resolvePath(`./${product.mainImageUrl}`)}" alt="${product.galleryUrls?.[0]?.alt || product.title}" loading="lazy" />
          </div>
          <div class="product-card__content">
            <div>
              <span class="tag">Retirada: ${PICKUP_LOCATION}</span>
            </div>
            <div>
              <h3>${product.title}</h3>
              <p>${product.shortDescription}</p>
            </div>
            <strong class="price">${product.price}</strong>
            <div class="product-actions">
              <a class="ghost-button" href="${formatProductUrl(product)}">Ver detalhes</a>
              <a
                class="primary-button"
                href="${buildWhatsAppUrl(
                  `Olá! Tenho interesse no produto \"${product.title}\" da ${SITE_NAME}. Link: ${new URL(
                    `./products/${product.slug}/index.html`,
                    window.location.href,
                  ).toString()}`,
                )}"
                target="_blank"
                rel="noreferrer"
              >
                Fechar no WhatsApp
              </a>
            </div>
          </div>
        </article>
      `,
    )
    .join('');
}

function renderProduct(products) {
  const detailRoot = document.querySelector('#product-detail');
  if (!detailRoot) return;

  const segments = window.location.pathname.split('/').filter(Boolean);
  const slug = segments[segments.length - 1] === 'index.html' ? segments[segments.length - 2] : segments[segments.length - 1];

  const sorted = [...products].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const productIndex = sorted.findIndex((product) => product.slug === slug);
  const product = sorted[productIndex];

  if (!product) {
    detailRoot.innerHTML = '<div class="empty-state">Produto não encontrado.</div>';
    renderFooter();
    return;
  }

  document.title = `${product.title} | ${SITE_NAME}`;
  const previous = sorted[productIndex - 1];
  const next = sorted[productIndex + 1];

  const mainImageSrc = resolvePath(`../../${product.mainImageUrl}`);

  detailRoot.innerHTML = `
    <section class="product-detail" aria-labelledby="product-title">
      <div class="product-detail__media">
        <div class="detail-main-image">
          <img id="detail-main-image" src="${mainImageSrc}" alt="${product.galleryUrls?.[0]?.alt || product.title}" />
        </div>
        <div class="thumbnail-list" role="list" aria-label="Galeria do produto">
          ${(product.galleryUrls || [])
            .map(
              (image, index) => {
                const src = resolvePath(`../../${image.src}`);
                return `
                  <button
                    class="thumbnail-button"
                    type="button"
                    data-image-src="${src}"
                    data-image-alt="${image.alt}"
                    aria-label="Ver foto ${index + 1} de ${product.title}"
                    aria-current="${index === 0 ? 'true' : 'false'}"
                  >
                    <img src="${src}" alt="" />
                  </button>
                `;
              },
            )
            .join('')}
        </div>
      </div>
      <div class="product-detail__content">
        <p class="eyebrow">Produto disponível</p>
        <h1 id="product-title">${product.title}</h1>
        <p>${product.shortDescription}</p>
        <strong class="price">${product.price}</strong>
        <p>${product.description}</p>
        ${product.sizes?.length ? `<div><h2>Tamanhos</h2><ul class="size-list">${product.sizes.map((size) => `<li>${size}</li>`).join('')}</ul></div>` : ''}
        <ul class="detail-meta">
          <li><strong>Pagamento:</strong> ${product.paymentMethods?.join(', ') || FIXED_PAYMENT}</li>
          <li><strong>Retirada:</strong> Linha Azul do metrô — ${product.pickupLocation || PICKUP_LOCATION}</li>
        </ul>
        <div class="product-actions">
          <a class="primary-button" data-whatsapp-link="product-detail" href="#">Fechar negócio no WhatsApp</a>
          <a class="ghost-button" href="${resolvePath('../../index.html#catalogo')}">Voltar para Home</a>
        </div>
      </div>
    </section>
    <nav class="product-nav" aria-label="Navegação entre produtos">
      ${previous ? `<a class="nav-button" href="${new URL(`../${previous.slug}/index.html`, window.location.href).toString()}">← Produto anterior</a>` : '<span class="nav-button" aria-disabled="true">← Produto anterior</span>'}
      <a class="nav-button" href="${resolvePath('../../index.html#catalogo')}">Home</a>
      ${next ? `<a class="nav-button" href="${new URL(`../${next.slug}/index.html`, window.location.href).toString()}">Próximo produto →</a>` : '<span class="nav-button" aria-disabled="true">Próximo produto →</span>'}
    </nav>
  `;

  detailRoot.querySelectorAll('.thumbnail-button').forEach((button) => {
    button.addEventListener('click', () => {
      detailRoot.querySelector('#detail-main-image').src = button.dataset.imageSrc;
      detailRoot.querySelector('#detail-main-image').alt = button.dataset.imageAlt;
      detailRoot.querySelectorAll('.thumbnail-button').forEach((thumb) => thumb.setAttribute('aria-current', 'false'));
      button.setAttribute('aria-current', 'true');
    });
  });

  setWhatsAppCtas(product);
  renderFooter(product);
}

function renderStaticHeaderState() {
  setWhatsAppCtas();
  renderFooter();
}

async function bootstrap() {
  initializeTheme();
  const page = document.body.dataset.page;
  if (page === 'home') {
    renderStaticHeaderState();
  }

  try {
    const data = await loadCatalog();
    if (page === 'home') {
      renderHome(data.products);
      renderFooter();
      setWhatsAppCtas();
      return;
    }
    renderProduct(data.products);
  } catch (error) {
    const target = document.querySelector('#product-list, #product-detail');
    if (target) {
      target.innerHTML = `<div class="empty-state">${error.message}</div>`;
    }
    renderFooter();
  }
}

bootstrap();

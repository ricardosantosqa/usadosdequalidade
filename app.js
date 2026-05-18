const STORAGE_KEY = 'novachance-theme';
const DEFAULT_DARK = 'dark';
const WHATSAPP_NUMBER = '5511982633161';
const SITE_NAME = 'NovaChance';
const PICKUP_LOCATION = 'Estação Metrô São Judas';
const FIXED_PAYMENT = 'PIX, Transferência, Dinheiro';

const icons = {
  site: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm6.92 9h-3.01a15.92 15.92 0 00-1.38-5.02A8.03 8.03 0 0118.92 11ZM12 4.04c.83 1.2 1.86 3.6 2.15 6.96H9.85C10.14 7.64 11.17 5.24 12 4.04ZM4.08 13h3.01c.16 1.82.65 3.55 1.38 5.02A8.03 8.03 0 014.08 13Zm3.01-2H4.08a8.03 8.03 0 014.39-5.02A15.92 15.92 0 007.09 11Zm1.01 2h4.8c-.29 3.36-1.32 5.76-2.15 6.96-.83-1.2-1.86-3.6-2.15-6.96Zm0-2c.29-3.36 1.32-5.76 2.15-6.96.83 1.2 1.86 3.6 2.15 6.96H8.1ZM15.9 13h3.02a8.03 8.03 0 01-4.39 5.02c.73-1.47 1.22-3.2 1.37-5.02Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 103 4.97 1.97 1.97 0 005.25 3ZM20.44 12.72c0-3.42-1.82-5.01-4.25-5.01a3.69 3.69 0 00-3.33 1.83h-.05V8.5H9.44c.04.69 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92a2.22 2.22 0 012.08-1.48c1.47 0 2.06 1.12 2.06 2.76V20h3.36Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 000 12.67a12.17 12.17 0 008.2 11.56c.6.12.82-.27.82-.59v-2.08c-3.34.75-4.04-1.66-4.04-1.66-.55-1.42-1.33-1.8-1.33-1.8-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.84 1.35 3.53 1.03.1-.8.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.08 0-1.34.46-2.43 1.22-3.29-.12-.3-.53-1.54.12-3.21 0 0 1-.33 3.3 1.26a11.18 11.18 0 016 0c2.3-1.59 3.3-1.26 3.3-1.26.65 1.67.24 2.91.12 3.21.76.86 1.21 1.95 1.21 3.29 0 4.72-2.81 5.77-5.49 6.08.43.38.82 1.12.82 2.26v3.35c0 .32.22.72.83.59A12.17 12.17 0 0024 12.67 12 12 0 0012 .5Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2Zm0 1.8A3.7 3.7 0 003.8 7.5v9a3.7 3.7 0 003.7 3.7h9a3.7 3.7 0 003.7-3.7v-9a3.7 3.7 0 00-3.7-3.7Zm9.75 1.35a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1ZM12 6.85A5.15 5.15 0 111 12a5.16 5.16 0 015.15-5.15Zm0 1.8A3.35 3.35 0 1015.35 12 3.36 3.36 0 0012 8.65Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.89 11.89 0 0012.08 0 11.93 11.93 0 001.89 17.94L0 24l6.25-1.84a11.96 11.96 0 005.83 1.5h.01A11.92 11.92 0 0024 11.75a11.84 11.84 0 00-3.48-8.27ZM12.09 21.6h-.01a9.87 9.87 0 01-5.03-1.37l-.36-.21-3.71 1.09 1.12-3.62-.24-.37a9.88 9.88 0 118.23 4.48Zm5.42-7.4c-.3-.15-1.79-.88-2.07-.98-.28-.11-.49-.16-.7.15-.2.3-.8.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.7-1.7-.96-2.33-.25-.6-.5-.52-.7-.53h-.59c-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.58 0 1.5 1.1 2.96 1.25 3.16.15.2 2.16 3.3 5.22 4.62.73.32 1.3.5 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z"/></svg>',
};

function getBasePath() {
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const productsIndex = segments.indexOf('products');
  if (productsIndex > 0) {
    return '/' + segments.slice(0, productsIndex).join('/');
  }
  if (productsIndex === 0) {
    return '';
  }
  if (!segments.length) {
    return '';
  }
  const lastSegment = segments[segments.length - 1];
  if (lastSegment === 'index.html') {
    return segments.length > 1 ? '/' + segments.slice(0, -1).join('/') : '';
  }
  if (!lastSegment.includes('.')) {
    return '/' + segments.join('/');
  }
  return segments.length > 1 ? '/' + segments.slice(0, -1).join('/') : '';
}

function withBasePath(path) {
  const base = getBasePath();
  const cleaned = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleaned}` || '/';
}

function resolveSiteUrl(path = '') {
  return new URL(withBasePath(path), window.location.origin).toString();
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function currentPageMessage(product) {
  const link = window.location.pathname.includes('/products/') ? window.location.href : resolveSiteUrl('/');
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
  const response = await fetch(withBasePath('/catalog.json'));
  if (!response.ok) {
    throw new Error('Não foi possível carregar o catálogo.');
  }
  return response.json();
}

function formatProductUrl(product) {
  return withBasePath(`/${product.url}`);
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
  if (!products.length) {
    list.innerHTML = '<div class="empty-state">Nenhum produto cadastrado no momento.</div>';
    return;
  }

  list.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-card__image">
            <img src="${withBasePath('/' + product.mainImageUrl)}" alt="${product.galleryUrls[0]?.alt || product.title}" loading="lazy" />
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
              <a class="primary-button" href="${buildWhatsAppUrl(`Olá! Tenho interesse no produto \"${product.title}\" da ${SITE_NAME}. Link: ${resolveSiteUrl('/' + product.url)}`)}" target="_blank" rel="noreferrer">Entrar em contato</a>
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

  const slug = window.location.pathname.split('/').filter(Boolean).slice(-1)[0] === 'index.html'
    ? window.location.pathname.split('/').filter(Boolean).slice(-2, -1)[0]
    : window.location.pathname.split('/').filter(Boolean).slice(-1)[0];
  const productIndex = products.findIndex((product) => product.slug === slug);
  const product = products[productIndex];

  if (!product) {
    detailRoot.innerHTML = '<div class="empty-state">Produto não encontrado.</div>';
    renderFooter();
    return;
  }

  document.title = `${product.title} | ${SITE_NAME}`;
  const previous = products[productIndex - 1];
  const next = products[productIndex + 1];

  detailRoot.innerHTML = `
    <section class="product-detail" aria-labelledby="product-title">
      <div class="product-detail__media">
        <div class="detail-main-image">
          <img id="detail-main-image" src="${withBasePath('/' + product.mainImageUrl)}" alt="${product.galleryUrls[0]?.alt || product.title}" />
        </div>
        <div class="thumbnail-list" role="list" aria-label="Galeria do produto">
          ${product.galleryUrls
            .map(
              (image, index) => `
                <button
                  class="thumbnail-button"
                  type="button"
                  data-image-src="${withBasePath('/' + image.src)}"
                  data-image-alt="${image.alt}"
                  aria-label="Ver foto ${index + 1} de ${product.title}"
                  aria-current="${index === 0 ? 'true' : 'false'}"
                >
                  <img src="${withBasePath('/' + image.src)}" alt="" />
                </button>
              `,
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
          <a class="ghost-button" href="${withBasePath('/#catalogo')}">Voltar para Home</a>
        </div>
      </div>
    </section>
    <nav class="product-nav" aria-label="Navegação entre produtos">
      ${previous ? `<a class="nav-button" href="${formatProductUrl(previous)}">← Produto anterior</a>` : '<span class="nav-button" aria-disabled="true">← Produto anterior</span>'}
      <a class="nav-button" href="${withBasePath('/#catalogo')}">Home</a>
      ${next ? `<a class="nav-button" href="${formatProductUrl(next)}">Próximo produto →</a>` : '<span class="nav-button" aria-disabled="true">Próximo produto →</span>'}
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

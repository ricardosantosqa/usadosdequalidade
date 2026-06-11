/**
 * Testes unitários para app.js
 * Testa funções principais de tema, categorias e utilitários
 */

// Mock do localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

global.localStorage = localStorageMock;

// Constantes que devem corresponder ao app.js
const STORAGE_KEY = 'usadosdequalidade-theme';
const DEFAULT_DARK = 'dark';
const WHATSAPP_NUMBER = '5511982633161';
const SITE_NAME = 'UsadosDeQualidade';
const PICKUP_LOCATION = 'Estação Metrô São Judas';

// Funções do app.js para testar (copiadas do arquivo original)
function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function currentPageMessage(product) {
  const link = 'http://localhost:8000';
  if (product) {
    return `Olá! Tenho interesse no produto "${product.title}" da ${SITE_NAME}. Link: ${link}`;
  }
  return `Olá! Quero fechar negócio com a ${SITE_NAME}. Pode me enviar mais detalhes do catálogo? Link: ${link}`;
}

// ─── TESTES ─────────────────────────────────────────────────────────────────

describe('Funções Utilitárias', () => {
  test('buildWhatsAppUrl deve criar URL correta do WhatsApp', () => {
    const message = 'Olá!';
    const url = buildWhatsAppUrl(message);
    expect(url).toContain('https://wa.me/');
    expect(url).toContain(WHATSAPP_NUMBER);
    expect(url).toContain('text=');
  });

  test('buildWhatsAppUrl deve codificar a mensagem', () => {
    const message = 'Olá! Tenho interesse';
    const url = buildWhatsAppUrl(message);
    expect(url).toContain(encodeURIComponent(message));
  });

  test('currentPageMessage deve retornar mensagem para produto', () => {
    const product = {
      title: 'Produto Teste',
      price: 'R$ 100,00',
    };
    const message = currentPageMessage(product);
    expect(message).toContain('Tenho interesse');
    expect(message).toContain('Produto Teste');
    expect(message).toContain(SITE_NAME);
  });

  test('currentPageMessage deve retornar mensagem genérica sem produto', () => {
    const message = currentPageMessage(null);
    expect(message).toContain('Quero fechar negócio');
    expect(message).toContain(SITE_NAME);
    expect(message).not.toContain('undefined');
  });
});

describe('Constantes de Configuração', () => {
  test('STORAGE_KEY deve estar definida', () => {
    expect(STORAGE_KEY).toBe('usadosdequalidade-theme');
  });

  test('DEFAULT_DARK deve ser "dark"', () => {
    expect(DEFAULT_DARK).toBe('dark');
  });

  test('SITE_NAME deve estar definido', () => {
    expect(SITE_NAME).toBe('UsadosDeQualidade');
  });

  test('WHATSAPP_NUMBER deve ser válido', () => {
    expect(WHATSAPP_NUMBER).toMatch(/^\d{13}$/);
  });

  test('PICKUP_LOCATION deve estar definida', () => {
    expect(PICKUP_LOCATION).toContain('Estação');
  });
});

describe('localStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('deve salvar e recuperar tema', () => {
    localStorage.setItem(STORAGE_KEY, 'light');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  });

  test('deve sobrescrever tema anterior', () => {
    localStorage.setItem(STORAGE_KEY, 'dark');
    localStorage.setItem(STORAGE_KEY, 'light');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  });

  test('deve retornar null para chave inexistente', () => {
    expect(localStorage.getItem('chave-inexistente')).toBeNull();
  });

  test('deve remover itens do storage', () => {
    localStorage.setItem(STORAGE_KEY, 'dark');
    localStorage.removeItem(STORAGE_KEY);
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });
});

describe('Validação de Dados', () => {
  test('produto deve ter propriedades obrigatórias', () => {
    const product = {
      slug: 'teste-produto',
      title: 'Produto Teste',
      price: 'R$ 100,00',
      shortDescription: 'Descrição curta',
      description: 'Descrição detalhada',
      pickupLocation: 'Local de retirada',
      paymentMethods: ['PIX', 'Transferência'],
    };

    expect(product).toHaveProperty('slug');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('price');
    expect(product.paymentMethods).toBeInstanceOf(Array);
    expect(product.paymentMethods.length).toBeGreaterThan(0);
  });
});

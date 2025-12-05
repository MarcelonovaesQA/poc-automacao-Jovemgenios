import { type Locator, type Page, expect } from '@playwright/test';

export class AboutPage {
    readonly page: Page;
    readonly tituloSobre: Locator;

    constructor(page: Page) {
        this.page = page;
        // Estratégia: Em vez de buscar texto solto, busca o Título Principal 
        this.tituloSobre = page.locator('h1, h2, h3').filter({ hasText: 'Sobre' }).first();
    }

    async validarQueCarregou() {
        // 1. Debug: Vamos imprimir a URL no terminal
        console.log(`A URL final carregada foi: ${this.page.url()}`);

        // 2. Validação Flexível da URL:
        // Aceita 'quem-somos', 'quemsomos', 'sobre', etc.
        await expect(this.page).toHaveURL(/.*(quem-somos|quemsomos|sobre).*/, { timeout: 10000 });

        // 3. Validação Visual
        // Garante que o usuário está vendo a seção "Sobre"
        await expect(this.tituloSobre).toBeVisible({ timeout: 10000 });
    }
}
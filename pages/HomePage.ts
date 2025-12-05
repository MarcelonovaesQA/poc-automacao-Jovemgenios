import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly botaoQuemSomos: Locator;
    readonly botaoEntrar: Locator; 
    readonly logo: Locator;  

    constructor(page: Page) {
        this.page = page;
        
        this.botaoQuemSomos = page.getByRole('link', { name: 'Quem somos' }).first();
       
        this.botaoEntrar = page.getByRole('link', { name: /entrar|login|acessar/i }).first();

        this.logo = page.getByRole('img', { name: /Jovens Gênios|Logo/i }).first();
    }

    async acessar() {
        await this.page.goto('https://www.jovensgenios.com/');
    }

async validarElementosCriticos() {
        // 1. O Menu "Quem Somos"
        await expect(this.botaoQuemSomos).toBeVisible({ timeout: 10000 });
        
        // 2. O Logo deve estar 
        await expect(this.logo).toBeVisible();
 
    }

    async irParaQuemSomos() {
        await this.botaoQuemSomos.click();
    }
}
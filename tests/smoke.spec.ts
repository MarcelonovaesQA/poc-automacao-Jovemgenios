import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';

test.describe('Jovens Gênios - Smoke Test Completo', () => {

    test('Deve carregar Home com elementos críticos e navegar', async ({ page }) => {
        const home = new HomePage(page);
        const about = new AboutPage(page);

        // 1. Acessar
        await home.acessar();

        // 2. Validação "Heavy": Confere Logo, Menu e Botão de Login
        // Se o logo sumiu, o teste falha aqui.
        await home.validarElementosCriticos();

        // 3. Navegação
        await home.irParaQuemSomos();

        // 4. Validação da Página de Destino
        await about.validarQueCarregou();
    });

});
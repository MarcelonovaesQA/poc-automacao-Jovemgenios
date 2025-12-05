# POC de Automação - Jovens Gênios

Olá, João e Rodrigo

Saindo da nossa entrevista, fiquei pensando no desafio de migração para Next.js que conversamos. Resolvi usar meu tempo livre para montar essa prova de conceito (POC) e demonstrar na prática como eu atuaria, caso minha explicação teórica não tenha sido suficiente.

A ideia aqui não é testar o site inteiro, mas sim mostrar como eu estruturaria a arquitetura desse projeto do zero para garantir uma migração segura e organizada.


## Por que fiz desse jeito?

Escolhi as ferramentas pensando nos problemas reais de uma migração de tecnologia:

* **Playwright:** Escolhi pela capacidade de lidar nativamente com o carregamento dinâmico do Next.js . Diferente do Cypress, ele espera os elementos estarem prontos antes de interagir.
* **TypeScript:** Para manter a automação na mesma linguagem que o time de desenvolvimento já utiliza.
* **Page Objects:** Organizei o código separando a lógica de teste dos elementos da tela. Isso facilita a manutenção: se o design mudar, ajustamos apenas em um lugar.
* **GitHub Codespaces:** Como estou sem acesso a um ambiente local com Node.js no momento, configurei toda a pipeline rodando 100% na nuvem. Isso garante que o ambiente seja replicável por qualquer pessoa do time.

## O que foi testado (Smoke Test)

Criei um roteiro de verificação básica para garantir que as funcionalidades vitais estão de pé:

1.  **Disponibilidade:** Verifico se a Home carrega corretamente e não apresenta erros de renderização.
2.  **Identidade Visual:** Validação de elementos críticos como o Logo e o Menu principal, garantindo que a marca e a navegação estão visíveis.
3.  **Navegação e Rotas:**
    * O teste acessa a página "Quem Somos" e valida o carregamento.
    * Obs: Durante o desenvolvimento, notei que a URL poderia variar (com ou sem hífen), então implementei uma validação flexível (Regex) que aceita ambos os formatos sem quebrar o teste.

## Como rodar o projeto

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Rode os testes (modo headless/invisível):
    ```bash
    npx playwright test
    ```

3.  Para visualizar o relatório detalhado:
    ```bash
    npx playwright show-report
    ```

## Próximos Passos

Para evoluir este projeto em uma suíte de regressão completa, eu focaria em:

* Configurar a execução em emuladores Mobile (iPhone/Android) no arquivo de config para garantir a responsividade.
* Integrar a execução no CI/CD para rodar a cada Pull Request.

---
Desenvolvido por Marcelo Novaes.
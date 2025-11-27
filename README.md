# Aplicativo Mobile Cross-Platform (Ionic/Angular Standalone)

[![Ionic](https://img.shields.io/badge/Ionic-8.0.0-blue.svg)](https://ionicframework.com/)
[![Angular](https://img.shields.io/badge/Angular-20.0.0-red.svg)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.0-blue.svg)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7.4.4-orange.svg)](https://capacitorjs.com/)
[![Standalone](https://img.shields.io/badge/Angular-Standalone-green.svg)](https://angular.dev/essentials/standalone-components)
[![Testing](https://img.shields.io/badge/Testing-Jasmine%20%7C%20Karma-purple.svg)](https://karma-runner.github.io/)

Projeto base para o aplicativo **Hoopi**, desenvolvido com **Ionic Framework (Standalone)** e **Angular**. Focado em uma experiência de desenvolvimento moderna, o projeto utiliza componentes autônomos e o Capacitor para deploy em plataformas mobile (iOS/Android) e Web.

---

## Objetivo

Fornecer uma base de projeto sólida, profissional e escalável para desenvolvimento de um aplicativo mobile cross-platform, utilizando componentes Angular Standalone, e pré-configurado para deploy em múltiplas plataformas via Capacitor.

---

## Características

* **Componentes Angular Standalone**: Utiliza a abordagem autônoma do Angular, simplificando a modularidade e o gerenciamento de dependências.
* **Ionic Framework 8.x**: Acesso a componentes UI com design nativo e mobile-first.
* **Roteamento Eficiente**: Rotas configuradas no `app.routes.ts` com Lazy Loading e estratégia de pré-carregamento de módulos (`PreloadAllModules`) para otimizar a velocidade de navegação.
* **TypeScript Rigoroso**: Configurado com modo `strict: true` e outras regras de tipagem para maior segurança e qualidade de código.
* **Capacitor Integrado**: Pronto para compilar e executar o aplicativo em ambientes iOS, Android e Web com o Capacitor CLI.
* **Padrões de Código**: Utiliza `@angular-eslint` para linting e `.editorconfig` para formatação consistente (ex: `indent_size = 2`, `quote_type = single` para TS).
* **Testes Unitários**: Configuração básica com Karma e Jasmine para testes de componentes e lógica.

---

## Quick Start

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados. Recomenda-se a instalação global do CLI do Ionic:

```bash
npm install -g @ionic/cli

# Clone o repositório
git clone <repository-url> hoopi_io
cd hoopi_io

# Instale todas as dependências do Node.js
npm install

# Inicie o servidor de desenvolvimento web
ionic serve
# O aplicativo estará disponível em http://localhost:8100/


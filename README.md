# ONG Mãos que Ajudam - Website Institucional (SPA)

Este é o repositório do website institucional da ONG Mãos que Ajudam, desenvolvido como uma Single Page Application (SPA) utilizando Vite, Tailwind CSS e JavaScript puro. O projeto visa proporcionar uma experiência de usuário moderna, rápida e acessível.

## ✨ Funcionalidades Implementadas

* **Single Page Application (SPA):** Navegação fluida entre seções sem recarregamento da página, utilizando roteamento por hash (`#`).
* **Design System Consistente:** Interface padronizada com Tailwind CSS, incluindo paleta de cores, tipografia hierárquica e espaçamentos modulares.
* **Componentes Reutilizáveis:** Header e Footer gerados via templates JavaScript.
* **Responsividade:** Layout adaptado para diferentes tamanhos de tela (desktop, tablet, mobile).
* **Interatividade:** Componentes como menu mobile, modal, toast e gráficos dinâmicos (Chart.js).
* **Modo Escuro:** Alternador manual de tema (claro/escuro) com persistência da preferência do usuário via `localStorage`.
* **Acessibilidade (Básica):** Uso de HTML semântico, atributos `alt` descritivos para imagens e `title` para iframes.
* **Ambiente de Desenvolvimento Moderno:** Configurado com Vite para desenvolvimento rápido e build otimizado para produção.
* **Controle de Versão:** Histórico gerenciado com Git e hospedado no GitHub.

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3 (com Tailwind CSS v3)
* JavaScript (ES6+ Modules)
* Vite
* Chart.js
* Font Awesome (para ícones)
* Git / GitHub

## ⚙️ Como Executar Localmente

1.  **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) (versão LTS recomendada) e o [Git](https://git-scm.com/) instalados.
2.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git]https://github.com/valvessilva2000-commits/ong-site-spa.git 
    cd SEU_REPOSITORIO 
    ```
    *(Substitua `SEU_USUARIO/SEU_REPOSITORIO` pelo caminho real do seu repo)*
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  Abra seu navegador no endereço fornecido (geralmente `http://localhost:5173`).

## 📦 Build para Produção

Para gerar os arquivos otimizados para publicação (minificados e com CSS purgado), execute:

```bash
npm run build
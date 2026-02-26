function trocarTema() {
    const link = document.getElementById("theme-style");
    const logo = document.getElementById("logo-tecboard");
    const modo = document.getElementById("icon-modo");
    const icon = document.getElementById("icon");

    if (link.getAttribute("href") === "/css/style-light-mode.css") {
        link.setAttribute("href", "/css/style-dark-mode.css");
        logo.setAttribute("src", "/img/logo-tecboard-branco.png");
        modo.setAttribute("src", "/img/icon-modo-claro.svg");
        icon.setAttribute("href", "/favicon-tecboard-branco.svg");
    } else {
        link.setAttribute("href", "/css/style-light-mode.css");
        logo.setAttribute("src", "/img/logo-tecboard-preto.png");
        modo.setAttribute("src", "/img/icon-modo-escuro.svg");
        icon.setAttribute("href", "/favicon-tecboard-preto.svg");
    }
}
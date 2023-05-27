// Criando um component
// É sempre necessário chamar o "constructor" e o método "super"

class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // TODO: Criar base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        // TODO: Estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `

        // Enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico)
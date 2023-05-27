// Criando a classe CardNews e extendendo-a ao documento HTML.
class CardNews extends HTMLElement {
    // O "constructor" sempre deverá ser chamado e logo após o método "super" também sempre deverá ser chamado.
    constructor() {
        super();

        // Criação da Shadow DOM e setando ela como "aberta/open" para permitir a interação externa com ela.
        const shadow = this.attachShadow({ mode: "open" });
        // Pendurando na Shadow criada as duas próximas funções.
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }
    build(){
        // Criando a div card e adicionando os atributos ou props ("class", "card").
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

            // Criando a div "cardLeft" e setando os atributos para depois vincular ela à div "card"/componentRoot.
            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card__left");

                // Criando as divs mais internas da div "cardLeft".
                const spanAutor = document.createElement("span");
                const aTitulo = document.createElement("a");
                const pChamadaMateria = document.createElement("p");

                // Ligando as divs menores ("span", "a" e "p") à div superior/pai ("div" de class "cardLeft").
                cardLeft.appendChild(spanAutor);
                cardLeft.appendChild(aTitulo);
                cardLeft.appendChild(pChamadaMateria);

            // Criando a div "cardRight" e setando os atributos dela para depois vincular ela à div "card"/componentRoot.
            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");

                const img = document.createElement("img");
                img.setAttribute("src", "./assets/imagem.png");
                img.setAttribute("alt", "texto descritivo da imagem selecionada.");

                cardRight.appendChild(img);
        // Pendurando os cards left e right no componentRoot, que é a div raiz/pai de todas as posterioes e que, por sua vez, está pendurada diretamente na shadow DOM criada.
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }
    styles(){
        
    }

}

customElements.define("card-news", CardNews);






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

                // Criando as divs "span", "a" e "p", filhas da div "cardLeft" e setando as props/atrinutos delas para serem usadas dinâmicamente através do HTML.
                const spanAutor = document.createElement("span");
                spanAutor.textContent = "By " + (this.getAttribute("autor") || "Anonymous ");

                const linkTitle = document.createElement("a");
                linkTitle.textContent = this.getAttribute("title");
                // Aqui vamos permitir a utilização de uma prop já existente.
                linkTitle.href = this.getAttribute("link-url") || "https://www.safesite.com/";

                const newsContent = document.createElement("p");
                newsContent.textContent = this.getAttribute("text");

                // Ligando as divs menores ("span", "a" e "p") à div superior/pai ("div" de class "cardLeft").
                cardLeft.appendChild(spanAutor);
                cardLeft.appendChild(linkTitle);
                cardLeft.appendChild(newsContent);

            // Criando a div "cardRight" e setando os atributos dela para depois vincular ela à div "card"/componentRoot.
            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");

                const newsImage = document.createElement("img");
                newsImage.src = this.getAttribute("photo") || "./assets/default-photo.png"
                newsImage.alt = this.getAttribute("alt") || "Descrição da imagem."
                // Obsservação: Procurar sempre tornar os components inteligentes e automatizados para que trabalhem preenchendo seus campos no que for necessário em caso de o usuário não preencher os dados de entrada. Os exemplos de uma ação automática estão onde declaramos um "his.getAttribute("") || "Ação alternativa".

                cardRight.appendChild(newsImage);
        // Pendurando os cards left e right no componentRoot, que é a div raiz/pai de todas as posterioes e que, por sua vez, está pendurada diretamente na shadow DOM criada.
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }
    styles(){
        
    }

}

customElements.define("card-news", CardNews);






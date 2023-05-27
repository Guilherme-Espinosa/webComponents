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
                newsContent.textContent = this.getAttribute ("text");

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
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            margin: .5rem;
            background-color: antiquewhite;
            border: 1px solid grey;
            border-radius: .3rem;
            -webkit-box-shadow: 21px 18px 7px -11px rgba(0,0,0,0.75);
            -moz-box-shadow: 21px 18px 7px -11px rgba(0,0,0,0.75);
            box-shadow: 21px 18px 7px -11px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        /* .card__left, .card__right {
            border: 1px solid blue;
        } */
        
        img {
            height: 7rem;
            width: 10rem;
            background-color: black;
            margin: .3rem;
            border-radius: .3rem
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: .625rem;
        }
        
        .card__left span {
            font-weight: 400;
            font-style: italic;
            padding: .312rem;
        }
        
        .card__left a {
            margin: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;
            color: black;
        }
        
        .card__left p {
            color: rgb(43, 43, 43);
            padding: .312rem;
            text-align: justify;
        }
        `

        return style
    }

}

customElements.define("card-news", CardNews);






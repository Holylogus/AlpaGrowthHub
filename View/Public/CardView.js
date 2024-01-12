export default class CardView{
    constructor(parrentElement, object){
        this.parrentElement = parrentElement;
        this.object = object;
        this.htmlConstruct()
    }

    /* <div class="card">
            <img src="#" class="card-img-top" alt="featured-img" />
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p>Add some text here</p>
              <button type="button">Kosár</button>
            </div>
          </div> */
    htmlConstruct(){
        //Card div létrehozása
        let cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        $(this.parrentElement).append(cardDiv);

        //Kép csatolása
        let cardImg = document.createElement("img")
        cardImg.setAttribute("src", this.object.img)
        cardImg.setAttribute("alt", "Kártya könyv kép")
        cardImg.classList.add("card-img-top")
        $(cardDiv).append(cardImg);

        //Card - Body létrehozása
        let CardBody = document.createElement("div")
        CardBody.classList.add("card-body")
        $(cardDiv).append(CardBody);
        let cardTex = ` <h5>${this.object.title}</h5>
                        <p>Szerző: ${this.object.author}</p>
                        <p>Kategória: ${this.object.category}</p>
                        <p>Ár: ${this.object.price},-Ft</p>`
        CardBody.innerHTML = cardTex
        
        //Kosár gomb létrehozása
        let cartButton = document.createElement("button")
        cartButton.setAttribute("type", "button")
        cartButton.classList.add("cart-button")
        cartButton.textContent = "Kosár"
        $(CardBody).append(cartButton);


    }
}
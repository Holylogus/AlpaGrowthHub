import { headerDescription } from "./adatleiro.js";

export default class PostUrlapView{
    #formdata = {}
    constructor(parrentElement, submitElement){
        this.parrentElement = parrentElement;
        this.submitElement = submitElement;
        this.htmlConsturct();
        //submit gomb megfogása
         this.submitButton = $("#submit")

        //input elemek megfogása
        this.title = $("#title");
        this.author = $("#author");
        this.price = $("#price");
        this.img = $("#img");
        this.category = $("#category");
        //eseménykezelés - Submit
        $(this.submitButton).on("click", (e) => {
            e.preventDefault();
            this.#formdata.title = $(this.title).val();
            this.#formdata.author = $(this.author).val();
            this.#formdata.price = $(this.price).val();
            this.#formdata.img = $(this.img).val();
            this.#formdata.category = $(this.category).val();
            console.log(this.#formdata);
            this.trigger("PostNewData");
        });
    }

    trigger(myEvent){
        const e = new CustomEvent(myEvent,{detail:this.#formdata})
        window.dispatchEvent(e);
    }

    htmlConsturct(){
        //form element létrehozása és attributumainak beállítása
        let formElement = document.createElement("form")
        formElement.setAttribute("method", "post")
        $(this.parrentElement).append(formElement);



        //Cím mező létrehozása
        let tileLable = document.createElement("label");
        tileLable.setAttribute("for", "title");
        tileLable.textContent = "Cím";
        let titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "title");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("required", "");
        let titleDiv = document.createElement("div")
        titleDiv.classList.add("title")
        $(titleDiv).append(tileLable);
        $(titleDiv).append(titleInput);
        $(formElement).append(titleDiv);

        //Szerző mező létrehozása
        let authorLable = document.createElement("label");
        authorLable.setAttribute("for", "author");
        authorLable.textContent = "Szerző:";
        let authorInput = document.createElement("input");
        authorInput.setAttribute("type", "text");
        authorInput.setAttribute("id", "author");
        authorInput.setAttribute("name", "author");
        authorInput.setAttribute("required", "");
        let authorDiv = document.createElement("div")
        titleDiv.classList.add("author")
        $(authorDiv).append(authorLable);
        $(authorDiv).append(authorInput);
        $(formElement).append(authorDiv);

        //Ár mező létrehozása
        let priceLable = document.createElement("label");
        priceLable.setAttribute("for", "price");
        priceLable.textContent = "Ár:";
        let priceInput = document.createElement("input");
        priceInput.setAttribute("type", "number");
        priceInput.setAttribute("id", "price");
        priceInput.setAttribute("name", "price");
        priceInput.setAttribute("required", "");
        let priceDiv = document.createElement("div")
        priceDiv.classList.add("price")
        $(priceDiv).append(priceLable);
        $(priceDiv).append(priceInput);
        $(formElement).append(priceDiv);

        //Kép felöltés - egyenlőre csak textként fogadjuk, mint ha elérési út lenne
        let imgLable = document.createElement("label");
        imgLable.setAttribute("for", "img");
        imgLable.textContent = "Képfelöltés:";
        let imgInput = document.createElement("input");
        imgInput.setAttribute("type", "text");
        imgInput.setAttribute("id", "img");
        imgInput.setAttribute("name", "img");
        imgInput.setAttribute("required", "");
        let imgDiv = document.createElement("div")
        imgDiv.classList.add("price")
        $(imgDiv).append(imgLable);
        $(imgDiv).append(imgInput);
        $(formElement).append(imgDiv);

        //Kategória létrehozás
        let categoryLable = document.createElement("label");
        categoryLable.setAttribute("for", "category");
        categoryLable.textContent = "Kategória:";
        let categoryInput = document.createElement("input");
        categoryInput.setAttribute("type", "text");
        categoryInput.setAttribute("id", "category");
        categoryInput.setAttribute("name", "category");
        categoryInput.setAttribute("required", "");
        let categoryDiv = document.createElement("div")
        categoryDiv.classList.add("category")
        $(categoryDiv).append(categoryLable);
        $(categoryDiv).append(categoryInput);
        $(formElement).append(categoryDiv);

        //Sumbit létrehozása
        let submitButton = document.createElement("input")
        submitButton.classList.add("btn")
        submitButton.classList.add("btn-secondary")
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "Küldés")
        submitButton.setAttribute("id", "submit")
        submitButton.setAttribute("data-bs-dismiss", "modal")
        $(this.submitElement).append(submitButton);
    }
}
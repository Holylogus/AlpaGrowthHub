import { headerDescription } from "./adatleiro.js";

export default class PutUrlapView{

    constructor(parrentElement, submitElement, obj){
        this.parrentElement = parrentElement;
        this.submitElement = submitElement;
        this.obj = obj;
        this.htmlConsturct();
        //submit gomb megfogása
         this.submitButton = $("#put")

        //input elemek megfogása
        this.title = $("#putTitle");
        this.author = $("#putAuthor");
        this.price = $("#putPrice");
        this.img = $("#putImg");
        this.category = $("#putCategory");
        //eseménykezelés - Submit
        console.log(obj)
        $(this.submitButton).on("click", (e) => {
            e.preventDefault();
            this.obj.title = $(this.title).val();
            this.obj.author = $(this.author).val();
            this.obj.price = $(this.price).val();
            this.obj.img = $(this.img).val();
            this.obj.category = $(this.category).val();
            console.log(this.obj);
            this.trigger("PutNewData");
        });
    }

    trigger(myEvent){
        const e = new CustomEvent(myEvent,{detail:this.obj})
        window.dispatchEvent(e);
    }

    htmlConsturct(){
        //form element létrehozása és attributumainak beállítása
        let formElement = document.createElement("form")
        formElement.setAttribute("method", "post")
        $(this.parrentElement).append(formElement);



        //Cím mező létrehozása
        let tileLable = document.createElement("label");
        tileLable.setAttribute("for", "putTitle");
        tileLable.textContent = "Cím";
        let titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "putTitle");
        titleInput.setAttribute("name", "putTitle");
        titleInput.setAttribute("required", "");
        let titleDiv = document.createElement("div")
        titleDiv.classList.add("title")
        $(titleDiv).append(tileLable);
        $(titleDiv).append(titleInput);
        $(formElement).append(titleDiv);

        //Szerző mező létrehozása
        let authorLable = document.createElement("label");
        authorLable.setAttribute("for", "putAuthor");
        authorLable.textContent = "Szerző:";
        let authorInput = document.createElement("input");
        authorInput.setAttribute("type", "text");
        authorInput.setAttribute("id", "putAuthor");
        authorInput.setAttribute("name", "putAuthor");
        authorInput.setAttribute("required", "");
        let authorDiv = document.createElement("div")
        titleDiv.classList.add("author")
        $(authorDiv).append(authorLable);
        $(authorDiv).append(authorInput);
        $(formElement).append(authorDiv);

        //Ár mező létrehozása
        let priceLable = document.createElement("label");
        priceLable.setAttribute("for", "putPrice");
        priceLable.textContent = "Ár:";
        let priceInput = document.createElement("input");
        priceInput.setAttribute("type", "number");
        priceInput.setAttribute("id", "putPrice");
        priceInput.setAttribute("name", "priputPricece");
        priceInput.setAttribute("required", "");
        let priceDiv = document.createElement("div")
        priceDiv.classList.add("price")
        $(priceDiv).append(priceLable);
        $(priceDiv).append(priceInput);
        $(formElement).append(priceDiv);

        //Kép felöltés - egyenlőre csak textként fogadjuk, mint ha elérési út lenne
        let imgLable = document.createElement("label");
        imgLable.setAttribute("for", "putImg");
        imgLable.textContent = "Képfelöltés:";
        let imgInput = document.createElement("input");
        imgInput.setAttribute("type", "text");
        imgInput.setAttribute("id", "putImg");
        imgInput.setAttribute("name", "putImg");
        imgInput.setAttribute("required", "");
        let imgDiv = document.createElement("div")
        imgDiv.classList.add("price")
        $(imgDiv).append(imgLable);
        $(imgDiv).append(imgInput);
        $(formElement).append(imgDiv);

        //Kategória létrehozás
        let categoryLable = document.createElement("label");
        categoryLable.setAttribute("for", "putCategory");
        categoryLable.textContent = "Kategória:";
        let categoryInput = document.createElement("input");
        categoryInput.setAttribute("type", "text");
        categoryInput.setAttribute("id", "putCategory");
        categoryInput.setAttribute("name", "putCategory");
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
        submitButton.setAttribute("id", "put")
        submitButton.setAttribute("data-bs-dismiss", "modal")
        $(this.submitElement).append(submitButton);
    }
}
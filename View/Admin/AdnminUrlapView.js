export default class AdminUrlapView{
    constructor(parrentElement){
        this.parrentElement = parrentElement;
        this.htmlConsturct();
    }

    htmlConsturct(){
        //form element létrehozása és attributumainak beállítása
        let formElement = document.createElement("form")
        //formElement.setAttribute("action") = " ";
        //formElement.setAttribute("method") = "post";
        $(this.parrentElement).append(formElement);

        //
        let tileLable = document.createElement("label");
    }
}
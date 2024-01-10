import { adatleiro } from "./adatleiro.js";
import Fejlec from "./Fejlec.js";
import Sor from "./Sor.js";


export default class Table{
    constructor(list, parrentElement){
        this.list = list;
        console.log(list)
        this.htmlCreate(list, parrentElement)
        
    }

    htmlCreate(list,parrentElement){
        console.log(list)
        let table = document.createElement("table");
        let tbodyElement = document.createElement("tbody");
        let theadElement = document.createElement("thead")
        $(parrentElement).append(table);
        $(table).append(theadElement);
        $(table).append(tbodyElement);
        new Fejlec(adatleiro, theadElement);
        console.log(list)
        list.forEach(element => {
            new Sor(element,tbodyElement)
        });

    }
}
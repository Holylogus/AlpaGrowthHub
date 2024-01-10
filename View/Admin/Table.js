import { adatleiro } from "./adatleiro.js";
import Fejlec from "./Fejlec.js";
import Sor from "./Sor.js";


export default class Table{
    constructor(list, parrentElement){
        this.list = list;
        this.htmlCreate(list, parrentElement)
        
    }

    htmlCreate(list,parrentElement){
        let table = document.createElement("table");
        let tbodyElement = document.createElement("tbody");
        let theadElement = document.createElement("thead")
        $(parrentElement).append(table);
        $(table).append(theadElement);
        $(table).append(tbodyElement);
        new Fejlec(adatleiro, theadElement);
        let index = 1
        list.forEach(element => {
            new Sor(element, index, tbodyElement)
            index++
        });

    }
}
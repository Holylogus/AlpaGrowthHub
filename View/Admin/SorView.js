import { headerDescription } from "./adatleiro.js";

export default class Sor{
    #obj = {};
    constructor(obj, index, parrentElement){
        this.#obj = obj;
        this.id = index;
        this.parrentElement = parrentElement;
        this.htmlConstruct();
        //Törlés - Custrom Event
        this.deleteElement = $(this.parrentElement).find(".delete:last");
        this.deleteElement.on("click", ()=>{
            this.trigger("deleteRow")
        })
    }

    trigger(e){
        const myEvent = new CustomEvent(e,{detail:this.id})
        window.dispatchEvent(myEvent)
    }


    htmlConstruct(){
        
        let row = document.createElement("tr");
        //Adatok feltöltése
        for (const key in headerDescription) {
            let cell = document.createElement("td");
            cell.textContent = `${this.#obj[key]}`
            $(row).append(cell);
        }
        //Szerkesztés Gomb
        let editCell = document.createElement("td");
        let editButton = document.createElement("button");
        editButton.setAttribute("type","button");
        editButton.textContent = "Szerkesztés"
        editButton.setAttribute("data-bs-toggle", "modal");
        editButton.setAttribute("data-bs-target","#editModal")
        
        $(editCell).append(editButton);
        $(row).append(editCell);

        //Törlés Gomb
        let deleteCell = document.createElement("td")
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "X"
        $(deleteCell).append(deleteButton);
        $(row).append(deleteCell);

        //Sorok létrehozásaok létrehozzuk a rejtett modal-t is.
        
        $(this.parrentElement).append(row);
        
    }

    modalConstruct(){
        //Modal Fade alap div+beállításai
        let modalFadeDiv = document.createElement("div")
        modalFadeDiv.classList.add("modal");
        modalFadeDiv.classList.add("fade");
        modalFadeDiv.setAttribute("id","editModal")
        modalFadeDiv.setAttribute("data-bs-keyboard","false")
        modalFadeDiv.setAttribute("tabindex","-1")
        modalFadeDiv.setAttribute("aria-labelledby","editModalLabel")
        modalFadeDiv.setAttribute("aria-hidden","true")
        //Dialog Div-Létrehozása
        let ModalDialogDiv = document.createElement("div")
        ModalDialogDiv.classList.add("modal-dialog")
        ModalDialogDiv.classList.add("modal-dialog-centered")
        ModalDialogDiv.classList.add("modal-dialog-scrollable")
        $(modalFadeDiv).append(ModalDialogDiv);
        //Model Content Div - Létrehozása
        let ModalContentDiv = document.createElement("div")
        ModalContentDiv.classList.add("modal-content")
        ModalContentDiv.innerHTML(`<div class="modal-header">
        <h1 class="modal-title fs-5" id="editModalLabel">Adat Módosítása</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezár</button>
      </div>`)
      return modalFadeDiv;
    }
}
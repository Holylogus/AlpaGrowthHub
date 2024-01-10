export default class Sor{
    #obj = {};
    constructor(obj, index, parrentElement){
        this.#obj = obj;
        this.id = index;
        this.parrentElement = parrentElement;
        this.htmlConstruct();
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
        for (const key in this.#obj) {
            let cell = document.createElement("td");
            cell.textContent = `${this.#obj[key]}`
            $(row).append(cell);
        }
        let deleteCell = document.createElement("td")
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete")
        deleteButton.textContent = "X"
        $(deleteCell).append(deleteButton);
        $(row).append(deleteCell);
        $(this.parrentElement).append(row);
    }
}
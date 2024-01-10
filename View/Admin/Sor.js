export default class Sor{
    #obj = {};
    constructor(obj, parrentElement){
        this.#obj = obj;
        this.parrentElement = parrentElement;
        this.htmlConstruct();
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
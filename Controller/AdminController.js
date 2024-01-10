import AdminModel from "../Model/AdminModel.js"
import Table from "../View/Admin/Table.js";

export default class AdminController {
    constructor(){
        this.adminModel = new AdminModel();
        this.adminModel.getData("http://127.0.0.1:8000/api/books", this.megjelenit);
        $(window).on("deleteRow", (e) => {
            console.log(e.detail)
            this.adminModel.deleteData("books.json", e.detail)
        });
    }

    megjelenit(list){
        new Table(list, $(".admin"));
    }
}
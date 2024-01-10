import AdminModel from "../Model/AdminModel.js"
import Table from "../View/Admin/Table.js";

export default class AdminController {
    constructor(){
        this.adminModel = new AdminModel();
        this.adminModel.getData("books.json", this.megjelenit);
        $(window).on("deleteRow", (e) => {
            console.log(e.detail)
            this.adminModel.deleteData("books.json", e.detail)
        });
    }

    megjelenit(list){
        new Table(list, $(".admin"));
    }
}
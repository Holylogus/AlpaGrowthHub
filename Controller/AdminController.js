import AdminModel from "../Model/AdminModel.js"
import Table from "../View/Admin/Table.js";

export default class AdminController {
    constructor(){
        //console.log("controller")
        this.adminModel = new AdminModel();
        this.adminModel.getData("books.json", this.megjelenit);
    }

    megjelenit(list){
        console.log(list)
        new Table(list, $(".admin"));
    }
}
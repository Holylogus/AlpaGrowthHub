import AdminModel from "../../Model/AdminModel.js";
import PostUrlapView from "../../View/Admin/PostUrlapView.js";
import PutUrlapView from "../../View/Admin/PutUrlapView.js";


export default class UrlapController{
    constructor(){
        this.adminModel = new AdminModel();
        new PostUrlapView($("#PostFormBody"),$("#PostFormFooter"));
        $(window).on("PostNewData", (e) => {
            this.adminModel.postData("http://127.0.0.1:8000/api/books", e.detail)
        });
        $(window).on("editRow", (e) => {
            this.adminModel.showData("http://127.0.0.1:8000/api/books",e.detail,this.megjelenit)

            $(window).on("PutNewData",  (event) => {
                console.log(event.detail)
                this.adminModel.putData("http://127.0.0.1:8000/api/books",e.detail, event.detail)
                
            });   
        });    
    }
    megjelenit(object){
        new PutUrlapView($("#PutFormBody"),$("#PutFormFooter"),object);
    }
}
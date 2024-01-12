import PublicModel from "../../Model/PublicModel.js";
import CardView from "../../View/Public/CardView.js";
import PublicView from "../../View/Public/PublicView.js";

export default class PublicController{
    constructor(){
        this.publicModel = new PublicModel();
        this.publicModel.getData("http://127.0.0.1:8000/api/books", this.megjelenit);
    }

    megjelenit(list){
        let lastFourItem = list.slice(-5);
        console.log(lastFourItem)
        for (let index = 0; index < lastFourItem.length; index++) {
            new CardView($(".card-group"),lastFourItem[index]);
        }
    }
}
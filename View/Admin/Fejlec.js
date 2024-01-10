export default class Fejlec{
    constructor(dataDescribe,parrentElelemt){
        this.dataDescribe = dataDescribe;
        this.parrentElelemt = parrentElelemt;
        this.headHtmlConstruct();
    }

    headHtmlConstruct(){
        for (const key in this.dataDescribe) {
            let record = document.createElement("th")
            record.textContent = this.dataDescribe[key]
            $(this.parrentElelemt).append(record);
        }
    }
}
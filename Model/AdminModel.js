
export default class AdminModel{
    constructor(){
        console.log("model")
    }

    getData(vegpont, callback){
        axios.get(vegpont)
        .then(res => {
            console.log(res)
            callback(res.data.books)
        })
        .catch(err => {
            console.error(err); 
        })
    }
    
    postData(vegpont, callback){
        axios.post(vegpont)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }
}
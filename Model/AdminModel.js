
export default class AdminModel{
    constructor(){
        console.log("model")
    }

    getData(endpoint, callback){
        axios.get(endpoint)
        .then(res => {
            console.log(res)
            callback(res.data)
        })
        .catch(err => {
            console.error(err); 
        })
    }
    
    postData(endpoint, callback){
        axios.post(endpoint)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }

    deleteData(vegpont,id){
        axios
        .delete(vegpont+"/"+id)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }
}
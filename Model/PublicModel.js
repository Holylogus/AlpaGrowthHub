export default class PublicModel{
    constructor(){
        //console.log("model")
    }

    getData(endpoint, callback){
        axios.get(endpoint)
        .then(res => {
            //console.log(res)
            callback(res.data)
        })
        .catch(err => {
            console.error(err); 
        })
    }
    showData(endpoint,id, callback){
        axios.get(endpoint + "/"+id)
        .then(res => {
            console.log(res.data)
            callback(res.data)
            
        })
        .catch(err => {
            console.error(err); 
        })
    }
    
    postData(endpoint, data){
        axios.post(endpoint, data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }
    putData(endpoint,id,data){
        axios.put(endpoint +"/" + id, data)
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
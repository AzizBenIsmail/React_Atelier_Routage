import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001/products";
const apiURL = "http://localhost:3001/products";
export async function getProduct(){
    return await axios.get(apiURL);
}
export async function addProduct(product){
    return await axios.post(apiURL,product);
}
export async function updateProduct(id,product){
    return await axios.put('${apiURL}/${id}',product);
}
export async function deleteProduct(id,product){
    return await axios.delete('${apiURL}/${id}');
}
import axios from 'axios'

// hard coded no longer needed
 let catalog = [
//     {
//         id:1,
//         price: 35.00,
//         stock :50,
//         title:'shirt',
//         image: 'shirt.jpg',
//         category: 'apparel'
//     },
//     {
//         id:2,
//         price: 35.00,
//         stock: 50,
//         title:'tank',
//         image: 'tank.jpg',
//         category: 'apparel'
//     }, 
//     {
//         id:3,
//         price: 60.00,
//         stock: 50,
//         title:'hoodie',
//         image: 'hoodie.jpg',
//         category: 'apparel'
//     },
//     {
//         id:4,
//         price: 50.00,
//         stock: 50,
//         title:'joggers',
//         image: 'joggers.jpg',
//         category: 'apparel'
//     },
//     {
//         id:5,
//         price:45.00,
//         stock:50,
//         title:'shorts',
//         image: 'shorts.jpg',
//         category: 'apparel'
//     },
//     {
//         id:6,
//         price:25.00,
//         stock:50,
//         title:'hat',
//         image: 'cap.jpg',
//         category: 'apparel'
//     },
   
//     {
//         id:7,
//         price:25.00,
//         stock:50,
//         title:'skull cap',
//         image: 'skull_cap.jpg',
//         category: 'apparel'
//     }

 ]

class DataService{
    serverURL = 'http://127.0.0.1:5001'

    async getCatalog(){
        // call the server and get the dataService
        let response = await axios.get(this.serverURL + '/api/products');
        return response.data;
        // use the line below to show a catalog without a backend

        // return catalog
    }
    async saveProduct(prod){
        // send prod tp server request
        let response = await axios.post(this.serverURL + '/api/products', prod)
        console.log(response.data)
    }
    
}
export default DataService;
import {useEffect, useState} from 'react';
import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';

const Catalog = () => {
    let [products, setProducts]= useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    }

    useEffect(()=> {
        loadCatalog();
    }, [])

   

    return (
        <div className="catalog">
            <h2> This is our Catalog</h2>
            <h2>We have {products.length} Products</h2>
            
            
            <div className="products-container">
                {products.map((prod)=> (
                    <Product key={prod.id} data={prod}></Product>
            
                 ))}
            </div>

        </div>
    );
};

export default Catalog;
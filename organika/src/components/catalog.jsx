import './catalog.css';
import Product from './product';

const Catalog = () => {
    return (
        <div className="catalog">
            <h2> This is our Catalog</h2>
            <h2>We have # Products</h2>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>

        </div>
    )
}

export default Catalog;
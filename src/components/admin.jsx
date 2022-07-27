import './admin.css'
import {useState} from 'react'
import DataAService from "../services/dataService";

// create two sefctions .... create from / coupon
const Admin = () => {
    const[coupon, setCoupon] = useState({});
    const[product, setProduct] = useState({})
    const[allCoupons, setAllCoupons] = useState([])
    const[allProduct, setAllProduct] = useState ([])


    const handleCouponChange = (e) => {
       let name = e.target.name;
       let value = e.target.value;
                //// HOW TO MALE coupon2BeSaved IN JS
        let coupon2BeSaved = { ... coupon }; // create coupon2BeSaved
        coupon2BeSaved[name] = value; // modify coupon2BeSaved
       setCoupon(coupon2BeSaved); // set coupon2BeSaved back
    }

    // saves coupon on btn click
    const saveCoupon = () => {
        // create a coupon2BeSaved of coupon object
        let coupon2BeSaved = {... coupon}
        // set the discount to be a num
        let discount = parseFloat(coupon2BeSaved.discount);
        coupon2BeSaved.discount = discount
        // console coupon2BeSaved
        console.log(coupon2BeSaved);
        // todo: send obj to server

        // add it to the state array
        let copyCoupon = [... allCoupons];
        copyCoupon.push(coupon2BeSaved)
        setAllCoupons(copyCoupon);
    }

   const handleProductChange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        let copy = {... product};
        copy[name] = value;
        setProduct(copy);
   }

   const saveProduct = () => {
       let product2Save = {... product};
       product2Save.price = parseFloat(product2Save.price);
       console.log(product2Save);

       // save copy on server
    let service = new DataAService()
    service.saveProduct(product2Save)
       //save prod on state arr
       
       let copyAllProduct = [... allProduct]
       copyAllProduct.push(product2Save);
       setAllProduct(copyAllProduct)
   }

    return ( 
    <div className="admin-page">
        <div className="header">
                <h2>Store Administrasion</h2>
            </div>

            <div className='parent'>
                {/* products section */}
                <section className="products">
                    <h3>Products</h3>
                {/* price, title, img, categorie */}
                    <div className="my-control">
                        <label >Price</label>
                        <input name="price" onChange={handleProductChange} type="number"/>
                    </div>
                    <div className="my-control">
                        <label >Title</label>
                        <input name="title" onChange={handleProductChange} type="text" />
                    </div>
                    <div className="my-control">
                        <label >Image</label>
                        <input name="image"  onChange={handleProductChange} type="text"/>
                    </div>
                    <div className="my-control">
                        <label >Category</label>
                        <input name="category" onChange={handleProductChange} type="text" />
                    </div>

                    <button onClick={saveProduct} className="btn btn-primary ">Save Product</button>

                    <ul>
                        {allProduct.map((product, index) => <li key={index}> {product.title} - ${product.price}</li> )}
                    </ul>
                </section>



                {/* coupon section */}
                <section className="coupons">
                    <h3>Coupon Codes</h3>

                    <div className="my-control">
                        <label >Code</label>
                        <input name='code' onChange={handleCouponChange} type="text" />
                    </div>

                    <div className="form">
                        <div className="my-control">
                            <label >Discount</label>
                            <input name='discount' onChange={handleCouponChange} type="text" />
                        </div>
                    </div>

                
                    <div className="my-control">
                        <button name="discount" onClick={saveCoupon} className="btn btn-primary btn-sm">Save Coupon</button>
                    </div>

                    <div className='coupons-list'>
                        <ul>
                        {allCoupons.map((coupons, index) => <li key={index}>{coupon.code} - {coupon.discount}% off</li>)}
                        </ul>
                    </div>
                </section>
             </div>
    </div>
    )
}

export default Admin;
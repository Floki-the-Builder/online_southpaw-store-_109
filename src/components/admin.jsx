import './admin.css'
import {useState} from 'react'

// create two sefctions .... create from / coupon
const Admin = () => {
    const[coupon, setCoupon] = useState({});
    const[product, setProduct] = useState({})
    const handleCouponChange = (e) => {
       let name = e.target.name;
       let value = e.target.value;
                //// HOW TO MALE COPY IN JS
        let copy = { ... coupon }; // create copy
        copy[name] = value; // modify copy
       setCoupon(copy); // set copy back
    }

    // saves coupon on btn click
    const saveCoupon = () => {
        // create a copy of coupon object
        let copy = {... coupon}
        // set the discount to be a num
        let discount = parseFloat(copy.discount);
        copy.discount = discount
        // console copy
        console.log(copy);
    }

   const handleProductChange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        let copy = {... product};
        copy[name] = value;
        setProduct(copy);
   }

   const saveProduct = () => {
       let copy = {... product};
       copy.price = parseFloat(copy.price);
       console.log(copy);
       
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
                        <input name="number" onChange={handleProductChange} type="text"/>
                    </div>
                    <div className="my-control">
                        <label >Title</label>
                        <input name="number" onChange={handleProductChange} type="text" />
                    </div>
                    <div className="my-control">
                        <label >Image</label>
                        <input name="image"  onChange={handleProductChange} type="text"/>
                    </div>
                    <div className="my-control">
                        <label >Category</label>
                        <input name="text" onChange={handleProductChange} type="text" />
                    </div>

                    <button onClick={saveProduct} className="btn btn-primary ">Save Product</button>
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
                </section>
             </div>
    </div>
    )
}

export default Admin;
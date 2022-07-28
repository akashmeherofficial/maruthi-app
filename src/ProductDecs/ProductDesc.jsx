import React, { useState } from 'react'
import './ProductDesc.css'
import Img1 from '../assets/Img1.jpg'

const ProductDesc = () => {
    const [count, setCount]=useState(0)
  return (
            <div className='pd'>
      <div className="main">

        <h3 className="heading">
            Product Description
        </h3>
        <div className="leftpd">
            <div className="allimg">
            <img src={Img1} alt="Img1"  className='allimgitm'/>
            <img src={Img1} alt="Img1"  className='allimgitm'/>
            <img src={Img1} alt="Img1"  className='allimgitm'/>
            <img src={Img1} alt="Img1"  className='allimgitm'/>
            <img src={Img1} alt="Img1"  className='allimgitm'/>

            </div>
            <div className="mainimg">

            <img src={Img1} alt="" className='mainimgitm'/>
            </div>
        </div>
        <div className="rightpd">
            <h6 className='dir'>Home>Products>White Pearl</h6>
            <h2 className="producttitle">
                WHITE PEARL
            </h2>
            <h5 className="producttitle">
                WP008 TILES - FOR ALL CUSTOMS
            </h5>
            <p className="sprice">
                Special price
            </p>
            <div className="ptag">

            <span className="descprice">
                $ 9.9 
            </span>
                <span>
                    / SQFT
                    </span>
            </div>
                 
                    <span className="descrating">4.5</span><span className="count">234 ratings and 598 reviews</span>
            <p className="offershead">Available Offers:</p>
            <span className="offers">Use Axis Bank Credit Cards for 5% off. <a href="/">T & C</a></span>
            <p className="offers">Hire our Designers and get Exclusive Offers</p>
            <div className="btns">
            <div className="quantity">

                <span className="quantityitm">
                    Quantity: 
                {count} SQFT
                </span>
                <button className="add" onClick={()=>{setCount(count+5)}}>+</button>
                <button className="add" onClick={()=>{if(count>0){setCount(count-5)}else{setCount(count)}}}>-</button>

            </div>
            <button className="addtocart">Add to Cart</button>
            <button className="wishlist">Wishlist</button>
            </div>
            <div className='checkpin'>
            <p className="deliver">Deliver to</p>
            <input type="text" placeholder='Enter your Pincode' />
            <button className="wishlist check">Check</button>
            </div>
            
        </div>
        </div>
        <div className="secondary">
            <div className="spec">

            <h3 className="specification">
                Specification
            </h3>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            </div>
            <div className="spec">

            <h3 className="specification">
                Extra Details
            </h3>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            <p className="spec">Dimension : 45mm * 3 ft * 3ft</p>
            </div>
        </div>
        <div className="last">

        <h3 className="specification">
               Ratings and Reviews 
        </h3>
        <span className="descrating">4.5</span><span className="count">(234 ratings and 598 reviews)</span>
        <div className="comments">
            <textarea type="text" rows='3' cols='30'  className='commentinput' placeholder='Add Your Reviews'/>
            <button className="comment">Add Review</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDesc
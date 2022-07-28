import React from 'react'
import './Cards.css'
import {NavLink} from 'react-router-dom'
// import Img1 from '../assets/Img1.jpg'

const Cards = ({img,title, price, rating,link}) => {
 
  return (
    <div className='card'>
            <div className="overlay">
                <button><NavLink to='/product/description' className='quickviewbtn'>
                     Quick View
                    </NavLink>
                     </button>
            </div>
            <div className="image">
    <img src={img} alt="" />
            </div>
            <div className="desc">

            <h3 className="title">
                {title}
            </h3>
            <p className="price">
               Price Starts from: {price}
            </p>
            <span className="rating">
               Rating:- {rating}
            </span>
            </div>
             <button className='viewbtn'>
           <NavLink to='/product/description' className="viewbtnnav">
                Description
            </NavLink>
                </button>

        </div>

  )
}

export default Cards
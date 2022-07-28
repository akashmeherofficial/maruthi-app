import React from 'react'
import Cards from '../Cards/Cards'
import './Product.css'
import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img2.jpg'
import Img3 from '../assets/Img3.jpg' 
import Img4 from '../assets/Img4.jpg'

const Products = () => {
  return (
    <div className='products'>
        <div className="heading">

        <h1>TILES</h1>
        </div>
        <div className="cards">

        <Cards img={Img1} title={"WHITE PEARL"} price={"$9.9/.1sqft"} rating="4.5"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.2"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.3"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4"/>
        <Cards img={Img1} title={"WHITE PEARL"} price={"$9.9/sqft"} rating="4.5"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.6"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.2"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4.5"/>
        <Cards img={Img1} title={"WHITE PEARL"} price={"$9.9/sqft"} rating="4.7"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.8"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.5"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4.9"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.8"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.5"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4.9"/>
        <Cards img={Img1} title={"WHITE PEARL"} price={"$9.9/.1sqft"} rating="4.5"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.2"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.3"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4"/>
        <Cards img={Img1} title={"WHITE PEARL"} price={"$9.9/sqft"} rating="4.5"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.6"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.2"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4.5"/>
        <Cards img={Img1} title={"WHITE PEARL"} price={"$9.9/sqft"} rating="4.7"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.8"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.5"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4.9"/>
        <Cards img={Img2} title={"BLACK UNICORN"} price={"$7.9/sqft"} rating="4.8"/>
        <Cards img={Img3} title={"GREENARY STONE"} price={"$8.9/sqft"} rating="4.5"/>
        <Cards img={Img4} title={"CHESSBOARD RUNWAY"} price={"$10.9/sqft"} rating="4.9"/>
        </div>
    </div>
  )
}

export default Products
import React from 'react'
import mainvideo from '../assets/mainvideo.mp4'
import './Home.css'

const Home = () => {
  return (
    <>
 <div className="home">

    <div className="video">
        <video autoPlay loop muted playsInline>
            <source src={mainvideo} type='video/mp4'/>
            Your browser doesn't support video tag
        </video>
            
        
    </div>
    

        <div className="left-h">
          <h3 className="hello">Welcome to</h3>
          <h1 className="name">Maruthi Stonemart</h1>

          <div>
            <span className="work">LET US HELP YOU </span>
            <br/>
            <span className="work">BUILD THE BEST INTERIOR </span>
            <br/>
            <span className="work">LIKE NEVER BEFORE </span>
            <br/>

            <br/>
            <button class="explorebtn">EXPLORE</button>
          </div>
        </div>

        <div className="right-h">

        </div>
      </div>
    </>
  )
}

export default Home
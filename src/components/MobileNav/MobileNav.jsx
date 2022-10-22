import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Style.css"


const MobileNav = () => {
    
      useEffect(() => {
    
        // Get the navbar
        const navbar = document.getElementById("navbar")
        const feed = document.getElementsByClassName('feed')[0];

    
            feed.addEventListener('scroll', () => {

            var scrollTop = feed.scrollTop;       
            
            if(scrollTop === 0){
              navbar.classList.remove("sticky");
            }else{
              navbar.classList.add("sticky")
            }
            
         });
        
      }, []);


  return (
    <div id="navbar" className="feed__header__mobile" >
        <div className="logo">
            <img src={require("../../images/fav/dorehami-sharif-logo.png")} alt="" />
        </div>
        <Link to="/major/lists" className="btn">
        رشته ها
        </Link>

        <Link to="/" className="btn active">
        خانه
        </Link>

        <Link to="/most/viewed" className="btn">
        پربازدید ها
        </Link>

    
      </div>
  )
}

export default MobileNav
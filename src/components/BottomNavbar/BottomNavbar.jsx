import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {
    BsFillHouseFill,
    BsHash,
    BsPlusLg,
    BsFillPersonFill,
    BsSearch,
  } from "react-icons/bs";

import "./Style.css"

const BottomNavbar = () => {

    const [selected, setSelected] = useState(0);

  const menus = [
    {
      icon: <BsFillHouseFill size={25} />,
      name: "خانه",
      link:"/",
    },
    {
      icon: <BsSearch size={25} />,
      name: "جستجو",
      link:"/search"

    },
    {
      icon: <BsPlusLg size={25} />,
      name: " پست",
      link:"/create/post"
    },
    
    {
      icon: <BsHash size={25} />,
      name: "هشتگ ها",
      link: "/hashtags"
    },
    {
      icon: <BsFillPersonFill size={25} />,
      name: "پروفایل",
      link:"/profile"
    },

  
  ];


  return (
    <div className="center-bottom-nav">
    <div className="navigation">
      <div className="links">
        {menus.map((val, index) => {
          return (
           
           
              <Link to={val.link} onClick={() => setSelected(index)}
              key={index}
              className={index === selected ? "active" : ""}>
                <div className="icon">{val.icon}</div>
                <div className="name">{val.name}</div>
              </Link>
            
          );
        })}
        <div className="menu-bg" />
      </div>
    </div>
    </div>
  )
}

export default BottomNavbar
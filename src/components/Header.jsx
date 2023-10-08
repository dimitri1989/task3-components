import React from "react";
import '../assets/header.css'
function Header(){
    return(
        <div className="header">
            <ul className="nav">
                <li className="li">მთავარი</li>
                <li className="li">ჩვენს შესახებ</li>
                <li className="li">რუკა</li>
                <li className="li">კონტაქტი</li>
            </ul>
        </div>
    )
}
export  {Header}
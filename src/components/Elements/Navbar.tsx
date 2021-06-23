import React from "react";
import logo from "./../../assets/img/logo.png";
import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<header className='header' id='header'>
			<Link to='/' className='logo'>
				<img src={logo} alt='Logo' width='40' height='40' />
				<span className='logoname'>Inovact</span>
			</Link>

			<style>
				{`
            header{
                position:fixed;
                top:0;
                left:0;
                background-color:#020652;
                width:100%;
                margin:0px;
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding: 10px;
                z-index:1000;
                transition:0.6s;
                color:#FFA500;
            }
            
            header:hover {
                color:white;
            }
               
            header.sticky{
                padding:5px 100px;
                background: white;
                border-bottom: 1px solid (0,0,0,0.1);
            }
            
              
              header.sticky .logo .logoname,
              header.sticky ul li a{
                  color:#000;
                  margin-left:10px;
                  top:-3px;
              }
            header .logo{
                margin-left:80px;
               
                position:relative;
                font-weight:500;
                color:#FFA500;
                text-decoration:none;
                font-size:2rem;
                transition:0.6s;
            }
            header .logo .logoname{
              margin-left:10px;
              position: relative;
            
            }
            header.sticky .logo .logoname,
                header.sticky ul li a{
                    color:#000;
                    margin-left:10px;
                    top:-3px;
                }
            `}
			</style>
		</header>
	);
};
export default Navigation;

import React from "react";
import {Link, Outlet} from "react-router-dom";
//import { Link } from "react-router-dom";
const contactPage=[
    {path:"/contact/web",text:"What is website"},
    {path:"/contact/web1",text:"History of website"},
     {path:"/contact/web2",text:"Static website"},
    {path:"/contact/web3",text:"Dynamic website"}
]

const Contact=()=>
{
    return(<> 
    <div className="container-all">
        <nav>
                 {contactPage.map((item,index)=>(
                    <div key={index} className="container-link">
                        <Link to={item.path} className="ListItem">{item.text}</Link>
                        </div>
                 ))}
            </nav>
            <Outlet/>
            </div>
            
        </>
        
            );
        
        }
export default Contact;
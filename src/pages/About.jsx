import React from "react";
import {Link,Outlet} from "react-router-dom";
const aboutPage=[
    {path:"/about/data",text:"What is internet"},
    {path:"/about/data1",text:"History of internet"},
    {path:"/about/data2",text:"Terminology"},
    {path:"/about/data3",text:"Governance"}
]

const About=()=>
{
    return(<> 

    <div className="container-all">
        <nav>
                 {aboutPage.map((item,index)=>(
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
export default About;
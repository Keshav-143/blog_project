import React from 'react'
import './style.css'
import Card from '../UI/Card'
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
      <div className="sidebarContainer" >
           <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}} >
                 <div className="cardHeader" >
                   <span> About Us </span>
                 </div>
                 <div className="profileImageContainer">
                     <img src="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/p960x960/106128726_2626238954142180_5710596339836036357_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=Gifz8ruzlbUAX9I2V4g&_nc_ht=scontent.fblr8-1.fna&_nc_tp=6&oh=898d84ad5bfea95c71c373d5050ee482&oe=5F2A8E72" alt="" />
                 </div>
                 <div className="cardBody">
                  <p className="imageBody">This is the image of a girl. She is participate in photoshoot contrest and the creadit goes to keshav photography. </p>
                 </div>
           </Card>

           <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                 <div className="cardHeader" >
                   <span> Social network </span>
                 </div>
           </Card>
           <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
           <div className="cardHeader" >
                   <span> Recent post </span>
                 </div>
                 <div className="recentPosts">
                     <div className="recentPost">
                        <h3>Post Title</h3>
                        <span>july10,2020</span>
                     </div>

                     <div className="recentPost">
                        <h3>Post Title</h3>
                        <span>july10,2020</span>
                     </div>

                     <div className="recentPost">
                        <h3>Post Title</h3>
                        <span>july10,2020</span>
                     </div>

                 </div>
           </Card>

      </div>
     
   )

 }

export default Sidebar
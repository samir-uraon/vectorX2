import { useState,useEffect} from 'react'
import "./useit/referrel.css"
import './App.css'
import "./App2.css"
import "./About.css"
import "./useit/sprofile.css"
import "./useit/s.css"
import "./useit/prologin.css"
import "./useit/proreg.css"
import {slidebarshow,Slogin,prologin,prologinh} from "./useit/menu.jsx"
import logo from "./assets/logo2.png"
import ceo from "./assets/ceo.jpg"
import cdm from "./assets/cdm.jpg"
import ed from "./assets/ed.jpg"
import coo from "./assets/coo.jpg"
import cmo from "./assets/cmo.jpg"
import contenthead from "./assets/contenthead.jpg"
import designer from "./assets/designer.jpg"
import { stay,staypay } from './useit/menu.jsx'


function App() {

useEffect(()=>{
  var typed = new Typed('.animation', {
    strings: ['PowerFul', 'Theoretical',"Focused"],
    typeSpeed: 150,
    backSpeed:150,
    loop:true
  });
gsap.to(".icon",{y:-5,duration:1.5,repeat:-1,yoyo:true,ease:"power1.inOut"})
stay()
staypay()
},[])

  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  




return (
    <>
    <nav>
    <ul className='horizontalbar'>
        <li><img src={logo} alt="" /><span id='logotext'>Vector<span id="logox">X</span> Academy</span></li>
        <li></li>
        <li id="hor" onClick={(event)=>{slidebarshow(event)}}><svg xmlns="http://www.w3.org/2000/svg" height="2.4rem" viewBox="0 -960 960 960" width="2.4rem" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
       </ul>
       
    </nav>
    
    <div className="menu">

      <div className='butaround'>
      <button onClick={()=>{Slogin()}}>Login / Register</button>
      <p className="read-the-docs">
        ( For Students )
      </p>
      </div>

      <div className="menulist">
        <ul className='slidebar'>
        <li><svg xmlns="http://www.w3.org/2000/svg" height="2.3rem" viewBox="0 -960 960 960" width="2.3rem" fill="#666666"><path d="m460-380 280-180-280-180v360ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>Courses</li>
      
        <li id='lic'><svg xmlns="http://www.w3.org/2000/svg" height="2.5rem"
    viewBox="0 -960 960 960" width="2.5rem" fill="#666666"><path d="M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/></svg>Live Class</li>
        <li id='rec'><svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 -960 960 960" width="2.5rem" fill="#666666"><path d="M216-408h336v-240H216v240Zm-48 216q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm0 0v-432 432Z"/></svg>Record Class</li>
        <li id='ddp'><svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 -960 960 960" width="2.58rem" fill="#666666"><path d="M480-144q-48-32-102.7-52T264-216q-38 0-76 7.5T115-186q-24 10-45.5-3.53T48-229v-503q0-14 7.5-26T76-776q43.68-20 91.15-30 47.48-10 96.85-10 57.31 0 112.16 13.5Q431-789 480-762v534q51-27 105-43.5T696-288q37.37 0 73.19 6.5Q805-275 840-264v-528q11 4 22.13 7.47 11.13 3.48 21.87 8.53 13 7 20.5 18.5T912-732v503q0 25-21.5 39t-45.5 4q-36-14-73.5-22t-75.5-8q-58.6 0-113.3 20Q528-176 480-144Zm72-192v-384l216-192v384L552-336Zm-144 68v-441q-34-19-71.5-27t-76.5-8q-36 0-71.34 7.84T120-712.64V-268q34-11 69.5-15.5T260-288q38.4 0 75.2 4.5Q372-279 408-268Zm0 0v-441 441Z"/></svg>DPP</li>
          <li id='test'><svg xmlns="http://www.w3.org/2000/svg" height="2.8rem" viewBox="0 -960 960 960" width="2.6rem" fill="#666666"><path d="M288-288h72l235-235-72-72-235 235v72Zm341-269 36-36q8-8 8-17t-8-17l-38-38q-8-8-17-8t-17 8l-36 36 72 72ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h171q8-31 33.5-51.5T480-888q34 0 59.5 20.5T573-816h171q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm264-552q10.4 0 17.2-6.8 6.8-6.8 6.8-17.2 0-10.4-6.8-17.2-6.8-6.8-17.2-6.8-10.4 0-17.2 6.8-6.8 6.8-6.8 17.2 0 10.4 6.8 17.2 6.8 6.8 17.2 6.8ZM216-216v-528 528Z"/></svg>Test</li>    
         <li onClick={()=>{
          if(count==0){
            prologin()
            setCount(1)
            
          }
          else{
            if(!document.querySelector(".show1")){
              prologin()
            setCount(1)
            }else{
              if(document.querySelector(".show1")){
            prologinh()
            }
            setCount(0)
          } 
          }
          }}><svg xmlns="http://www.w3.org/2000/svg" height="2.7rem" viewBox="0 -960 960 960" 
          width="2.6rem" fill="#666666"><path d="M708-432v-84h-84v-72h84v-84h72v84h84v72h-84v84h-72Zm-324-48q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM96-192v-92q0-25.78 12.5-47.39T143-366q55-32 116-49t125-17q64 0 125 17t116 49q22 13 34.5 34.61T672-284v92H96Zm72-72h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14.5T179-304q-4.95 2.94-7.98 8.24Q168-290.47 168-284v20Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Zm-.21-73Zm0 361Z"/></svg>PRO Login/Register</li>
        
        <li id='t'></li>
      </ul>
</div>
      

      </div>
 
      <div className='containers'>

        <div className="head">
    <div className="image">
      <div className="parts">
        <div className="first"><img src="https://www.tutoring-blog.co.uk/wp-content/uploads/2023/11/solutions-and-mixtures-in-chemistry-1.jpg" alt="" /></div>
        <div className="second"><img src="https://th.bing.com/th/id/OIP.sYw7IHjjtlBBjt1wV2vbQAHaHa?rs=1&pid=ImgDetMain" alt="" /></div>
      </div>  <div className="third"><img src="https://t3.ftcdn.net/jpg/02/10/78/42/360_F_210784207_Q2NmyZOFf4LCCvhf28ekAtRTTDAXRU3i.jpg" alt="" /></div>
      
    </div>
    
<div className="head_text">
<div id="first"></div>
        <div id="second"></div>
        <div id="third"></div>
        <div id="first1"></div>
        <div id="second1"></div>
        <div id="third1"></div>
</div>

<div className="head_type_text">
  <div className="first_text"><p>Start Learning</p></div>
  <div className="type_animation"><p>With Our &lt;</p><span className="animation"></span><p> &gt; </p></div>
  <div className="last_text"><p>Courses</p></div>
</div>
<div className="sometext">
  <p>VectorX Academy is a pioneering educational platform that aims to 
transform the way students engage with complex subjects, particularly in 
mathematics, science, technology, and engineering. By combining theoretical 
knowledge with practical applications, the academy prepares
 learners for future challenges in an ever-evolving technological landscape.</p>
</div>
<button id="explorer" onClick={()=>{window.location.href="https://youtube.com/@vectorxacademy?si=ZLY8DREX0-Kljt6U"}}>Explore Now</button>
</div>

<h1 className='abouttext'>About Us</h1>

<div className="acards">
  <ul className="cards">


    <li className="card">
    <div>
        <div className="card-content">
      

           <div className="card_head">
            <img src={ceo} alt="" />
            <div className="card_head_text">
            <p id='name'>Lakshmi Ganesh Bhavaraju</p>
            <p id='posi'>Founder & CEO, VectorX Academy </p>  
            </div>
            
           </div>
      
          <p id='aboutsometext'>Lakshmi Ganesh Bhavaraju is the Founder and CEO of VectorX Academy, a platform dedicated to teaching high-level physics for Olympiad and JEE Advanced students. A student at NIT Trichy, he is deeply passionate about physics and aims to make advanced problem-solving more accessible to aspiring scholars. </p>
        <p id="aboutsometext2">With a vision to revolutionize physics education, he plans to expand VectorX Academy into a premier learning platform, integrating innovative teaching methods and high-quality content. Over the coming years, he aims to mentor thousands of students, helping them excel in national and international competitive exams.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
  <div className="butcontainer">
  <a><i className="fa-brands fa-facebook" style={{color:"rgb(12, 96, 223)"}}></i></a>
  <a><i className="fa-brands fa-instagram" style={{color:"rgb(191, 12, 96)"}}></i></a>
  <a><i className="fa-brands fa-linkedin" style={{color:"blue"}}></i></a>
  <a><i className="fa-brands fa-square-x-twitter">
  
  </i>
  </a>
  </div>
      </div>
    </li>


    <li className="card">
    <div>
        <div className="card-content">
      

           <div className="card_head">
            <img src={coo} alt="" />
            <div className="card_head_text">
            <p id='name'>Sruthi Pulavarty</p>
            <p id='posi'>Chief Operating Officer, Vectorx Academy</p>  
            </div>
            
           </div>
      
          <p id='aboutsometext' style={{padding:"3rem 3rem 3.4rem 3rem"}}>Sruthi Pulavarty is the Chief Operating Officer of Vectorx Academy, dedicated to delivering high-level physics education for JEE Advanced aspirants. A B.Tech student at NIT Tiruchirapalli, she oversees operations and course management, ensuring a seamless learning experience. She strives to expand Vectorx Academy’s reach, making quality physics education accessible to ambitious students.</p>
        {/*<p id="aboutsometext2">With a vision to revolutionize physics education, he plans to expand VectorX Academy into a premier learning platform, integrating innovative teaching methods and high-quality content. Over the coming years, he aims to mentor thousands of students, helping them excel in national and international competitive exams.</p>*/}
        </div>
      </div>
      <div className="card-link-wrapper">
  <div className="butcontainer">
  <a><i className="fa-brands fa-facebook" style={{color:"rgb(12, 96, 223)"}}></i></a>
  <a><i className="fa-brands fa-instagram" style={{color:"rgb(191, 12, 96)"}}></i></a>
  <a><i className="fa-brands fa-linkedin" style={{color:"blue"}}></i></a>
  <a><i className="fa-brands fa-square-x-twitter">
  
  </i>
  </a>
  </div>
      </div>
    </li>

<li className="card">
    <div>
        <div className="card-content">
      

           <div className="card_head">
            <img src={ed} alt="" style={{objectPosition:"0rem -1rem"}}/>
            <div className="card_head_text">
            <p id='name'>Jayendra Birhade</p>
            <p id='posi'>Executive Director of VectorX Academy</p>  
            </div>
            
           </div>
      
          <p id='aboutsometext'>Jay, a student at IIT Delhi, is the Executive Director of VectorX Academy. With a deep passion for physics, he is dedicated to making advanced concepts accessible to students preparing for Olympiads and JEE Advanced. His vision is to transform physics education by emphasizing conceptual clarity and problem-solving techniques. Through VectorX Academy, he aims to inspire young minds to explore the subject beyond textbooks, fostering a culture of curiosity and innovation. Jay's leadership and commitment to excellence drive the academy's mission, ensuring that students receive top-tier guidance in mastering physics.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
  <div className="butcontainer">
  <a><i className="fa-brands fa-facebook" style={{color:"rgb(12, 96, 223)"}}></i></a>
  <a><i className="fa-brands fa-instagram" style={{color:"rgb(191, 12, 96)"}}></i></a>
  <a><i className="fa-brands fa-linkedin" style={{color:"blue"}}></i></a>
  <a><i className="fa-brands fa-square-x-twitter">
  
  </i>
  </a>
  </div>
      </div>
    </li>


    <li className="card">
    <div>
        <div className="card-content">
      

           <div className="card_head">
            <img src={cdm} alt="" style={{objectPosition: "0.01rem 0.01rem"}}/>
            <div className="card_head_text">
            <p id='name'>Jasmine Muddasu
          </p>
            <p id='posi'>Chief Data Manager, VectorX Academy</p>  
            </div>
            
           </div>
      
          <p id='aboutsometext' style={{padding:"3rem 3rem 5.3rem 3rem"}}>Jasmine Muddasu, a student at NIT Trichy and Chief Data Manager of VectorX Academy, specializes in structuring and analyzing academic data to enhance learning for Olympiad and JEE Advanced aspirants. She leverages data-driven insights to refine teaching strategies, streamline operations, and improve student outcomes.</p>
        {/*<p id="aboutsometext2">With a vision to revolutionize physics education, he plans to expand VectorX Academy into a premier learning platform, integrating innovative teaching methods and high-quality content. Over the coming years, he aims to mentor thousands of students, helping them excel in national and international competitive exams.</p>*/}
        </div>
      </div>
      <div className="card-link-wrapper">
  <div className="butcontainer">
  <a><i className="fa-brands fa-facebook" style={{color:"rgb(12, 96, 223)"}}></i></a>
  <a><i className="fa-brands fa-instagram" style={{color:"rgb(191, 12, 96)"}}></i></a>
  <a><i className="fa-brands fa-linkedin" style={{color:"blue"}}></i></a>
  <a><i className="fa-brands fa-square-x-twitter">
  
  </i>
  </a>
  </div>
      </div>
    </li>


    <li className="card">
    <div>
        <div className="card-content">
      

           <div className="card_head">
            <img src={cmo} alt="" style={{objectPosition:"-3rem 0.1rem"}}/>
            <div className="card_head_text">
            <p id='name'>Abhishek Srujan Paul</p>
            <p id='posi'>Chief Marketing Officer, VectorX Academy</p>  
            </div>
            
           </div>
      
          <p id='aboutsometext' style={{padding:"3rem 3rem 5.0rem 3rem"}}>Abhishek Srujan Paul, a student of NIT Trichy and the Chief Marketing Officer of VectorX Academy, plays a pivotal role in expanding the academy's reach to ambitious students. He is the driving force behind its publicity and is responsible for devising innovative marketing strategies that contribute to the academy's growth and success.</p>
        {/*<p id="aboutsometext2">With a vision to revolutionize physics education, he plans to expand VectorX Academy into a premier learning platform, integrating innovative teaching methods and high-quality content. Over the coming years, he aims to mentor thousands of students, helping them excel in national and international competitive exams.</p>*/}
        </div>
      </div>
      <div className="card-link-wrapper">
  <div className="butcontainer">
  <a><i className="fa-brands fa-facebook" style={{color:"rgb(12, 96, 223)"}}></i></a>
  <a><i className="fa-brands fa-instagram" style={{color:"rgb(191, 12, 96)"}}></i></a>
  <a><i className="fa-brands fa-linkedin" style={{color:"blue"}}></i></a>
  <a><i className="fa-brands fa-square-x-twitter">
  
  </i>
  </a>
  </div>
      </div>
    </li>



    <li className="card">
    <div>
        <div className="card-content">
    

           <div className="card_head">
            <img src={designer} alt="" style={{objectPosition: "0.01rem 0.04rem",width:"13rem"}}/>
            <div className="card_head_text">
            <p id='name'>Ankit Minz</p>
             <p id='posi'>Editor and Social Media Influencer, VectorX Academy</p>  
            </div>
            
           </div>
      
          <p id='aboutsometext' style={{padding:"3rem 3rem 5.1rem 3rem"}}>I am a Creative and detail-oriented Video Editor, Thumbnail Designer, and YouTube Manager with a passion for crafting engaging visual content. Experienced in managing YouTube channels, optimizing content for growth, and designing eye-catching thumbnails that boost click-through rates.
          </p>
        {/*<p id="aboutsometext2">With a vision to revolutionize physics education, he plans to expand VectorX Academy into a premier learning platform, integrating innovative teaching methods and high-quality content. Over the coming years, he aims to mentor thousands of students, helping them excel in national and international competitive exams.</p>*/}
        </div>
      </div>
      <div className="card-link-wrapper">
  <div className="butcontainer">
  <a><i className="fa-brands fa-facebook" style={{color:"rgb(12, 96, 223)"}}></i></a>
  <a><i className="fa-brands fa-instagram" style={{color:"rgb(191, 12, 96)"}}></i></a>
  <a><i className="fa-brands fa-linkedin" style={{color:"blue"}}></i></a>
  <a><i className="fa-brands fa-square-x-twitter">
  
  </i>
  </a>
  </div>
      </div>
    </li>


    <li className="card">
    <div>
        <div className="card-content">
      

           <div className="card_head">
            <img src={contenthead} alt="" style={{objectPosition:"top"}}/>
            <div className="card_head_text">
            <p id='name'>Nitesh Kumar S </p> 
            <p id='posi'>Content Head, VectorX Academy </p>  
            </div>
            
           </div>
      
          <p id='aboutsometext' style={{padding:"3rem 3rem 3.2rem 3rem"}}>Nitesh Kumar S is the content head of VectorX Academy, managing its digital presence to engage and inspire students passionate about education. He is also a designer, creating impactful posters and reels that enhance the academy’s outreach. Through his expertise in visual content creation and social media management, he aims to foster a strong learning community for aspiring students.</p>      
        {/*<p id="aboutsometext2">With a vision to revolutionize physics education, he plans to expand VectorX Academy into a premier learning platform, integrating innovative teaching methods and high-quality content. Over the coming years, he aims to mentor thousands of students, helping them excel in national and international competitive exams.</p>*/}
        </div>
      </div>
      <div className="card-link-wrapper">
  <div className="butcontainer">
  <a><i className="fa-brands fa-facebook" style={{color:"rgb(12, 96, 223)"}}></i></a>
  <a><i className="fa-brands fa-instagram" style={{color:"rgb(191, 12, 96)"}}></i></a>
  <a><i className="fa-brands fa-linkedin" style={{color:"blue"}}></i></a>
  <a><i className="fa-brands fa-square-x-twitter">
  
  </i>
  </a>
  </div>
      </div>
    </li>


  </ul>
</div>


      </div>

<div className="icon" onClick={()=>{window.location.href=import.meta.env.VITE_contact}}></div>



    </>
  )
}

export default App

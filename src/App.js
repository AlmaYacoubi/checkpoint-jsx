import React from 'react';
import './App.css';
import Cat from './image.jpg';
import './Style.css';
function App() {
  return (
    <>
    <div style={{border:'solid 1px black',maxWidth:"100vw"}}>

 <h1 className="title red">Hello Alma</h1>

 <br />

 <img src={Cat} alt="cat"/>

 <br />

 <img src="/cute.jpg" alt="cute cats"/>

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
     
    

   </>   
    
  );
}

export default App;

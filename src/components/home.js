import React from 'react';


function Home() {
    
  return (
    <div>
        <div className='logo-image'>
     <img src='/images/cout.png'/>
     </div>
     <div className='video'>
     <video loop autoPlay muted>
  <source src="/videos/v2.mp4" type="video/mp4"></source>
</video>
     </div>
    </div>
  );
}

export default Home;

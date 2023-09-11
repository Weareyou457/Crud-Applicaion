import React from 'react'
import New from './Component/New';
import Sidebar from './Component/Sidebar';

const Wrapper = (props) => {
  return (
    <>
    
      <New/>
      <div className='wrapper'>
      <div className='left-content'>
        <Sidebar/> 
        </div>
        <div className="right-content">
        {props.children}   
        </div> 

    </div>
    </>
  )
}

export default Wrapper

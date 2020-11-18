import React from 'react';
import Card from './Card';
const Home=(props)=>{
const renderedList=props.conferences.map((c)=>{
  return <Card data={c}/>
});

  return(
    <div style={{display:'flex',justifyContent:'center'}}>
    <div style={{marginTop:'15px'}}>
    {props.searchTerm.length>0?
    <h4><b>&nbsp;&nbsp;Showing Resuts For "{props.searchTerm.substring(0,20)}"</b></h4>:''}
    <div className='grid-container ' >

         {renderedList}
    </div>
    </div>
    </div>
  )
}
export default Home;

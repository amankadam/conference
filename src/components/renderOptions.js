import React from 'react';
const Options=(props)=>{
  return props.data.map((v)=>{

    return (
      <option>{v}</option>
    )
  });
}
export default Options;

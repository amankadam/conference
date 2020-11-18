import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Options from './renderOptions';
import Divider from '@material-ui/core/Divider';
class Filter extends React.Component{
  state={cost:'both',city:'',country:'',month:''};
  onChangeHandler=(e)=>{
    this.setState({cost:e.target.value.toLowerCase()});
  }
  onCountryChangeHandler=(e)=>{
    this.setState({country:e.target.value.toLowerCase()});
  }
  onCityChangeHandler=(e)=>{
    this.setState({city:e.target.value.toLowerCase()});
  }
  onMonthChangeHandler=(e)=>{
    this.setState({month:e.target.value.toLowerCase()});
  }
  onFilterChanges=(e)=>{
    e.preventDefault();
    this.props.onFilterChanges(this.state);
  }
  onReset=(e)=>{
    this.props.onFilterChanges({cost:'both',city:'',country:'',month:''});
  }


  render(){
  return(
    <div style={{marginLeftL:'85px'}}>
    <Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
  <i className="fas fa-filter"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu >
<div style={{height:'200px',width:'200px'}}>
  <div className="form-group " style={{marginLeft:'15px',marginRight:'15px'}}>
     <label for="exampleFormControlSelect1">Select One</label>
     <select className="form-control ui-dropdown" onChange={this.onChangeHandler} id="exampleFormControlSelect1">
        <option>Both</option>
       <option>Free</option>
       <option>Paid</option>
     </select>
   </div>

   <div className="form-group" style={{marginLeft:'15px',marginRight:'15px'}}>
      <select className="form-control" onChange={this.onCityChangeHandler} id="exampleFormControlSelect3">
       <option value="" selected="true" >Select City</option>
        <Options data={this.props.city} />
      </select>
    </div>
   <div className="form-group" style={{marginLeft:'15px',marginRight:'15px'}}>
      <select className="form-control" onChange={this.onCountryChangeHandler} id="exampleFormControlSelect2">
       <option value="" selected="true" >Select Country</option>
        <Options data={this.props.country} />
      </select>
    </div>
    <div className="form-group " style={{marginLeft:'15px',marginRight:'15px'}}>
       <select className="form-control " onChange={this.onMonthChangeHandler} id="exampleFormControlSelect4">
           <option value="" selected="true">Select Month</option>
         <option>Jan</option>
         <option>Feb</option>
         <option>Mar</option>
         <option>Apr</option>
         <option>May</option>
         <option>Jun</option>
         <option>Jul</option>
         <option>Aug</option>
         <option>Sept</option>
         <option>Oct</option>
         <option>Nov</option>
         <option>Dec</option>
       </select>
     </div>
<div>
  <button type='submit' style={{float:'left',position:'absolute'}} className='btn btn-outline-dark' onClick={this.onReset}>Reset</button>
   <button type='submit' style={{float:'right'}} className='btn btn-dark' onClick={this.onFilterChanges}>Apply </button>
   </div>
</div>
</Dropdown.Menu>
</Dropdown>
</div>
)}

}

 export default Filter;

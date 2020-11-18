import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends React.Component{
  state={term:''};
  onInputChange=(e)=>{
    this.setState({term:e.target.value});
  }
  onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  render(){
    return(
      <div className="ui category search">
      <div className="ui icon input" style={{paddingTop:'5px'}}>

      <form onSubmit={this.onFormSubmit} className='ui form'>
      <div className="ui category search">
         <div className="ui icon input">

    <input className="prompt" type="text" value={this.state.term}
    onChange={this.onInputChange} placeholder="Search..."/>

        <button type="submit" onSubmit={this.onFormSubmit} className="btn btn--dark p-0"><i style={{fontSize:24,color:'white'}} className="fas fa-search"></i></button>
       </div>
         </div>

    </form>

       </div>
     </div>
    )
  }
}
export default SearchBar;

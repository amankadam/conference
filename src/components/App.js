import React from 'react';
import Home from './Home';
import KonfhubApi from '../apis/Konfhub';
import Loader from './Loader';
import SearchBar from './SearchBar';
import Filter from './Filter';
class App extends React.Component{
state={conferences:[],searchedConf:[],searchTerm:'',countries:[],cities:[]};
componentDidMount(){
this.getConferences();
}
getConferences=async ()=>{
  const res=await KonfhubApi.get('/get-list-of-conferences');

  var data=[];
  var countriesData=[];
  var citiesData=[];
  res.data.paid.forEach((item, i) => {
    data.push(item);
    if(countriesData.indexOf(item.country)==-1 &&item.country.length>1){
    countriesData.push(item.country);
  }

    if(citiesData.indexOf(item.city)===-1&& item.city.length>1){
    citiesData.push(item.city);
  }
  });
  res.data.free.forEach((item, i) => {
    data.push(item);
    if(countriesData.indexOf(item.country)==-1&&item.country.length>1){
    countriesData.push(item.country);
  }

    if(citiesData.indexOf(item.city)===-1&&item.city.length>1){
    citiesData.push(item.city);
  }

  });
  this.setState({conferences:data,searchedConf:data,countries:countriesData,cities:citiesData});
}

onTermSubmit=async term=>{

  if(term.length<1){
    const filteredConf=this.state.conferences;
  this.setState({searchedConf:filteredConf,searchTerm:''});
}else{
 const filteredConf=this.state.conferences.filter(v=>{
   return v.searchTerms.toLowerCase().includes(term.toLowerCase());
 })
  this.setState({searchTerm:term,searchedConf:filteredConf});
  }
}

onFilterChanges=(filter)=>{

  var  filteredConf=[];
  if(filter.cost=='both'){

      filteredConf=this.state.conferences;
  }else{
    filteredConf=this.state.conferences.filter(v=>{
    return v.entryType.toLowerCase().includes(filter.cost.toLowerCase());
  });
}
  if(filter.country!=''){
    var temp=filteredConf;
    filteredConf=temp.filter(v=>{
    return v.country.toLowerCase().includes(filter.country.toLowerCase());
  });
}
if(filter.city!=''){
  var temp=filteredConf;
  filteredConf=temp.filter(v=>{
  return v.city.toLowerCase().includes(filter.city.toLowerCase());
});
}

if(filter.month!=''){
  var temp=filteredConf;
  filteredConf=temp.filter(v=>{
  return v.confEndDate.toLowerCase().includes(filter.month.toLowerCase()) ||v.confStartDate.toLowerCase().includes(filter.month.toLowerCase()) ;
});
}



this.setState({searchedConf:filteredConf,searchTerm:''});
}

  render(){
    return(
      <div style={{padding:0,}}>
      <nav style={{backgroundColor:'black',display:'flex',position:'static'}}>
         <h2 style={{color:'white',padding:'5px',}}>&nbsp;Konfhub</h2>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
<div style={{marginLeft:'45px'}}>
  <Filter onFilterChanges={this.onFilterChanges} country={this.state.countries} city={this.state.cities}/>
</div>
      </nav>

      {this.state.searchedConf.length==0 ? this.state.conferences.length>0?
        <div style={{alignContent:'center',marginLeft:'50%',marginTop:'20%'}}>

        <p>No Results to Show.</p>
        </div>
        :<Loader/>:
      <Home conferences={this.state.searchedConf} searchTerm={this.state.searchTerm}/>}
      </div>
    )
  }
}
export default App;

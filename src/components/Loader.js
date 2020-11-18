import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
const Loader = props => (
  <div style={{alignContent:'center',marginLeft:'50%',marginTop:'20%'}}>
   <CircularProgress color='black'/>
<p>Fetching conferences for you..</p>
</div>
)

export default Loader;

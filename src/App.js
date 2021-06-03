import React from 'react'
import logo from './logo.svg';
import './App.css';
import {layout} from './layout';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import {Api} from './Api.js';

function App() {
  return (
 <Layout>  
    <div className="App">
      <layout/>
      <img src="https://sun9-68.userapi.com/impf/XxveXm2LPk_1KqdEibSZiZIsgZu7-AynFZunag/YprV1PhGSpw.jpg?size=720x1080&quality=96&sign=0e22aebfca17a08853bf3a15b73cab6b&type=album" className="App-logo" alt="logo" />
    </div>
    <div className="App">
     <br></br>
     <Api/>
      
    </div>
</Layout> 
  );
}

export default App;

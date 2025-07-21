import React from 'react';
import Home from '../pages/home';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';

const AppLayout =() =>{
  const navigation =  useNavigation();
  const isLoading = navigation.state == "loading";

    return <div>
   <h2>This is the sample react router dome application</h2>
    <br/>
    <Header/>
    <br/>
    {isLoading && <div> Loading ... </div> }
     <Outlet></Outlet>
    </div>
}


export default AppLayout;
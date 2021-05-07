import { Navbar } from "./component/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from "./page/Admin/dashboard/dashboard";
import styled from 'styled-components'
import background from './image/LOGO1.png'
import { PushNotification } from "./page/Admin/pushNotification/PushNotification";
import { EditNotification } from "./page/Admin/editNotification/EditNotification";

import { DashboardOperator } from './page/Operator/dashboard/Dashboard'
import { EditOperator } from "./page/Operator/editOperator/EditOperator";
import { EditOperatorDetails } from "./page/Operator/editOperatorDetails/EditOperatorDetails";
import { TambahOperator } from "./page/Operator/tambahOperator/TambahOperator";
import { Login } from "./page/Login/Login";
import React, { useState, useEffect } from 'react'

const WrapperRoute = styled.div`
background-image: url(${background});
background-size:45%, cover;
background-repeat:no-repeat;
background-attachment: fixed;
background-position:center;
width:100%;
height:100vh;
background-position-x : 70%;
background-position-y : 10vh;

padding-left : ${({ main }) => (main ? '300px' : '0xp')};
transition:320ms;

@media (max-width: 768px){
 padding-left:0px;
 background-size:100%, cover;
}
`

const Header = styled.div`

`



function App() {


  return (
    <>
      <WrapperRoute main>
        <div className="header">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/PushNotification" component={PushNotification} />
          <Route path="/EditNotification" component={EditNotification} />


          <Route path="/DashboardOperator" component={DashboardOperator} />
          <Route path="/EditOperator" component={EditOperator} />
          <Route path="/EditOperators/Details" component={EditOperatorDetails} />
          <Route path="/EditOperators/Add" component={TambahOperator} />
        </Switch>
      </WrapperRoute>

    </>
  );
}

export default App;

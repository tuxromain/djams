import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from "./components/dashboard/Dashboard";
import Jams from "./components/jams/Jams";
import Profile    from "./components/profile/Profile";

export default [
    <Route path='/' exact component={Dashboard} key='dashboard'/>,
    <Route path='/jams' component={Jams} key='createJam'/>,
    <Route path='/profile' component={Profile} key='profile'/>
]
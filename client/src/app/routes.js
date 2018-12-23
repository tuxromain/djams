import React from 'react';
import { Route } from 'react-router-dom';

import CreateJam from "./components/create_jam/CreateJam";
import MyJams    from "./components/my_jams/MyJams";

export default [
    <Route path='/' exact component={CreateJam} key='createJam'/>,
    <Route path='/myjams' component={MyJams} key='myJams'/>
]
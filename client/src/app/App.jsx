import React from "react";

import Nav from "./components/common/Nav";
import WorkBar from "./components/common/WorkBar";

class App extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <WorkBar/>
                <Nav/>
                <div className="app-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;
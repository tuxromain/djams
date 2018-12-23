import React from "react";

class Logo extends React.Component{
    render(){
        return(
            <div className="app-logo">
                <div className="app-logo__circle-outside"></div>
                <div className="app-logo__circle-inside">
                    <h1 className="app-logo__text">Djam'it</h1>
                </div>
            </div>
        )
    }
}

export default Logo;
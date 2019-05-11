import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <p> This template was created to get a better understanding as to how babel/webpack work with react</p>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
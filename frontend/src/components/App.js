import React, { Component } from "react";
import ReactDOM from 'react-dom';
import AppForm from "./AppForm/AppForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppForm />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
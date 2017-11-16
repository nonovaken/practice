import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        axios.get('https://lit-peak-31831.herokuapp.com/click')
            .then((res) => {
                this.setState({
                    content: res.data.content
                })
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        let display = null;
        if(this.state.content) {
            display = <div>{this.state.content}</div>;
        } else {
            display = <button onClick={this.handleClick}>CLICK</button>;
        }
        return (
          <div className="App">
              {display}
          </div>
        );
    }
}

export default App;

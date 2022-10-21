import React from 'react';
import starOn from './StarOff.png'
import starOff from './StarOn.png'

const starStyle = {
    height: "50px",
    width: "50px",
    margin: "5px"
}

class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = { on : false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.on === true) {
            this.setState({ on : false });
        }
        else this.setState({ on : true })
    }

    render() {
        return (
            <img src = {this.state.on ? process.env.PUBLIC_URL + starOn : process.env.PUBLIC_URL + starOff}
            onClick = { this.handleClick }
            style = { starStyle }/>
        );
    }
}

export default Star;
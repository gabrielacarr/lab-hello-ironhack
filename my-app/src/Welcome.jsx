import React, { Component } from 'react';


class Welcome extends Component {
    render() {
        return (<>

            <h2> Hello, my name is {this.props.name}.</h2>
            <h3>& I am learning how to set up React and going to make a sample grocery list that I learned from a turtorial</h3>
            
        </>
        )
    }
}

export default Welcome
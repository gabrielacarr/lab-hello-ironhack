import React, { Component } from 'react'


class Goodbye extends Component {
    render(){
        return(<>

            <h2>Goodbye, remember I am {this.props.name} and I am {this.props.title} ! </h2>
        </>
        )
    }
}

export default Goodbye
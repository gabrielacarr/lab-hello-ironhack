import React, { Component } from 'react'


class Goodbye extends Component {
    render() {
        return (<>
            <h2>ReactJS doesn't seem so hard until I forget everything I was {this.props.title}</h2>
            <h2>Goodbye, remember I will be a master of {this.props.name}</h2>
        </>
        )
    }
}

export default Goodbye 
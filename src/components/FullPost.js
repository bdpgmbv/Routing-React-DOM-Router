import React, { Component } from 'react'

export class FullPost extends Component {
    state={
        toid:Number
    }
    componentDidMount(){
        this.setState({
            toid: this.props.match.params.id
        })
    }
    render() {
        return (
            <div>
                <p>Full Post</p>
                <p>{this.state.toid}</p>
            </div>
        )
    }
}

export default FullPost

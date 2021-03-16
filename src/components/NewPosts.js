import React, { Component } from 'react'

export class NewPosts extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <p>New Posts</p>
            </div>
        )
    }
}

export default NewPosts

import React, { Component } from 'react'
import Post from './Post';
import { withRouter } from 'react-router-dom';

export class Posts extends Component {
    state = {
        posts: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
    }
    componentDidMount() {
        console.log(this.props);
    }
    handleClick = (id) => {
        this.props.history.push({ pathname: "/" + id });
        // this.props.history.push('/'+id);
    }
    render() {
        let posts = this.state.posts.map(post => {
            return (
                // <Link to={"/" + post.id} key={post.id}>
                <Post
                    key={post.id}
                    clicked={() => this.handleClick(post.id)}/>
                // </Link>
            );
        });
        return (
            <div>
                <p>Posts Component</p>
                {posts}
            </div>
        );
    }
}

export default withRouter(Posts)

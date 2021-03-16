import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom';
import { Posts } from './Posts';
import { NewPosts } from './NewPosts';
import FullPost from './FullPost';

export class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            {/* "to" can also be a more complex element, it can be a java script object,
                            hence need to be wrapped in {} to output dynamic content. 
                            And then the dynamic content is a JavaScript object, so one more pair of {}
                            And there we can configure where we want to go to.
                            We can set a "Pathname" property here, is the string where you wanna go to.
                            "hash": #submit "id" submit that we have in that element. 
                            "search": allows us to add query params  */}
                            <li><NavLink to={{ pathname: "/new-post", hash: "#submit", search: "?quick-submit=true" }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPosts} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        )
    }
}

export default Blog

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Blog from './Blog';
import Donate from './Donate';
import About from './About';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <PrivateRoute path="/create" exact component={Create} />
                <Route path="/login" exact component={Login} />
                <Route path="/post/:slug" exact component={SinglePost} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/donate" exact component={Donate} />
                <Route path="/about" exact component={About} />
                <PrivateRoute path="/post/update/:slug" exact component={UpdatePost} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

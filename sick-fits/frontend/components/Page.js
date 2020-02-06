import React from 'react';
import { Component } from 'react';
import Header from "./Header";
import Meta from './Meta';

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {/* display whatever in the child component */}
                {this.props.children}
            </div>
        )
    }
}

export default Page;
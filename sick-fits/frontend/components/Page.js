import React from 'react';
import { Component } from 'react';
import Header from "./Header";
import Meta from './Meta';
import styled from 'styled-components';

// apply style using javascript styled
const MyButton = styled.button`
    background:red;
    /* can perform all kind of javascript operator, val here is props */
    font-size: ${val => (val.meduim ? '100px' : '50px')};
    span {
        font-size: 200px;
    };
`


class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {/* display whatever in the child component */}
                <MyButton meduim>
                    {/* can also pass prop meduim */}
                    click me!
                    <span>extra</span>
                </MyButton>
                {this.props.children}
            </div>
        )
    }
}

export default Page;
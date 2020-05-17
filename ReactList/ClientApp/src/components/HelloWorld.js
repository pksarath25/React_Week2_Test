import React, { Component } from 'react';

const element = React.createElement("h3", null, "Hello World!");

export class HelloWorld extends Component {
    render() {
        return (element);
    }  
}

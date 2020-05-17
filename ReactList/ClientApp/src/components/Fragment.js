import React, { Component } from 'react';
import fragImg from '../Images/fragment.png';
import exampleImg from '../Images/example.png';

export class Fragment extends Component {
    render() {
        return (
            <React.Fragment>
                <br/>
                <b>Definition:</b>
                <span>A common pattern in React is for a component to return multiple elements.
                Fragments let you group a list of children without adding extra nodes to the DOM.</span>
                <br />
                <br />
                <img src={fragImg} /> <br /> <br />
                <b>Example:</b>
                <span>Entire content of this page is loaded using react fragments.Please check the code for details.</span>
                <br />
                <br />
                <img src={exampleImg} /> <br /> <br />
            </React.Fragment >
        );
    }
}

  
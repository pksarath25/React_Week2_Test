import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>Week 2 Assignments</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>

                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='envelope' />1 - a. Hello World 
                            </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/contactlist'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' />1 - b. Contact List 
                            </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/contactlistdata'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' />1 - c. Contact List with data 
                            </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/helloworldjsx'}>
                            <NavItem>
                                <Glyphicon glyph='envelope' />1 - d. Hello world jsx 
                            </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/contactlistdatajsx'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' />1 - e. Contact List with data (JSX) 
                            </NavItem>
                        </LinkContainer>
                        
                        <LinkContainer to={'/fetchcontactdata'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> 2. Contact List (Fetch API)
                            </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/fragment'}>
                            <NavItem>
                                <Glyphicon glyph='question-sign' /> 3. React Fragments
                            </NavItem>
                        </LinkContainer>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

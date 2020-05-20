import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Fragment } from './components/Fragment';
import { FetchContactData } from './components/FetchContactData';
import { HelloWorld } from './components/HelloWorld';
import { HelloWorldJSX } from './components/HelloWorldJSX';
import { ContactList } from './components/ContactList';
import { ContactListData } from './components/ContactListData';
import { ContactListDataJSX } from './components/ContactListDataJSX';
import { ContactSplitter } from './components/ContactSplitter';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={HelloWorld} />
            <Route path='/contactlist' component={ContactList} />
            <Route path='/contactlistdata' component={ContactListData} />
            <Route path='/helloworldjsx' component={HelloWorldJSX} />
            <Route path='/contactlistdatajsx' component={ContactListDataJSX} />    
            <Route path='/contactsplitter' component={ContactSplitter} />  
            <Route path='/fetchcontactdata' component={FetchContactData} />
            <Route path='/fragment' component={Fragment} />
      </Layout>
    );
  }
}

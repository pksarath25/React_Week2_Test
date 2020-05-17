import React, { Component } from 'react';

const contactManagement = React.createElement(
        "section",
        { id: "contact-list" },
        React.createElement("h3", null, "Contacts"),
        React.createElement(
          "table",
          { className: "contacts-table" },
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement("th", null, "Name"),
              React.createElement("th", null, "Email")
            ),
            React.createElement(
              "tr",
              null,
              React.createElement("td", null, "Shinto Thomas"),
              React.createElement("td", null, "sthomas@suyati.com")
            ),
            React.createElement(
              "tr",
              null,
              React.createElement("td", null, "Praphul"),
              React.createElement("td", null, "pnangeelil@suyati.com")
            ),
            React.createElement(
              "tr",
              null,
              React.createElement("td", null, "Shamnad V A"),
              React.createElement("td", null, "sabdul@suyati.com")
            )
          )
        )
      );

export function ContactList(props) {    
        return (
            <React.Fragment>
                {contactManagement}
             </React.Fragment>       
                );      
}
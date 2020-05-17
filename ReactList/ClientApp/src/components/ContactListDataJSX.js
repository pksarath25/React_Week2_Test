import React, { Component } from 'react';

const data = [
    {
        name: "Shinto Thomas",
        email: "sthomas@suyati.com",
    },
    {
        name: "Praphul",
        email: "pnangeelil@suyati.com",
    },
    {
        name: "Shamnad V A",
        email: "sabdul@suyati.com",
    },
];

const ContactList = ({ contacts }) => {
    return (
        <table className="contacts-table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {contacts.map((contact, i) => (
                    <tr key={i}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export function ContactListDataJSX(props) {
    return (
        <section id="contact-list">
            <h3>Contacts</h3>
            <ContactList contacts={data}></ContactList>
        </section>
    );
}
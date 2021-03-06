import React, { Component } from 'react';

const SplitterList = ({ contacts }) => {
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

export default SplitterList;
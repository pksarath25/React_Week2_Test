import React, { Component } from 'react';


export class FetchContactData extends Component {
    displayName = FetchContactData.name

  constructor(props) {
    super(props);
      this.state = { contacts: [], loading: true };

      fetch('api/Data/Contacts')
      .then(response => response.json())
      .then(data => {
          this.setState({ contacts: data, loading: false });
      });
  }

    static renderContactsTable(contacts) {
    return (
        <table className='contacts-table'>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                {contacts.map(forecast =>
                    <tr key={forecast.id}>
                        <td>{forecast.id}</td>
                        <td>{forecast.fullname}</td>
                        <td>{forecast.phone}</td>
                        <td>{forecast.email}</td>
                    </tr>
                )}
            </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchContactData.renderContactsTable(this.state.contacts);

    return (
      <div><br/>
        {contents}
      </div>
    );
  }
}

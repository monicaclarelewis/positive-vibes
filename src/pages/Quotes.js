import React from 'react';
import axios from 'axios';

export default class InspirationalQuotes extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}

{/*
import React from "react";

function InspirationalQuotes() {
    return (
        <div>
            <h1>Inspirational quotes:</h1>
            <p>“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.” Joe Girard</p>
        </div>
    )
}
*/}


// export default InspirationalQuotes;
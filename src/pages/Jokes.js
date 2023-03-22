import axios from "axios";
import React, { Component } from "react";

const options = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': '21351eee85msha02d1a5a88a7772p1bfe81jsne90df95aa150',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
  };

class Jokes extends Component {
    state = {
        joke: ""
    };

    componentDidMount() {
        axios.request(options)
        .then(res => {
            this.setState({
              joke: res.data.value
            })}
          )
          .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>{this.state.joke}</h1>
            </div>
        )
    }
}

export default Jokes;
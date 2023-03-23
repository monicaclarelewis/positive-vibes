import axios from "axios";
import React, { Component } from "react";

const chuckNorisApiParams = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': '21351eee85msha02d1a5a88a7772p1bfe81jsne90df95aa150',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
  };

const giphyApiParams = {
  method: 'GET',
  url: 'https://api.giphy.com/v1/gifs/random?api_key=G9Nj3xO4cZvZ5m1u8CQ8AJHmzdKZzpV8&tag=chuck+norris&rating=g'
}

function getRandomChuckNorrisJoke() {
  return axios.request(chuckNorisApiParams)
}

function getRandomChuckNorrisImage() {
  return axios.get('https://api.giphy.com/v1/gifs/random?api_key=G9Nj3xO4cZvZ5m1u8CQ8AJHmzdKZzpV8&tag=chuck+norris&rating=g')
}

class Jokes extends Component {
    state = {
        joke: ""
    };

    componentDidMount() {
      Promise.all([getRandomChuckNorrisJoke(), getRandomChuckNorrisImage()])
        .then(res => {
          const jokeData = res[0]
          const imageData = res[1]
          this.setState({
            joke: jokeData.data.value
          })
          console.log("PIERS ", jokeData)
          console.log("PIERS ", imageData)
        })
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
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

function getRandomChuckNorrisJoke() {
  return axios.request(chuckNorisApiParams)
}

function getRandomChuckNorrisImage() {
  return axios.get('https://api.giphy.com/v1/gifs/random?api_key=G9Nj3xO4cZvZ5m1u8CQ8AJHmzdKZzpV8&tag=chuck+norris&rating=g')
}

class Jokes extends Component {
    state = {
        joke: "",
        src: ""
    };

    componentDidMount() {
      Promise.all([getRandomChuckNorrisJoke(), getRandomChuckNorrisImage()])
        .then(res => {
          const jokeData = res[0]
          const imageData = res[1]
          this.setState({
            joke: jokeData.data.value,
            src:  imageData.data.data.images.original.url
          })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>{this.state.joke}</h1>
                <img src={this.state.src} width="500" height="500" alt=""/>
            </div>
        )
    }
}

export default Jokes;
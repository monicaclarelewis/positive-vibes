import React from 'react';
import axios from 'axios';
import './style.css';

export default class InspirationalQuotes extends React.Component {
  state = {
    quote: {}
  }

  componentDidMount() {
    axios.get(`https://www.chronoson.co.uk/quotes`)
      .then(res => {
        const quote = res.data;
        this.setState({ quote });
      })
  }

  render() {
    return (
        <div>
            <img alt="SpongeBob" src='https://source.unsplash.com/random/500x500' />
            <ul>
                <li><span>"</span>{this.state.quote.quote}<span>"</span></li>
                <li><strong>Author:</strong> {this.state.quote.author}</li>
            </ul> 
        </div>
    )
  }
}
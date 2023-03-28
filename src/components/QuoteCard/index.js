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
      <div className='card'>
        <div className='img-container'>
            <img alt="SpongeBob" src='https://source.unsplash.com/random/400x400' />
        </div>
        <div className="content">
            <ul>
                <li><span>"</span>{this.state.quote.quote}<span>"</span></li>
                <li><strong>Author:</strong> {this.state.quote.author}</li>
            </ul>  
        </div>
      </div>
    )
  }
}
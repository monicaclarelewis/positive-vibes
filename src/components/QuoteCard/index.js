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
            <img alt="SpongeBob" src="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014" />
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
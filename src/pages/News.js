import React, { Component } from 'react';
import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://reuters-business-and-financial-news.p.rapidapi.com/article-date/01-04-2021',
  headers: {
    'X-RapidAPI-Key': '11f0fa9f76msh717eec8227350d2p15b301jsn2a98089fb824',
    'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
  }
};

class News extends Component {
  state = {
      News: ""
  };
  componentDidMount() {

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  }
render() {
  return (
      <div>
          <h1>{this.state.News}</h1>
      </div>
  )
  

}    
}


export default News
import React, { Component } from 'react';
import axios from "axios";


const newscatcher = {
  method: 'GET',
  url: 'https://reuters-business-and-financial-news.p.rapidapi.com/article-date/01-04-2021',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': '11f0fa9f76msh717eec8227350d2p15b301jsn2a98089fb824',
    'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
  }
};
class News extends Component {
  state = {
      News: "",
      src: ""
  };
componentDidMount() {
  axios.get("http://www.kitv.com/story/42196143/to-cap-off-his-amazing-week-elon-musk-just-made-770-million")
  .then(res=> {
    const News = res.data;
    this.setState({News})
  })
   .catch(err => console.log(err));
}
render() {
  return (
      <div>
          <h1>{this.state.News}</h1>
          <img src={this.state.src} width="500" height="500" alt=""/>
      </div>
  )
}
}

  



export default News;
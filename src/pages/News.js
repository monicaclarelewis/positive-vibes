import React, { Component } from 'react';
import axios from "axios";


const options = {
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
  Promise.all([getRamdomNews()])
  .then(res=>{
    const newsData = res[0]
    this.setState({
      News: newsData.data.value,
    
    })
  })
   .catch(er => console.log(err));
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

  



export default News;
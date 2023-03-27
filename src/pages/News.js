
import axios from "axios";
import { useEffect, useState } from 'react';




function News() {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  //Make api call to news api
  async function getNewsData() {
    //Set loading boolean to true so that we know to show loading text
    setLoading(true);

    //Make news api call using axios
    const resp = await axios.get("https://newsapi.org/v2/everything?q=news&apiKey=edc9094ac44144e3922d765f10dda632");
    setNewsData(resp.data.articles);
    console.log (resp.data.articles)

    //Set loading boolean to false so that we know to show news articles
    setLoading(false);
  }

  
    getNewsData();
  }, []);

  

  return (
    <div className="News">
      <h1>Positive-News</h1>
      <header className="News-header">
        {loading ? "Loading..." :<contanier>
      
    {newsData.map((articles ) => {
    return (
      <div className="news">
      <p>{articles.author}</p> 
      <p>{articles.title}</p>
      <a href={articles.url} target="blank">
        View more
      </a>
      <p>{articles.publishedAt}</p>
     </div> 
    )
    
    
      
        
  })
  }
  </contanier>
  }


</header> 
    </div>
  );

}



export default News;
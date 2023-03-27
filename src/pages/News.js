
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
    const resp = await axios.get('https://gnews.io/api/v4/search?q=News&lang=en&country=us&max=10&apikey=95c1a373cc870063d5fb0df7f2083920');
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
      <div className="News">
      <p>{articles.author}</p> 
      <p>{articles.title}</p>
      <img src={articles.image} alt="/"
      className="img-fluid"
      style={{
        width: "auto",
        height: "300px",
        objectFit: "cover",
      }}/>
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
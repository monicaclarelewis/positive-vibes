
import axios from "axios";
import { useEffect, useState } from 'react';




function News() {

  const [imgSrc, setImgSrc] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");

  useEffect(() => {
  //Make api call to news api
  async function getNewsData() {

    //Make news api call using axios
    const resp = await axios.get('https://gnews.io/api/v4/search?q=Positive&lang=en&country=uk&max=10&apikey=95c1a373cc870063d5fb0df7f2083920');
    const randomIndex = Math.floor(Math.random() * resp.data.articles.length);
    const randomArticle = resp.data.articles[randomIndex];
    
    setArticleAuthor(randomArticle.author);
    setArticleTitle(randomArticle.title);
    setImgSrc(randomArticle.image)
  }

    getNewsData();
  }, []);

  return (
      <div className="News">
        <img src={imgSrc} alt="/"
        className="w-full"
        />
        <p className="text-gray-900 font-bold text-xl mb-2 m-3.5">{articleAuthor}</p> 
        <p className="text-gray-900 font-bold text-xl mb-2 m-3.5">{articleTitle}</p>
     </div> 
  );
}


export default News;
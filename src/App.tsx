import { useEffect, useState } from "react";

import axios from "axios";
import NewsCard from "./component/NewsCard";
import Header from "./component/Header";
import { Route, Routes, useParams } from "react-router-dom";


interface NewsArticle{
  title:string;
  description:string | null;
  urlToImage: string | null;
  publishedAt: string;
}


const NewsList: React.FC = () => {
  const {category} = useParams<{category?:string}>();
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();

  useEffect(()=>{
    const fetchNews = async() => {
      try {
        setLoading(true);
        const params: any = {
          apiKey: import.meta.env.VITE_NEWS_API_KEY,
        };

        if (category && category !== 'home') {
          if (category === 'world') {
            params.q = 'world'; // Use keyword search for 'world'
            params.country = 'us';
          } else if (category === 'economy') {
            params.category = 'business'; // Map 'economy' to 'business'
          } else {
            params.category = category; // Direct category for technology, sports
          }
        } else {
          params.country = 'us'; // Home shows top headlines
        }

        const response = await axios.get('https://newsapi.org/v2/top-headlines', { params });
        setNews(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);



 if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }
 
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {category === 'home' || !category ? 'Latest News' : `${category} News`}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              summary={article.description || 'No summary available'}
              image={article.urlToImage || 'https://via.placeholder.com/300x200'}
              date={article.publishedAt}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<NewsList />} />
      <Route path="/:category" element={<NewsList/> }/>
    </Routes>
  );
};

export default App;
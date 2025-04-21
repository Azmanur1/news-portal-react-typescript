import { useEffect, useState } from "react"
import NewsCard from "./component/NewsCard";
import Header from "./component/Header";
import axios from "axios";

interface NewsArticle{
  title:string;
  description:string | null;
  urlToImage: string | null;
  publishedAt: string;
}


const App: React.FC = () => {

  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();

  useEffect(()=>{
    const fetchNews = async() => {
      try {
        setLoading(true);
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // Change to your preferred country or category
            apiKey: import.meta.env.VITE_NEWS_API_KEY,
          },
        });
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if(loading){
    return(
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
        <h1 className="text-3xl font-bold mb-6">Latest News</h1>
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

export default App;
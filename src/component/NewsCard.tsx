import React from 'react';

interface NewsCardProps {
  title: string;
  summary: string;
  image: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, summary, image, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{summary}</p>
        <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;
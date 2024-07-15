// src/components/ArticleList.js
import React from "react";

const List = ({ articles }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Articles</h2>
      <ul className="space-y-6">
        {articles.map((article) => (
          <li
            key={article.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <a
              href={article?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              {article.media.length > 0 &&
                article.media[0]["media-metadata"] && (
                  <img
                    src={article.media[0]["media-metadata"][0].url}
                    alt={article?.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {article?.title}
                </h3>
                <p className="text-gray-700 mt-2">{article?.abstract}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

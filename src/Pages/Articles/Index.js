import React, { useEffect, useState } from "react";
import ArticleList from "../../Components/List";
import Newyork from "../../Services/Api";
import LoadingSpinner from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";
import Dropdown from "../../Components/Dropdown";
import { TimePeriod } from "../../Constants";

const timePeriodOptions = [
  { value: TimePeriod.ONE, label: "1 Day" },
  { value: TimePeriod.SEVEN, label: "7 Days" },
  { value: TimePeriod.THIRTY, label: "30 Days" },
];

const Index = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(TimePeriod.SEVEN);

  useEffect(() => {
    Newyork.getArticles(selectedPeriod)
      .then((res) => {
        setArticles(res?.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [selectedPeriod]);

  const handleSelect = (option) => {
    setSelectedPeriod(option?.value);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Articles not available" />;

  return (
    <main className="flex-grow container mx-auto p-4">
      <Dropdown
        options={timePeriodOptions}
        onSelect={handleSelect}
        defaultValue={TimePeriod.SEVEN}
      />
      <ArticleList articles={articles} />
    </main>
  );
};

export default Index;

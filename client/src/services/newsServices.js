const newsServices = () => {
  return {
    getNews: getNews,
  };
};

const fetchWrapper = (f) => {
  return fetch('../resources/news.json').then((resp) => resp.json(().then((json) => {
    return f(json.news);
  });
};

const getNews = (filter = { title: '', category: ''}) => {
  return fetchWrapper((news) => {
    return news.filter(n => (n.category === filter.category
                            || filter.category === '')
                            && (n.title.toLowerCase().includes(filter.title.toLowerCase())
                            || filter.title === ''));
  });
}

export defualt newsServices();

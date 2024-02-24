import React, { useState, useEffect, useContext } from 'react';
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchContext } from '../context/SearchContext';
import noNews from './images/notFound.svg'
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
    const {search} = useContext(SearchContext)
    useEffect(()=> {
        console.log(search)
    },[search])
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?q=${search}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    let articles = parsedData.articles;
    articles.length===0 && setLoading(false);
    props.setProgress(50);
    setArticles(articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
    setPage(page + 1);
  };
  useEffect(()=> {
    updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])
  useEffect(() => {
    document.title = `${props.category} - News-App`;
    updateNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?q=${search}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    let newArticles = articles.concat(parsedData.articles);
    setArticles(newArticles);
    // console.log(parsedData.articles.length)
    // parsedData.articles.length===0 && setLoading(false);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div >
      <h2 className='text-center my-5'>News Now- Top Headlines</h2>
      {loading && <Spinner />}
      <div className="container">
      {
        articles.length!==0? <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner/>}
      >
        <div className="container-fluid">
          <div className="row my-3">
            {articles.map((el,index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <NewsItem title={el.title ? el.title.slice(0, 44) : ""} description={el.description ? el.description.slice(0, 88) : ""} img={el.urlToImage} imgurl={el.url} author={el.author ? el.author : "Unknown"} date={el.publishedAt} sourceName={el.source.name} />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll> : 
        <div style={{width:"50%",height:"50%",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>

      <img src={noNews} alt='no news found' style={{width:"inherit"}}></img>
      </div>
      }  
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
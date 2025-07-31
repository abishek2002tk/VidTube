import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../Data";
import moment from "moment";



const Feed = ({ category, darkmode  }) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    

    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((responce) => responce.json())
      .then((data) => setData(data.items));
  };
  


  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className={`card ${darkmode ? "WhitePage" : "BlackPage"}`} key={item.id}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>
              {item.snippet.title}
            </h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        ))
      ) : (
        <p>Videos are loading...</p>
      )}
    </div>
  );
};

export default Feed;

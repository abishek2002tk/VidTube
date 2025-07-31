import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_converter } from "../../Data";
import { Link } from "react-router-dom";
import thumbnail1 from "../../assets/thumbnail1.png";

const Recommended = ({ categoryId, darkmode }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const res = await fetch(relatedvideo_url);
      const data = await res.json();
      setApiData(data.items || []);
    } catch (error) {
      console.error("Error fetching recommended videos:", error);
    }
  };


  useEffect(() => {
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  return (
    <>
      {apiData.length === 0 ? (
        <p>Video is Loading....</p>
      ) : (
        <div className={`recommended ${darkmode ? 'WhitePage' : 'BlackPage'}`}>
          {apiData.map((item, index) => (
            <Link
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              key={index}
              className="side-video-list"
            >
              <img src={item.snippet.thumbnails.medium.url || thumbnail1} alt="" />
              <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} Views</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Recommended;

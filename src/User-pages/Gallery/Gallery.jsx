import React, { useEffect } from 'react'
import './Gallery.css'
import { useState } from 'react'
import axios from 'axios';


const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() =>{
    const feacheGallery = async () => {
      const res = await axios.get("https://event-management-backend-5xoa.onrender.com/api/gallery/getGalleries");
      setGalleryData(res.data.data);
    };
    feacheGallery();
  },[]);

  const filtered = activeTab === "all"
    ? galleryData
    : galleryData.filter(item => item.category.toLowerCase() === activeTab);

  return (
    <>
      <div className="gallery">
        <div className="gallert-tital">
          <p className='p'>Event Gallery</p>
          <p className='p1'>A selection of our favourite corporate events and marketing activations</p>
        </div><hr />

        <div className="tabs">
          <button onClick={() => setActiveTab("all")}>All</button>
          <button onClick={() => setActiveTab("wedding")}>Wedding</button>
          <button onClick={() => setActiveTab("birthday")}>Birthday</button>
          <button onClick={() => setActiveTab("corporate")}>Corporate</button>
          <button onClick={() => setActiveTab("cricket")}>Cricket</button>
        </div>


        <div className="gallery-grid">

          {filtered.map((item, index) => (

            <div className="card" key={index}>
              <img src={item.images} alt={item.title} />
              <p>{item.title}</p>
            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default Gallery

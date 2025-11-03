import React from 'react'
import './Gallery.css'
import { useState } from 'react'


const galleryData = {
  all: [
    { src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&auto", text: "Corporate" },
    { src: "https://images.unsplash.com/photo-1569863959165-56dae551d4fc?w=600&auto", text: "Sports" },
    { src: "https://images.unsplash.com/photo-1708020459635-cb65eaa0e0cf?w=600&auto", text: "Travel" },
    { src: "https://plus.unsplash.com/premium_photo-1661780496345-6aeee82ec4b4?w=600&auto", text: "Birthday" },
    { src: "https://images.unsplash.com/photo-1750716413349-df33aeca8429?w=600&auto", text: "Cricket" },
    { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto", text: "Friends" },
  ],
  wedding: [
    { src: "https://images.unsplash.com/photo-1630801059808-1a29d15a2f18?q=80&w=1334&auto", text: "Ring ceremony" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0lDFSl-jcMlH1uNyn68neahCB6VNUY6Phw&s", text: "Mehendi" },
    { src: "https://storage.googleapis.com/shy-pub/337348/1701912549758_SKU-0363_3.jpg", text: "Haldi" },
  ],
  corporate: [
    { src: "https://societyinsurance.com/wp-content/uploads/2023/08/bigmeetingtable-1024x683.jpg", text: "motivating employees" },
    { src: "https://samelane.com/wp-content/uploads/2020/11/Knowledge-sharing-1.jpg", text: "sharing knowledge" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0", text: "Training & Workshops" },
  ],
  cricket: [
    { src: "https://p.imgci.com/db/PICTURES/CMS/192700/192745.jpg ", text: "Cricket Match" },
    { src: "https://media.gettyimages.com/id/2160064375/photo/mumbai-india-indian-cricket-team-pose-with-the-t20-world-cup-trophy-during-celebration-with.jpg?s=612x612&w=gi&k=20&c=o80IFlaOnxSTACMZ0VN2Zp7VS3JqHG5S7-q96kMbYP4=", text: "Team Celebration" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjctW9ELZjSiKebNadV28Vb-CeezYKHKd4gg&s", text: "Trophy" },
  ],
  birthday: [
    { src: "https://www.shutterstock.com/image-photo/birthday-cake-excited-family-party-600nw-2353169721.jpg", text: "Cake Cutting" },
    { src: "https://www.partysharty.com/blog/wp-content/uploads/2018/05/birthday-party-organisers-in-delhi.jpg", text: "Birthday Party" },
    { src: "https://confettigifts.in/cdn/shop/files/openwhen1.jpg?v=1755677444", text: "Gifts" },
  ],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all")

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

          {galleryData[activeTab].map((item, index) => (

            <div className="card" key={index}>
              <img src={item.src} alt={item.text} />
              <p>{item.text}</p>
            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default Gallery

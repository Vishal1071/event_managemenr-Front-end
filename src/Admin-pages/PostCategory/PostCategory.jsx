import './PostCategory.css'
import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

const Events = [
  {
    "NO": 1,
    "Name": "Wedding",
    "imge": "https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg",

  },

  {
    "NO": 2,
    "Name": "Cricket",
    "imge": "https://gujaratcricketassociation.com/wp-content/uploads/2021/01/motera-stadium.jpg",

  },

  {
    "NO": 3,
    "Name": "Corporate",
    "imge": "https://d1jhy9q0556ci9.cloudfront.net/wp-content/uploads/2018/11/riverwind-meet-corporate-events-main-1200x675.jpg",

  },

  {
    "NO": 4,
    "Name": "Birthday",
    "imge": "https://oryzae-celebrations.com/wp-content/uploads/DSC03391.jpg",

  },
]

function PostCategory() {
  const [formData, setFormData] = useState({
    title: "",
    file: null,
  });

  const handelChenge = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  }

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <div className="post-event-Category">
        <h3 className='form-title'>Post Category</h3>

        <form onSubmit={handelsubmit}>
          <div className="file-upload">
            <input type="file"
              id='fileUpload'
              name='file'
              onChange={handelChenge}
              hidden
            />
            <label htmlFor="fileUpload" className="choose-file">
              Choose file
            </label>
            <span className="file-text">
              {formData.file ? formData.file.name : "No file chosen"}
            </span>
            <label className="choose-pic-btn">
              CHOOSE PIC
            </label>
          </div>

          <input
            type="text"
            name='title'
            placeholder='Category Name'
            value={formData.tital}
            onChange={handelChenge}
            className='form-input'
            required
          />

          <button type='submit' className='submit-btn'>
            POST
          </button>
        </form>
      </div>

      <div className="cetegory-list">
        <div className="event-list-tital">
          <div className="heding">
            <p>No</p>
          </div>
          <div className="heding">
            <p>Image</p>
          </div>
          <div className="heding">
            <p>Name</p>
          </div>
          <div className="heding">
            <p>Active</p>
          </div>
        </div>


        <div className='Event-list'>
          {
            Events.map((e) => {
              return (
                <div key={e.NO} className="Event-info">
                  <div className="category-name">
                    <p>{e.NO}</p>
                  </div>
                  <div className="category-name">
                    <img src={e.imge} alt={e.Name} />
                  </div>
                  <div className="category-name">
                    <p>{e.Name}</p>
                  </div>
                  <div className="category-name">
                    <div className='icon'>
                      <MdDeleteForever />
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default PostCategory

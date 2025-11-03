import './Event.css'
import { useNavigate } from "react-router-dom"

export const events = [
        {
            id: 1,
            title: "INDIAN PREMIER LEAGUE",
            date: "2025-03-15",
            endDate:"2025-04-25",
            startTime: "07:30 PM",
            endTime:  "10:20 PM",
            location: "Motera Stadium Ahmedabad",
            price: 2499,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBeZQsBFt_fxaMYN6ktKFG9psYkD1jVXgsw&s",
        },
        {
            id: 2,
            title: "WOMEN PREMIER LEAGUE",
            date: "2025-02-22",
            endDate:"2025-04-25",
            startTime: "07:30 PM",
            endTime:  "10:20 PM",
            location: "Wankhade Cricket Stadium, Mumbai",
            price: 599,
            img: "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1708508747499_Untitleddesign(26).jpg?type=mq",
        },
        {
            id: 3,
            title: "GOKULDHAM PREMIER LEAGUE",
            date: "2024-10-10",
            endDate:"2025-04-25",
            startTime: "07:30 PM",
            endTime:  "10:20 PM",
            location: "GokulDham Society Mumbai",
            price: 200,
            img: "https://i.ytimg.com/vi/WbN9T92P4Is/maxresdefault.jpg",
        },
        {
            id: 4,
            title: "CRICKET GROUND",
            date: "2024-12-02",
            endDate:"2025-04-25",
            startTime: "07:30 PM",
            endTime:  "10:20 PM",
            location: "Ahmedabad",
            price: 5000,
            img: "https://www.keithprowse.co.uk//www.keithprowse.co.uk/-/media/blog/2025/february/lords-in-the-spotlight/1440x600---lords-in-the-spotlight-min.png",
        },
        {
            id: 5,
            title: "WORLD CUP FINAL",
            date: "2025-11-20",
            endDate:"2025-04-25",
            startTime: "07:30 PM",
            endTime:  "10:20 PM",
            location: "Eden Gardens, Kolkata",
            price: 7999,
            img: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/21/full/1700547647-0871.jpg",
        },
    ]

function Cricket() {
    const navigate = useNavigate();
    return (
        <><div className='wedding'>
        <div className="wedding-img">
        <img src="https://gujaratcricketassociation.com/wp-content/uploads/2021/01/motera-stadium.jpg" alt="" width={"100%"} height={"700rem"} />
        </div>
            <div className="events-containar">
                {events.map((event) => (
                    <div key={event.id} className='event-card'>
                        <img src={event.img} alt={event.title} className="event-img" />
                        <div className="event-content">
                            <p className="event-date">{event.date}</p>
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-location">
                                <b>Location:</b> {event.location}
                            </p>
                            <p className="event-price">
                                <b>Rs.</b> {event.price}
                            </p>
                            <button onClick={()=>navigate(`/events/cricket/details/${event.id}`)} className="event-btn">Book Ticket →</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Cricket

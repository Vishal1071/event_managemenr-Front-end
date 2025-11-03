import { events } from './Cricket'
import { useParams } from 'react-router-dom'
import './Event.css'

function Details() {
  const { id } = useParams();
  const event = events.find(event => event.id === Number(id));
  return (
    <div className='event-detail-main'>
      <div className="events-details">
        <img src={event.img} alt={event.title} className="event-banner" />
        <h1>{event.title.toUpperCase()}</h1>
        <p><strong>₹{event.price}</strong></p>
        <p>{event.title}</p>

        <button className='event-btn b'>Book now</button>

        <h3>When and Where</h3>
        <div className="date-time">
          <div>
            <p><strong>Start Date:</strong> {event.date}</p>
            <p><strong>Start Time:</strong> {event.startTime}</p>
          </div>
          <div>
            <p><strong>End Date:</strong> {event.endDate}</p>
            <p><strong>End Time:</strong> {event.endTime}</p>
          </div>
        </div>

        <p><strong>Location:</strong> {event.location}</p>
      </div>
    </div>
  )
}

export default Details

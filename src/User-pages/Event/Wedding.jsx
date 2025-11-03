import React from 'react'
import './Event.css'

function Wedding() {
  return (
    <div className='wedding'>

      <div className="wedding-img">
        <img src="/sadii.jpg" alt="" width={"100%"} />
      </div>

      <div className="wediing-text">

        <h2>FEW WORDS ABOUT</h2>
        <div className="wed-im">
          <img src="https://artcoreevent.com/wp-content/uploads/2025/07/Vector-2.svg" alt="" />
          <h1>Wedding Planner</h1>
          <img src="https://artcoreevent.com/wp-content/uploads/2025/07/Vector-1.svg" alt="" />
        </div>

        <h1 className='h1'>_________________</h1>
        <div className="wedd-text">
          <p><b>Your Reliable Marriage Event Management Partner​</b></p><br />
          <p>Marriage is a lifetime ritual to celebrate. Word “Shubh” means auspicious, bright, good, happy, propitious, golden and much more. “Vivah” indicates the attachments of not only two people, but two families, two cultures and life commitment of togetherness. Putting both together, a marriage event is not just an occasion, it is a festival for the families.</p><br />
          <p>At ARTCORE Event, we specialize in comprehensive wedding planning and event management services across Rajasthan. As a trusted Destination Wedding Planner in Rajasthan, we take care of every detail for your special day—from intimate ring ceremonies and lively bachelor parties to vibrant Sangeet Sandhya nights and grand wedding functions. Whether you're planning your dream destination wedding in Jaipur, Udaipur, Jodhpur, Pushkar, or Mount Abu, our expert team ensures a seamless and memorable celebration.</p><br />
          <p>While doing marriage events we suggest a location, understand the weather, local culture of both families and come up with a design and creative thoughts that make marriage a memorable moment. </p>
        </div>

        <button>Get a Custom Wedding Quote</button>
      </div>
      <div className="bachelor-party">
        <div className="bachelor-img">
          <img src="https://artcoreevent.com/wp-content/uploads/2025/07/Destination-Wedding.png" width={"80%"} alt="" />
        </div>

        <div className="bachelor-text">
          <h1>Destination Wedding</h1>
          <img src="https://artcoreevent.com/wp-content/uploads/2025/07/Vector-3.svg" alt="" />
          <p>As one of the best destination wedding planners, we specialize in stress-free wedding planning by helping you shortlist ideal locations like Udaipur, Jaipur, and other beautiful spots across Rajasthan. We take into account the weather, family cultures, and every intricate detail to ensure your celebration becomes a cherished memory for life. Consult your destination wedding planner today!</p>
          <button>Plan Your Dream Wedding</button>
        </div>
      </div>

      <div className="bachelor-party">
        <div className="bachelor-text abc a">
          <h1>Ring Ceremony</h1>
          <img src="https://artcoreevent.com/wp-content/uploads/2025/07/Vector-3.svg" alt="" />
          <p>An engagement ceremony or ring ceremony is an important pre-wedding ritual in Indian culture. As your wedding management partner, we ensure that you and your better half’s love at first sight experience will be the best to date.</p>
          <button>Plan Your Dream Wedding</button>
        </div>

        <div className="bachelor-img abc">
          <img src="https://artcoreevent.com/wp-content/uploads/2025/07/Ring-Ceremony.png" width={"80%"} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Wedding

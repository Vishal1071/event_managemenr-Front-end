import './Error.css'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
       <div className="error-container">
      <div className="error-glitch">
        <h1>404</h1>
      </div>
      <h2 className="error-title">Oops! Page Not Found 😢</h2>
      <p className="error-message">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <NavLink to="/" className="error-btn">Go Back Home</NavLink>
    </div>
    </>
  )
}

export default Error

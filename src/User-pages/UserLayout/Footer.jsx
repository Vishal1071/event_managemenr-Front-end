import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Event Management. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/gallery">Gallery</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer text-center">
        <div className="container">
          <button className="btn btn-yellow mb-4">Sign in for more access</button>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h5>Follow IMDb on social</h5>
              <div className="social-icons">
                <a href="#"><i className="bi bi-tiktok"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-x"></i></a>
                <a href="#"><i className="bi bi-youtube"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <h5>Get the IMDb app</h5>
              <div className="qr-box">
                <p>For Android and iOS</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Qr-code-for-URL.svg" alt="QR Code" width="100" />
              </div>
            </div>
          </div>

          <div className="bottom-links">
            <a href="#">Help</a>
            <a href="#">Site Index</a>
            <a href="#">IMDbPro</a>
            <a href="#">Box Office Mojo</a>
            <a href="#">License IMDb Data</a>
            <a href="#">Press Room</a>
            <a href="#">Advertising</a>
            <a href="#">Jobs</a>
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Your Ads Privacy Choices</a>
          </div>

          <div className="company-logo">
            <p className="amazon-company">an <i className="bi bi-amazon"></i> company</p>
            <p className="copyright">© 1990-2024 by IMDb.com, Inc.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
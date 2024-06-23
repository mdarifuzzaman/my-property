export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="room-pic">
        <div className="container-fluid">
          <div className="row sp-40">
            <img src="img/room-pic/1.jpg.webp" alt="" />
            <img src="img/room-pic/2.jpg.webp" alt="" />
            <img src="img/room-pic/3.jpg.webp" alt="" />
            <img src="img/room-pic/4.jpg.webp" alt="" />
            <img src="img/room-pic/5.jpg.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center sp-60">
            <img src="img/only-logo.png.webp" alt="" />
          </div>
        </div>
        <div className="row p-37">
          <div className="col-lg-4">
            <div className="about-footer">
              <h5>About Homes</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eleifend tristique venenatis. Maecenas a rutrum tellus nam vel
                semper nibh.
              </p>
              <div className="footer-social">
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-blog">
              <h5>Latest Blog Posts</h5>
              <div className="single-blog">
                <div className="lt-side">
                  <img src="img/footer-blog-1.jpg.webp" alt="" />
                </div>
                <div className="rt-side">
                  <h6>
                    How to find the perfect area for
                    <br /> your next house.
                  </h6>
                  <div className="blog-time">
                    <i className="flaticon-clock"></i>
                    <span>5 min</span>
                  </div>
                  <a href="#" className="read-more">
                    <i className="flaticon-right-arrow-1"></i>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              <div className="single-blog">
                <div className="lt-side">
                  <img src="img/footer-blog-2.jpg.webp" alt="" />
                </div>
                <div className="rt-side">
                  <h6>
                    How to find the perfect area for
                    <br /> your next house.
                  </h6>
                  <div className="blog-time">
                    <i className="flaticon-clock"></i>
                    <span>5 min</span>
                  </div>
                  <a href="#" className="read-more">
                    <i className="flaticon-right-arrow-1"></i>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-address">
              <h5>Get In Touch</h5>
              <ul>
                <li>
                  <i className="flaticon-placeholder"></i>
                  <span>132 Liberty Streetelit, Plano, Texas</span>
                </li>
                <li>
                  <i className="flaticon-envelope"></i>
                  <span>hello@home.com</span>
                </li>
                <li>
                  <i className="flaticon-smartphone"></i>
                  <span>214-805-4428</span>
                </li>
              </ul>
              <p>Monday – Friday: 9 am – 5 pm</p>
              <p>Saturday: 9 am – 1pm</p>
            </div>
          </div>
        </div>
        <div className="row p-20">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              Copyright ©
              2024 All
              rights reserved | Content powered{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a target="_blank" href="https://www.cmslight.cloud">
                CMSLight
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

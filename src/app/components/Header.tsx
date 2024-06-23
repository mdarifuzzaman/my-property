export function Header() {
  return (
    <header className="header-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="logo">
              <a href="./index.html">
                <img src="img/logo.png.webp" alt="" />
              </a>
            </div>
            <ul className="main-menu">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./search.html">Search Results</a>
              </li>
              <li>
                <a href="./about.html">Categories</a>
              </li>
              <li>
                <a href="./single-property.html">Single Property</a>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
              <li className="top-social">
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
              </li>
            </ul>
            {/* <div id="mobile-menu-wrap">
              <div className="slicknav_menu">
                <a
                  href="#"
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                  className="slicknav_btn slicknav_collapsed"
                >
                  <span className="slicknav_menutxt">MENU</span>
                  <span className="slicknav_icon">
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                  </span>
                </a>
                <ul
                  className="slicknav_nav slicknav_hidden"
                  aria-hidden="true"
                  role="menu"
                  style={{ "display":"none" }}
                >
                  <li><a href="./index.html" role="menuitem" tabIndex={-1}>Home</a></li>
                    <li><a href="./search.html" role="menuitem" tabIndex={-1}>Search Results</a></li>
                    <li><a href="./about.html" role="menuitem" tabIndex={-1}>Categories</a></li>
                    <li><a href="./single-property.html" role="menuitem" tabIndex={-1}>Single Property</a></li>
                    <li><a href="./blog.html" role="menuitem" tabIndex={-1}>Blog</a></li>
                    <li><a href="./contact.html" role="menuitem" tabIndex={-1}>Contact</a></li>
                    <li className="top-social">
                        <a href="#" role="menuitem" tabIndex={-1}>
                        <i className="fa fa-pinterest"></i>
                        </a>
                        <a href="#" role="menuitem" tabIndex={-1}>
                        <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" role="menuitem" tabIndex={-1}>
                        <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" role="menuitem" tabIndex={-1}>
                        <i className="fa fa-dribbble"></i>
                        </a>
                        <a href="#" role="menuitem" tabIndex={-1}>
                        <i className="fa fa-behance"></i>
                        </a>
                    </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

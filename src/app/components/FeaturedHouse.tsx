const FeaturedHouse = () => {
  return (
    <section
      className="popular-room set-bg p-in"
      data-setbg="img/bg-2.jpg.webp"
      style={{ backgroundImage: "url(img/bg-2.jpg.webp)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="slider-active owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform:
                      "translate3d(-1080px, 0px, 0px); transition: all 0s ease 0s; width: 3780px",
                  }}
                >
                  <div className="owl-item cloned" style={{ width: "540px" }}>
                    <div className="popular-items">
                      <div className="popular-room-text">
                        <div className="popular-room-details">
                          <div className="popular-room-title">
                            <h5>Spacious Modern Smart House</h5>                            
                          </div>
                        </div>
                        <div className="popular-room-description">
                          <div className="popular-room-desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Praesent sodales commodo ex sed
                              pellentesque. Aliquam vitae purus sed dolor
                              hendrerit vehicula imperdiet sed justo. magna.
                            </p>
                          </div>
                        </div>
                        <div className="popular-room-features">
                          <div className="popular-room-info">
                            <div className="size">
                              <p>Lot Size</p>
                              <img src="img/rooms/size.png.webp" alt="" />
                              <i className="flaticon-bath"></i>
                              <span>2561 sqft</span>
                            </div>
                            <div className="beds">
                              <p>Beds</p>
                              <img src="img/rooms/bed.png.webp" alt="" />
                              <span>9</span>
                            </div>
                            <div className="baths">
                              <p>Baths</p>
                              <img src="img/rooms/bath.png.webp" alt="" />
                              <span>2</span>
                            </div>
                            <div className="garage">
                              <p>Garage</p>
                              <img src="img/rooms/garage.png.webp" alt="" />
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                        <div className="popular-room-price">
                          <p>For Sale</p>
                          <span>$345,000</span>
                          <span className="deal">Best Deal</span>
                        </div>
                        <a href="#" className="site-btn btn-line">
                          View Property
                        </a>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHouse;

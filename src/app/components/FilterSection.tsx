const FilterSection = () => {
  return (
    <div className="filter-search">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <form className="filter-form">
              <div className="location">
                <p>Location</p>
                <select className="filter-location" style={{ "display": "none" }}>
                  <option value="">London</option>
                  <option value="">US</option>
                  <option value="">UAE</option>
                </select>
                <div className="nice-select filter-location" tabIndex={0}>
                  <span className="current">London</span>
                  <ul className="list">
                    <li data-value="" className="option selected">
                      London
                    </li>
                    <li data-value="" className="option">
                      US
                    </li>
                    <li data-value="" className="option">
                      UAE
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-type">
                <p>Property Type</p>
                <select className="filter-property" style={{ "display": "none" }}>
                  <option value="">House</option>
                  <option value="">Resort</option>
                  <option value="">Hotel</option>
                </select>
                <div className="nice-select filter-property" tabIndex={0}>
                  <span className="current">House</span>
                  <ul className="list">
                    <li data-value="" className="option selected">
                      House
                    </li>
                    <li data-value="" className="option">
                      Resort
                    </li>
                    <li data-value="" className="option">
                      Hotel
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price-range">
                <p>Price</p>
                <div className="range-slider">
                  <div
                    id="slider-range"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default slider-left"
                      style={{ "left": "0%" }}
                    >
                      50k
                    </div>
                    <div
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default slider-right"
                      style={{ "left": "100%" }}
                    >
                      300k
                    </div>
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header"
                      style={{ "left": "0%", "width": "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bedrooms">
                <p>Bedrooms</p>
                <div className="room-filter-pagi">
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-1" />
                    <label htmlFor={"room-1"}>1</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-2" />
                    <label htmlFor="room-2">2</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-3" />
                    <label htmlFor="room-3">3</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-4" />
                    <label htmlFor="room-4">4+</label>
                  </div>
                </div>
              </div>
              <div className="bathrooms">
                <p>Bathrooms</p>
                <div className="room-filter-pagi">
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-1" />
                    <label htmlFor="bathroom-1">1</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-2" />
                    <label htmlFor="bathroom-2">2</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-3" />
                    <label htmlFor="bathroom-3">3</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-4" />
                    <label htmlFor="bathroom-4">4+</label>
                  </div>
                </div>
              </div>
              <div className="search-btn">
                <button type="submit">
                  <i className="flaticon-search"></i>Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

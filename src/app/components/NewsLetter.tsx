const NewsLetter = () => {
  return (
    <section className="newslatter-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="newslatter-text">
              <img src="img/message.png.webp" alt="" />
              <h4>
                Join our mailing to get weekly updates on <br />
                our exclusive deals.
              </h4>
              <form>
                <input type="text" placeholder="Email address" />
                <button type="submit" className="site-btn news-btn">
                  Subscribe!
                </button>
                <div
                  data-lastpass-icon-root=""
                  style={{
                    "position": "relative !important",
                    "height": "0px !important",
                    "width": "0px !important",
                    "float": "left !important"
                  }}
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

import { renderMarkdownToHTML } from "./controls/DataToHtml";

export default function Footer({components}: any) {
  return (
    <footer className="footer-section">
      <div className="room-pic">
        <div className="container-fluid">
          <div className="row sp-40">
          {components?.globalDataSource?.fields?.ImageList?.value && JSON.parse(components?.globalDataSource?.fields?.ImageList?.value).map((iList: any, index: number) => (
              <img src={iList?.url} alt="" />                         
          ))}              
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center sp-60">
            <img src={components?.globalDataSource?.fields?.FooterLogo?.value} alt="" />
          </div>
        </div>
        <div className="row p-37">
          <div className="col-lg-4">
            <div className="about-footer">
              <h5>{components?.globalDataSource?.fields?.Title?.value}</h5>
              <div dangerouslySetInnerHTML={renderMarkdownToHTML(components?.globalDataSource?.fields?.Desc?.value)}>             
              </div>              
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-blog">
              <h5>Latest Blog Posts</h5>
              {components?.globalDataSource?.fields?.FooterBlogs?.value && JSON.parse(components?.globalDataSource?.fields?.FooterBlogs?.value).map((blog: any, index: number) => (
                  <div className="single-blog">
                  <div className="lt-side">
                    <img src={blog?.blogImage} alt="" />
                  </div>
                  <div className="rt-side">
                    <h6>
                      {blog?.title}
                    </h6>
                    <div className="blog-time">
                      <i className="flaticon-clock"></i>
                      <span>5 min</span>
                    </div>
                    <a href={blog?.URL} className="read-more">
                      <i className="flaticon-right-arrow-1"></i>
                      <span>{blog?.linkText}</span>
                    </a>
                  </div>
                </div>                              
              ))}               
            </div>
          </div>
          <div className="col-lg-4 col-md-6" dangerouslySetInnerHTML={renderMarkdownToHTML(components?.globalDataSource?.fields?.BlogAddress?.value)}></div>          
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

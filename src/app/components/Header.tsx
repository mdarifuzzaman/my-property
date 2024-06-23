export function Header({components}: any) {
  return (
    <header className="header-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="logo">
              <a href="/">
                <img src={components?.globalDataSource?.fields?.Logo?.value} alt="" />
              </a>
            </div>
            <ul className="main-menu">
              {components?.globalDataSource?.fields?.Navigation?.value && JSON.parse(components?.globalDataSource?.fields?.Navigation?.value).map((nav: any, index: number) => (
                <li>
                  <a href={nav?.url}>{nav?.title}</a>
                </li>              
              ))}              
              <li className="top-social">
                {components?.globalDataSource?.fields?.Social?.value && JSON.parse(components?.globalDataSource?.fields?.Social?.value).map((social: any, index: number) => (
                  
                    <a href={social?.url}>
                      <i className={social?.className}></i>
                    </a>             
                ))}                              
              </li>
            </ul>          
          </div>
        </div>
      </div>
    </header>
  );
}

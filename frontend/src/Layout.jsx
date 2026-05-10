import { useEffect } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Outlet, useLocation } from "react-router-dom";
import 'css/default.css';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    let pageName = 'default';
    if(location.pathname === "/") pageName = 'home';
    else if(location.pathname === "/resume") pageName = 'resume';
    else if(location.pathname === "/projects") pageName = 'projects';
    else if(location.pathname === "/about") pageName = 'about';

    document.body.setAttribute("location", pageName);
    
    return () => {
      document.body.removeAttribute("location");
    };
  }, [location]);

  return (
    <div className="site_container">
      <Header />
      <div className="content_wrap">
        <Outlet />
      </div>
      <Footer /> 
    </div>
  );
}
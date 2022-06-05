import React from "react";
import Typical from "react-typical";
import "./profile.css"

export default function Profile() {
  



  return (
    <div className="profile-container" id="home">
       
     
     
       
        <div className="profile-parent">
        <div className="profile-details">
          <div className="cloz">
              <div className="cloz-icon">
            <a href='https://www.facebook.com/profile.php?id=100009504026343' target='_blank' >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href='https://github.com/birukAE' target='_blank'>
              <i className="fa fa-github-square"></i>
            </a>
            <a href='https://instagram.com/liyu_collections' target='_blank'>
              <i className="fa fa-instagram"></i>
            </a>
            <a href='https://twitter.com/emiru_biruk?t=coCy3nlVZ2F9KV-mqtoFEA&s=09' target='_blank'>
              <i className="fa fa-twitter"></i>
            </a>
            <a href='https://www.youtube.com/channel/UC22stZNfarPKlCQg4jPlNmQ' target='_blank '>
              <i className="fa fa-youtube-square"></i>
            </a></div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              {" "}
              Hi,Iam <span className="highlited-name">Biruk</span>
            </span>
          </div>
          <div className="profile-detail-role">
          <span className="primary-text">
          {" "}
              <h1>
              {" "}
              <Typical
              loop={Infinity}
       steps={["Passinated Dev ",1500,
             "Full-stack Dev",1500,
         "MERN-Stack Dev",1500,
        "Cooprative Dev",1500,]} />
 
     </h1>
              </span>
              <span className="profile-role-tagline">
                  expert on making both front-end and back-end
              </span>
          </div>
          <div className="profile-options">
              
              <button className="btn primary-btn">
                  {" "}Hire me{" "}
              </button>
              <a href="birukcv.pdf" download="birukcv.pdf">
              <button className="btn highlighted-btn">Get resume</button></a>
              </div>
        </div>
        <div className="profile-picture">
        <div className="profile-picture-back">
          </div>
          </div>
      </div>
    </div>
  );
}

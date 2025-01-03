import React from 'react';
import Akeem from './img/akeem.jpeg';
import ResumePdf from './pdf/Akeem_Computer_Science_Resume_cyber 3.docx.pdf'; // import the PDF file


const Owner = () => {
    // get the time of your locality


  return (
    <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
    <div className="ownerContainer">
        <div className="push_wrapper">
            <div className="push_box">
                <div className="push_content">
                    <div className="push_top">
                        <div className="col">
                            <div className="push_imgwrap">
                                <img className="push_icon" src={Akeem} alt=""/>
                            </div>
                            <span className="push_title">Welcome! (click for resume)</span>
                        </div>
                        <div className="col">
                            <div className="push_time">now</div>
                        </div>
                    </div>
                    <div className="push_main">
                        <div className="push_person">Akeem Mohammed</div>
                        <p className="push_text">Masters in CS @ University of Texas at Dallas</p>
                        <p className="push_text">Graduation: Spring 2026</p>
                        <p className="push_text">Looking for full/ partime time jobs | Ex Incoming Software Engineer Intern @ Bank of America</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </a>
  );
};

export default Owner;

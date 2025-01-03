import React from 'react';
import BankofAmerica from './img/BofA.png';
import TexasTechU from './img/TexasTech.png';
import Akeem from './img/akeem.jpeg';
import Leetcode from './img/leetcode.png'


const Experience = () => {


  return (
    <div className="ownerContainer">
    
        <div className="push_wrapper">
            <div className="push_box">
                <div className="push_content">
                    <div className="push_top">
                        <div className="col">
                            <div className="push_imgwrap">
                                <img className="push_icon" src={BankofAmerica} alt=""/>
                            </div>
                            <span className="push_title">Bank of America</span>
                        </div>
                        <div className="col">
                            <div className="push_time">june, 2023 - Aug, 2023</div>
                        </div>
                    </div>
                    <div className="push_main">
                    <div className="push_person">Global Technology Summer Analyst Intern</div>
                        <p className="push_text">Collaborated on end-to-end ETL process with Data Technology team utilizing Autosys for efficient loading, monitored logs via secure SSH tunnel Putty Unix.</p>
                        <p className="push_text">Employed Teradata Studio for optimized data file management, enhancing storage efficiency.</p>
                        <p className="push_text">Validated cash advance and foreign check data in Teradata Studio (development mode) for quality.</p>
                        <p className="push_text">Executed targeted data visualization via SQL queries, ensuring high data quality in the ETL process.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="push_wrapper">
            <div className="push_box">
                <div className="push_content">
                    <div className="push_top">
                        <div className="col">
                            <div className="push_imgwrap">
                                <img className="push_icon" src={TexasTechU} alt=""/>
                            </div>
                            <span className="push_title">Texas Tech ATLC</span>
                        </div>
                        <div className="col">
                            <div className="push_time">may, 2020 - dec, 2023</div>
                        </div>
                    </div>
                    <div className="push_main">
                    <div className="push_person">Lead Student Technician III (previously II)</div>
                        <p className="push_text">Supervised 43 campus printers to ensure high uptime and proper functioning.</p>
                        <p className="push_text">Initiated the idea of having students work during the weekends to have necessary students during peak usage time.</p> 
                        <p className="push_text">Collaborated on an inactivity script, automating user logout after a designated period of computer inactivity.</p>
                        <p className="push_text">Led team of 5 to supervise school computers, mobile laptops and computers daily.</p>

                    </div>
                </div>
            </div>
        </div>

        <div className="push_wrapper" >
            <div className="push_box">
                <div className="push_content">
                    <div className="push_top">
                        <div className="col">
                            <div className="push_imgwrap">
                                <img className="push_icon" src={TexasTechU} alt=""/>
                            </div>
                            <span className="push_title">Texas Tech Libraries</span>
                        </div>
                        <div className="col">
                            <div className="push_time">june, 2019</div>
                        </div>
                    </div>
                    <div className="push_main">
                    <div className="push_person">Student Assistant Librarian</div>
                        <p className="push_text">Spearheaded the adoption of an optimized methodology for space allocation on bookshelves.</p>
                        <p className="push_text">Served daily traffic of up to 57 students at the front desk.</p>
                    </div>
                </div>
            </div>
        </div>

        <a href="https://pearlocal.com">
        <div className="push_wrapper" >
            <div className="push_box">
                <div className="push_content">
                    <div className="push_top">
                        <div className="col">
                            <div className="push_imgwrap">
                                <img className="push_icon" src={Akeem} alt=""/>
                            </div>
                            <span className="push_title">Personal Projects</span>
                        </div>
                        <div className="col">
                            <div className="push_time">june, 2019</div>
                        </div>
                    </div>
                    <div className="push_main">
                    <div className="push_person">Ecommerce Website (click notification)</div>
                        <p className="push_text">Node js as backend and react js as frontend.</p>
                    </div>
                </div>
            </div>
        </div>
        </a>

        <a href="https://akeem-weather-app.netlify.app">
        <div className="push_wrapper" >
            <div className="push_box">
                <div className="push_content">
                    <div className="push_top">
                        <div className="col">
                            <div className="push_imgwrap">
                                <img className="push_icon" src={Akeem} alt=""/>
                            </div>
                            <span className="push_title">Personal Projects</span>
                        </div>
                        <div className="col">
                            <div className="push_time">june, 2019</div>
                        </div>
                    </div>
                    <div className="push_main">
                    <div className="push_person">Weather Application (click notification)</div>
                        <p className="push_text">OpenWeather Api as backend and react js as frontend.</p>
                    </div>
                </div>
            </div>
        </div>
        </a>

        <a href="https://akeem-mohammed.netlify.app">
        <div className="push_wrapper" >
            <div className="push_box">
                <div className="push_content">
                    <div className="push_top">
                        <div className="col">
                            <div className="push_imgwrap">
                                <img className="push_icon" src={Leetcode} alt=""/>
                            </div>
                            <span className="push_title">leetCode</span>
                        </div>
                        <div className="col">
                            <div className="push_time">December, 2021</div>
                        </div>
                    </div>
                    <div className="push_main">
                    <div className="push_person">leetCode Exercises</div>
                        <p className="push_text">These are some of my leetCode exercises.</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </div>
  );
};

export default Experience;

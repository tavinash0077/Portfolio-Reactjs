import React from 'react'
import './AboutMe.css';
import image from '../../assets/avatar-2.svg'
const AboutMe = () => {
    return (
        <section className="about container section " id='about'>

            <h2 className="section_title">About Me</h2>
            <div className="about_container grid">
                <img src={image} alt="" className="about_img" />
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_desrciption">I am Avinash Singh, Java developer at Wipro Technology. I have rich experience in Backend Development as well as Frontend Development.</p>
                        <a href="" className="btn">Download CV</a>
                    </div>
                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">SpringBoot Development</h3>
                                    <span className="skills_number development">90%</span>
                                
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>

                            <div className="skills_title">
                                <h3 className="skills_name">Java Development</h3>
                                    <span className="skills_number development">90%</span>
                                
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>


                            <div className="skills_title">
                                <h3 className="skills_name">React js</h3>
                                    <span className="skills_number development">90%</span>
                                
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default AboutMe
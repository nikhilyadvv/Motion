import React from 'react'
import "./Hero.css";
import Arrow from "/icon-arrow.png";
import Video from "/icon-video.png";
import Dashboard from"/dashboard.png";

const Hero = () => {
    return (
        <section id="hero">
            <p className='welcome'>👋 Welcome to Motion</p>
            <h1 className='title'>Empower your business with <span>Strategic</span> insights</h1>
            <p className='description'>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>
            <div className="buttons">
                <a className="start" href='#'>Get Started<img src={Arrow} alt="arrow icon"/></a>
                <a className="video" href='#'>Watch Demo<img src={Video} alt="arrow icon"/></a>
            </div>
            <img className="dashboard" src={Dashboard} alt="dashboard image"/>
        </section>
    )
}

export default Hero

import React from 'react'
import "./Features.css";
import Feature1 from "/feature1.png";
import Feature2 from "/feature2.png";
import Feature3 from "/feature3.png";
import Feature4 from "/feature4.png";

const Features = () => {
    return (
        <section id='features'>
            <p className='feature'>Our main features🔥</p>
            <h2 className='feature-title'>Discover our product's <span>Capabilities</span></h2>
            <div className='features-container'>
                <div className='features-detail-container'>
                    <p className='features-detail-container-title'>Seamless Scheduling</p>
                    <h3>Focus on what matters most for you</h3>
                    <p className='features-detail-container-description'>Boost productivity and streamline workflow with us. Our intuitive interface and robust features are designed to help you focus on what matters most, whether it's project management, team collaboration, or any other work. With customizable options, and powerful functionalities, you can efficiently manage your tasks and achieve your goals with ease.</p>
                </div>
                <div className='features-image-container'>
                    <img src={Feature1} alt='feature image' />
                    <div className='features-image-container-description'>
                        <h4>Smart Task Management</h4>
                        <p>Say goodbye to chaos with our smart task management system.</p>
                    </div>
                </div>
            </div>
            <div className='features-container-2'>
                <div className='features-detail-container-2'>
                    <img src={Feature2} alt="feature image" />
                    <div className='features-detail-container-2-description'>
                        <h3>Flexible Scheduling</h3>
                        <p>Stay productive with our flexible scheduling system</p>
                    </div>
                </div>
                <div className='features-detail-container-2'>
                    <img src={Feature3} alt="feature image" />
                    <div className='features-detail-container-2-description'>
                        <h3>Easy Communication</h3>
                        <p>Collaborate seamlessly with your team in real-time</p>
                    </div>
                </div>
                <div className='features-detail-container-2'>
                    <img src={Feature4} alt="feature image" />
                    <div className='features-detail-container-2-description'>
                        <h3>Analytics</h3>
                        <p>Gain valuable insights with our advanced analytics feature</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features

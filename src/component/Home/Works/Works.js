import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import work1 from '../../../images/work-1.png';
import work2 from '../../../images/work-2.png';
import work3 from '../../../images/work-3.png';
import work4 from '../../../images/work-4.png';
import work5 from '../../../images/work-5.png';

const Works = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const workStyle = {
        width: '90%',
        height: '200px',
    }
    return (
        <div className='container pb-5'>
            <div className="pt-5 pb-5">
                <h2 className='text-center text-white pb-5'>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
                <Carousel responsive={responsive}>
                    <img style={workStyle} src={work1} alt="" />
                    <img style={workStyle} src={work2} alt="" />
                    <img style={workStyle} src={work3} alt="" />
                    <img style={workStyle} src={work4} alt="" />
                    <img style={workStyle} src={work5} alt="" />
                </Carousel>
            </div>
        </div>
    );
};

export default Works;
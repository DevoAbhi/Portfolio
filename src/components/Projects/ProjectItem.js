import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { projects } from '../../helper/myProjects';
import Card from '../Card/Card';
import { useState,useEffect } from 'react';
import './ProjectItem.css'

const ProjectItem = () => {

    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 576) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {projects.map((project) => (
                <SwiperSlide key={project.website}>
                    <Card key={project.website} {...project} />
                </SwiperSlide>
            ))}


            {/* <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
    )
}

export default ProjectItem
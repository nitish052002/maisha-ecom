import React, { useRef, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProfileOne from "../../assets/profile.jpg";
import ProfileTwo from "../../assets/profilesecond.png";
import ProfileThree from "../../assets/profileThree.jpg";
import "./testomonial.css";

function Testomonials() {
  const testomonial = useRef(null);

  const handleNext = () => {
    if (testomonial.current && testomonial.current.swiper) {
      testomonial.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (testomonial.current && testomonial.current.swiper) {
      testomonial.current.swiper.slidePrev();
    }
  };
  return (
    <section className="py-5 px-5 md:px-20">
      <div className="font-bold text-center text-4xl py-10">
        What our Customers say
      </div>

      <div>
        <Swiper
          ref={testomonial}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex  testomonial_card flex-col items-center justify-center p-5   bg-slate-100	rounded-xl">
              <div className="user_image">
                <img src={ProfileOne} alt="" />
              </div>

              <div>
                <div className="font-bold text-xl py-3 text-center">
                  Lelle ALendar
                </div>
                <div className="font-mediun text-base text-center">
                  24 Aug,2002
                </div>
                <div className="testomonial_rating">
                  <div className="flex items-center justify-center">
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                  </div>
                </div>

                <p className="text-center py-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis dolor quidem cum porro ut veniam facilis provident
                  dolores? Recusandae, doloremque excepturi suscipit voluptate
                  earum doloribus dolore sint ducimus rem mollitia expedita quo
                  inventore temporibus a culpa. Id distinctio dolor modi sequi
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex  testomonial_card flex-col items-center justify-center p-5  bg-zinc-800		text-white rounded-xl">
              <div className="user_image">
                <img src={ProfileTwo} alt="" />
              </div>

              <div>
                <div className="font-bold text-xl py-3 text-center">
                  Rakhi Sharma
                </div>
                <div className="font-mediun text-base text-center">
                  24 Aug,2002
                </div>
                <div className="testomonial_rating">
                  <div className="flex items-center justify-center">
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                  </div>
                </div>

                <p className="text-center py-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis dolor quidem cum porro ut veniam facilis provident
                  dolores? Recusandae, doloremque excepturi suscipit voluptate
                  earum doloribus dolore sint ducimus rem mollitia expedita quo
                  inventore temporibus a culpa. Id distinctio dolor modi sequi
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex  testomonial_card flex-col items-center justify-center p-5   bg-slate-100	rounded-xl">
              <div className="user_image">
                <img src={ProfileThree} alt="" />
              </div>

              <div>
                <div className="font-bold text-xl py-3 text-center">
                  Gulshan Kumar
                </div>
                <div className="font-mediun text-base text-center">
                  24 Aug,2002
                </div>
                <div className="testomonial_rating">
                  <div className="flex items-center justify-center">
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                  </div>
                </div>

                <p className="text-center py-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis dolor quidem cum porro ut veniam facilis provident
                  dolores? Recusandae, doloremque excepturi suscipit voluptate
                  earum doloribus dolore sint ducimus rem mollitia expedita quo
                  inventore temporibus a culpa. Id distinctio dolor modi sequi
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex  testomonial_card flex-col items-center justify-center p-5  bg-zinc-800		text-white	 rounded-xl">
              <div className="user_image">
                <img src={ProfileOne} alt="" />
              </div>

              <div>
                <div className="font-bold text-xl py-3 text-center">
                  Lelle ALendar
                </div>
                <div className="font-mediun text-base text-center">
                  24 Aug,2002
                </div>
                <div className="testomonial_rating">
                  <div className="flex items-center justify-center">
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                  </div>
                </div>

                <p className="text-center py-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis dolor quidem cum porro ut veniam facilis provident
                  dolores? Recusandae, doloremque excepturi suscipit voluptate
                  earum doloribus dolore sint ducimus rem mollitia expedita quo
                  inventore temporibus a culpa. Id distinctio dolor modi sequi
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex  testomonial_card flex-col items-center justify-center p-5   bg-slate-100 	rounded-xl">
              <div className="user_image">
                <img src={ProfileOne} alt="" />
              </div>

              <div>
                <div className="font-bold text-xl py-3 text-center">
                  Lelle ALendar
                </div>
                <div className="font-mediun text-base text-center">
                  24 Aug,2002
                </div>
                <div className="testomonial_rating">
                  <div className="flex items-center justify-center">
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                  </div>
                </div>

                <p className="text-center py-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis dolor quidem cum porro ut veniam facilis provident
                  dolores? Recusandae, doloremque excepturi suscipit voluptate
                  earum doloribus dolore sint ducimus rem mollitia expedita quo
                  inventore temporibus a culpa. Id distinctio dolor modi sequi
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex  testomonial_card flex-col items-center justify-center p-5   bg-zinc-800		text-white	rounded-xl">
              <div className="user_image">
                <img src={ProfileOne} alt="" />
              </div>

              <div>
                <div className="font-bold text-xl py-3 text-center">
                  Lelle ALendar
                </div>
                <div className="font-mediun text-base text-center">
                  24 Aug,2002
                </div>
                <div className="testomonial_rating">
                  <div className="flex items-center justify-center">
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                    <span className="star ">
                      <StarIcon />
                    </span>
                  </div>
                </div>

                <p className="text-center py-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis dolor quidem cum porro ut veniam facilis provident
                  dolores? Recusandae, doloremque excepturi suscipit voluptate
                  earum doloribus dolore sint ducimus rem mollitia expedita quo
                  inventore temporibus a culpa. Id distinctio dolor modi sequi
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        .
      </div>

      <div className="custom-swiper-controls flex items-center gap-3 justify-center  ">
        <button
          onClick={handlePrev}
          className="bg-zinc-50	 text-black border-1 hover:bg-black hover:text-white  ps-2"
        >
          <span>
            <ArrowBackIosIcon />
          </span>
        </button>
        <button
          onClick={handleNext}
          className="bg-zinc-50	 text-black border-1 hover:bg-black hover:text-white  ps-1"
        >
          <span>
            <ArrowForwardIosIcon />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Testomonials;

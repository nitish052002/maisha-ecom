import "./app.css";
import Capsule from "../components/Capsule/capsule";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import capsuleOne from "../assets/capsuleOne.jpg";
import capsuleTwo from "../assets/rounded8.webp";
import capsuleThree from "../assets/rounded2.webp";
import capsuleFour from "../assets/rounded3.webp";
import capsuleFive from "../assets/rounded4.webp";
import capsuleSix from "../assets/rounded7.webp";
import capsuleSeven from "../assets/rounded9.webp";
import capsuleTen from "../assets/rounded10.webp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GradeIcon from "@mui/icons-material/Grade";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ProductCard from "../components/Card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CartLogo from "../assets/cart.svg";
import bottom_banner from "../assets/wider.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import Testomonials from "../components/Testomonial/Testomonials";
import data from "../db/prdocuts.json";

export default function App() {
  const swiperRefOne = useRef(null);
  const swiperRefTwo = useRef(null);

  const handleNextForRefOne = () => {
    if (swiperRefOne.current && swiperRefOne.current.swiper) {
      swiperRefOne.current.swiper.slideNext();
    }
  };

  const handlePrevForRefOne = () => {
    if (swiperRefOne.current && swiperRefOne.current.swiper) {
      swiperRefOne.current.swiper.slidePrev();
    }
  };

  const handleNextForRefTwo = () => {
    if (swiperRefTwo.current && swiperRefTwo.current.swiper) {
      swiperRefTwo.current.swiper.slideNext();
    }
  };

  const handlePrevForRefTwo = () => {
    if (swiperRefTwo.current && swiperRefTwo.current.swiper) {
      swiperRefTwo.current.swiper.slidePrev();
    }
  };

  const [products, setProducts] = useState([]);
  const [offerProducts, SetOfferProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
    SetOfferProducts(data.products);
  }, []);

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <div className="text-center font-bold text-4xl pt-10">
          Shop by Categories
        </div>
        <section className="categories flex items-center justify-center gap-10 py-10 px-20 overflow-x-auto	">
          <Capsule img={capsuleOne} title="Birthday" />
          <Capsule img={capsuleTen} title="Birthda Cakes" />
          <Capsule img={capsuleThree} title="Rakhi Gifts" />
          <Capsule img={capsuleSeven} title="Flowers" />
          <Capsule img={capsuleFive} title="Teacher's Day" />
          <Capsule img={capsuleFour} title="Valentine's Day" />
          <Capsule img={capsuleSix} title="Flowers" />
          <Capsule img={capsuleTwo} title="Designed Cups" />
        </section>

        <section className="best_seller py-10 px-2 md:px-10  bg-zinc-50	    ">
          <div className="flex justify-between  md:flex-row flex-col   ">
            <div className="font-bold  pb-10 text-4xl text-center text-nowrap ps-5">
              Our Best Sellers
            </div>{" "}
            <div className="flex items-center justify-center mb-10 mb:m-0 gap-5">
              <div className="custom-swiper-controls flex items-center gap-3">
                <button
                  onClick={() => handlePrevForRefOne(swiperRefOne)}
                  className="bg-zinc-50	 text-black border-1 hover:bg-black hover:text-white  ps-2"
                >
                  <span>
                    <ArrowBackIosIcon />
                  </span>
                </button>
                <button
                  onClick={() => handleNextForRefOne(swiperRefOne)}
                  className="bg-zinc-50	 text-black border-1 hover:bg-black hover:text-white  ps-1"
                >
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </button>
              </div>
              <div>
                <button className="py-2 px-4 rounded bg-black text-white">
                  View ALl
                </button>
              </div>
            </div>
          </div>

          <Swiper
            ref={swiperRefOne}
            slidesPerView={2}
            spaceBetween={1}
            freeMode={true}
            pagination={{
              clickable: false,
              el: ".swiper-pagination",
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 5,
              },

              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1500: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {products.map((data) => (
              <SwiperSlide>
                <ProductCard
                  key={data.id}
                  id={data.id}
                  imageurl={data.image_url}
                  title={data.title}
                  price={data.price}
                  heartActive={data.wishlist ? true : false}
                  setWishListTrue={(id) => {
                    setProducts((prevProducts) =>
                      prevProducts.map((prd) =>
                        prd.id === id
                          ? { ...prd, wishlist: !prd.wishlist }
                          : prd
                      )
                    );
                  }}
                  productsList={products}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="md:px-20 px-10">
          <div className="flex items-center flex-col md:flex-row justify-between py-9 bg-lime-100	rounded-xl px-5 py-1  ">
            <div className="flex  items-center  gap-4">
              <div className="cart_icon">
                <img src={CartLogo} alt="" />
              </div>
              <div>
                <div className="font-bold text-2xl">Welcome to the Eliz</div>
                <p>
                  Download the app get free food & <span>$30</span> off on your
                  first order.
                </p>
              </div>
            </div>

            <div className="bg-black text-white py-3 px-8 rounded-md md:my-0 my-4">
              <button className="text-nowrap">Download App</button>
            </div>
          </div>
        </section>

        <section className="best_seller py-10  bg-white ">
          <div className="flex justify-between     flex-col md:flex-row  ">
            <div className="font-bold  pb-10 text-4xl   ps-5 text-center ">
              Our best offers for today
            </div>{" "}
            <div className="flex items-center gap-5 justify-center mb-5 md:m-0">
              <div className="custom-swiper-controls flex items-center gap-3">
                <button
                  onClick={() => handlePrevForRefTwo()}
                  className="bg-zinc-50	 text-black border-1 hover:bg-black hover:text-white  ps-2"
                >
                  <span>
                    <ArrowBackIosIcon />
                  </span>
                </button>
                <button
                  onClick={() => handleNextForRefTwo()}
                  className="bg-zinc-50	 text-black border-1 hover:bg-black hover:text-white  ps-1"
                >
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </button>
              </div>
              <div></div>
            </div>
          </div>

          <Swiper
            ref={swiperRefTwo}
            slidesPerView={2}
            spaceBetween={1}
            freeMode={true}
            pagination={{
              clickable: false,
              el: ".swiper-pagination",
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 2,
              },

              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1500: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {products.map(
              (data, index) =>
                index % 2 && (
                  <SwiperSlide>
                    <ProductCard
                      id={data.id}
                      key={data.id}
                      imageurl={data.image_url}
                      title={data.title}
                      price={data.price}
                      setWishListTrue={(id) => {
                        SetOfferProducts((prevProducts) =>
                          prevProducts.map((prd) =>
                            prd.id === id
                              ? { ...prd, wishlist: !prd.wishlist }
                              : prd
                          )
                        );
                      }}
                      productsList={offerProducts}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </section>

        <section>
          <img src={bottom_banner} alt="" />
        </section>

        <section className="testomonial">
          <Testomonials />
        </section>

        <div className="why_choose_us py-10 px-10">
          <div className="flex justify-between    flex-col md:flex-row mb-10 md:m-0 ">
            <div className="font-bold  pb-10 text-4xl text-nowrap text-center">
              Why Choose Us
            </div>{" "}
            <div>
              <div className="flex justify-center">
                <div>
                  <button className="py-2 px-4 rounded bg-black text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center	">
            <div className="why_card flex flex-col justify-center items-center">
              <div className="img mb-4">
                <span>
                  <LocalShippingIcon fontSize="large" />
                </span>
              </div>
              <h3 className="font-bold text-2xl mb-4">First Delivery</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam non libero soluta sed vero eos nobis modi! Voluptas
                dignissimos architecto voluptates velit laudantium expedita
                autem reiciendis quia dicta! Nam, dolorum.
              </p>
            </div>

            <div className="why_card  flex flex-col justify-center items-center">
              <div className="img mb-4">
                <span>
                  <SupportAgentIcon fontSize="large" />
                </span>{" "}
              </div>
              <h3 className="mb-4 font-bold text-2xl">First Delivery</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam non libero soluta sed vero eos nobis modi! Voluptas
                dignissimos architecto voluptates velit laudantium expedita
                autem reiciendis quia dicta! Nam, dolorum.
              </p>
            </div>

            <div className="why_card  flex flex-col justify-center items-center">
              <div className="img mb-4">
                <span>
                  <GradeIcon fontSize="large" />
                </span>
              </div>
              <h3 className="mb-4 font-bold text-2xl">First Delivery</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam non libero soluta sed vero eos nobis modi! Voluptas
                dignissimos architecto voluptates velit laudantium expedita
                autem reiciendis quia dicta! Nam, dolorum.
              </p>
            </div>

            <div className="why_card  flex flex-col justify-center items-center">
              <div className="img mb-4">
                <span>
                  <MilitaryTechIcon fontSize="large" />
                </span>
              </div>
              <h3 className="font-bold text-2xl mb-4">First Delivery</h3>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam non libero soluta sed vero eos nobis modi! Voluptas
                dignissimos architecto voluptates velit laudantium expedita
                autem reiciendis quia dicta! Nam, dolorum.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

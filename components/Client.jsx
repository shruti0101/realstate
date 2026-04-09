"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { motion } from "framer-motion"

export default function Client() {
  const clients = [
    { name: "Dominos Pizza", image: "/client/1.png" },
    { name: "Manyavar", image: "/client/2.png" },
    { name: "Samsung", image: "/client/3.png" },
    { name: "HDFC Bank", image: "/client/4.png" },
    { name: "ICICI Bank", image: "/client/5.png" },
    { name: "Bandhan Bank", image: "/client/6.png" },
    { name: "Union Bank", image: "/client/7.png" },
    { name: "Westside", image: "/client/8.png" },
  ]

  return (
    <div className="bg-gray-50">
      <h2 className="pt-5 text-center text-red-600 md:text-5xl text-4xl font-bold">
        Our Clients
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="px-6 overflow-visible pt-10! pb-10!"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl p-4 flex items-center justify-center cursor-pointer border border-gray-100"
            >
              <motion.img
                src={client.image}
                alt={client.name}
                className="h-40 object-contain transition duration-300"
                whileHover={{ rotate: 2 }}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto my-6">
    <div className="carousel w-full rounded-xl overflow-hidden h-[90vh]">
      {banner.map((item, i)=> (
        <div
        key={i}
        style={{
          backgroundImage:
            `linear-gradient(45deg, #343434d6, #ffffff00), url(/assets/images/banner/${item.image})`,
        }}
        id={`slide${i+1}`}
        className="carousel-item relative w-full bg-top bg-no-repeat bg-cover"
      >
        <div className="flex flex-col justify-center p-4 md:pl-36 gap-6">
            <h1 className="text-3xl md:text-7xl max-w-[460px] font-bold text-white leading-tight"> {item.title}</h1>
            <p className="text-gray-200 max-w-[500px] "> {item.desc} </p>
            <div>
                <button className="btn btn-primary mr-3">Discover More</button>
                <button className="btn btn-outline border-white text-white hover:bg-primary hover:border-primary">Latest Projects</button>
            </div>
        </div>
        <div className="absolute flex bottom-6 right-6 gap-2">
          <a href={item.prev} className="btn btn-circle">
            ❮
          </a>
          <a href={item.next} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      ))}
    </div>
      </div>
  );
};

const banner = [
  {
    title: "Affordable Price For Car Servicing",
    desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
    image: "1.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
    image: "2.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
    image: "3.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
    image: "4.jpg",
  },
];

export default Banner;

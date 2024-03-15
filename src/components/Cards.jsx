
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./App";
const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="mx-auto md:px-0 w-full py-[50px]">
        <div className="max-w-[1240px] mx-auo">
          <div className="md:grid-cols-3 gap-12 md:gap-6 md:px-2 lg:gap-8 text-black text-sm">
            <Slider {...settings}> 
              {data.map((data) => (
                <>
                  <div key={data.name} className="px-8">
                    <div className="bg-white -mx-4 overflow-hidden drop-shadow-md shadow-xl rounded-xl text-left hover:shadow hover:ease-out hover:duration-200">
                      <img
                        className="h-30 w-full object-cover"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG"
                        alt="coffee"
                      />
                      <div className="ms-1.5 md:ms-6 my-4 pe-4 lg:text-lg">
                        <p>Reloj de pulsera Omega Constellation 551 de la década de 1960 esfera sartén</p>
                        <img
                          className="h-20 lg:h-28 -my-6 lg:-mb-12 lg:-mt-8 -mx-2"
                          src="https://static.thenounproject.com/png/5632679-200.png"
                          alt="stars"
                        />
                        <div className="flex flex-wrap justify-between relative md:-mx-1 lg:mx-1 lg:my-4">
                          <p className="text-end font-bold py-2">L 3953.48</p>
                          <button className="rounded-lg bg-RED_LIGHT py-1 px-1 md:px-2 md:py-0 text-white lg:px-3 w-44 ms-2">
                            Envio GRATIS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div key={data.name} className="px-8">
                    <div className="bg-white -mx-4 overflow-hidden drop-shadow-md shadow-xl rounded-xl text-left hover:shadow hover:ease-out hover:duration-200">
                      <img
                        className="h-30 w-full object-cover"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG"
                        alt="coffee"
                      />
                      <div className="ms-1.5 md:ms-6 my-4 pe-4 lg:text-lg">
                        <p>Reloj de pulsera Omega Constellation 551 de la década de 1960 esfera sartén</p>
                        <img
                          className="h-20 lg:h-28 -my-6 lg:-mb-12 lg:-mt-8 -mx-2"
                          src="https://static.thenounproject.com/png/5632679-200.png"
                          alt="stars"
                        />
                        <div className="flex flex-wrap justify-between relative md:-mx-1 lg:mx-1 lg:my-4">
                          <p className="text-end font-bold py-2">L 3953.48</p>
                          <button className="rounded-lg bg-RED_LIGHT py-1 px-1 md:px-2 md:py-0 text-white lg:px-3 w-44 ms-2">
                            Envio GRATIS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cards;

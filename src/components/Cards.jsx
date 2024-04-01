import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogs } from "./App";

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div>
      <div className="md:px-0 w-full py-[50px] mx-auto">
        <div className="max-w-[1240px]">
          <div className="md:grid-cols-3 md:gap-6 md:px-2 lg:gap-8 text-black text-sm -mx-6">
            <Slider {...settings}>
              {blogs.map((blog) => (
                <>
                  <button key={blog.id} className="px-1">
                    <div className="bg-white overflow-hidden drop-shadow-md rounded-xl text-left hover:shadow hover:ease-out hover:duration-200">
                      <img className="h-32 md:h-40 w-full object-cover" src={blog.img} alt="coffee" />
                      <div className="ms-1.5 md:ms-4 my-1 pe-4 lg:text-lg md:text-base">
                        <p className="">{blog.description}</p>
                        <div className="flex flex-wrap justify-center items-center relative md:-mx-1 lg:mx-1 lg:my-4">
                          <p className="font-bold flex-grow">{blog.price}</p>
                        </div>
                      </div>
                      <div className="p-1 -mt-1.5"></div>
                    </div>
                  </button>
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

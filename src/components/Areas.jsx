import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { areas } from "./App";

const Areas = () => {
  return (
    <div className="my-0 md:my-4 py-2 lg:-my-8 w-full mx-auto">
      <div className="md:p-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-3 -m-5 md:grid-cols-8 md:gap-8 md:flex md:flex-wrap justify-center">
            {areas.map((area) => (
              <>
                <button key={area.id} className="overflow-hidden md:-mx-1 text-center">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mx-auto">
                    <img src={area.img} className=" absolute min-w-full min-h-full object-cover text-center" alt="imgArea" />
                  </div>
                    <p className="py-2 font-semibold">{area.title}</p>
                </button>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;

/* <img
                className=""
                src="https://www.banhcafe.hn/_next/image?url=%2Fannouncement-4.webp&w=640&q=75"
                alt="banca"
              /> */

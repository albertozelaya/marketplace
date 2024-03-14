const Navbar = () => {
  return (
    <div>
      <div className="mx-auto px-3 md:px-0 w-full py-[50px]">
        <div className="max-w-[1240px] mx-auo">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 px-2 text-black">
            <div className="bg-white overflow-hidden drop-shadow-md shadow-xl rounded-xl text-left hover:shadow hover:ease-out hover:duration-200">
              <img
                className="h-56 w-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG"
                alt="coffee"
              />
              <div className="ms-6 my-4 pe-4 lg:text-lg">
                <p>Reloj de pulsera Omega Constellation 551 de la década de 1960 esfera sartén</p>
                <img
                  className="h-20 lg:h-28 -my-6 lg:-mb-12 lg:-mt-8 -mx-2"
                  src="https://static.thenounproject.com/png/5632679-200.png"
                  alt="stars"
                />
                <div className="flex justify-between relative md:-mx-1 lg:mx-1 lg:my-4">
                  <p className="text-end font-bold py-2">L 3953.48</p>
                  <button className="rounded-lg bg-RED_LIGHT px-2 py-1 md:px-2 md:py-0 text-white lg:px-3">Envio GRATIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
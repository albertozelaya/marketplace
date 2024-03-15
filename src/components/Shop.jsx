import { data } from "./App";

const Shop = () => {
  return (
    <div>
      {data.map((data) => (
        <>
          <div key={data.name}>
            <div className="mx-auto md:px-0 w-full py-[50px]">
              <div className="max-w-[1240px] mx-auo ">
                <div className="drop-shadow-xl grid grid-cols-1 md:grid-cols-2 rounded-lg bg-BG_LIGHT">
                  <div className="grid grid-cols-2 md:col-span-2 bg-white rounded-xl overflow-hidden gap-4">
                    <div className="">
                      <img
                        className="rounded-xl"
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg"
                        }
                        alt="granos"
                      />
                    </div>
                    <div className="text-start">
                      <h1 className=" text-xl ms-2 mt-2">Granos de Café añejeados desde 1961, Banhcafe</h1>
                      <h2 className="ms-5 mt-1">de Moises Vendido por Edmundo</h2>
                      <div className="flex justify-between px-4">
                        <img className="h-36 -mt-14" src={data.stars} alt="stars" />
                        <p className="pe-4 pt-1">(Sin reviews verificados)</p>
                      </div>
                      <div className="-mt-11 pe-3 ">
                        <hr className="bg-black bold border rounded-xl border-black" />
                        <div className="pt-4"></div>
                        <p className="font-bold">¡Compra sin sorpresas!</p>
                        <p>El precio final incluye impuestos y todos sus posibles costos asociados</p>
                        <hr className="bg-black bold border rounded-xl border-black" />
                        <p>En stock</p>
                        <h2 className="text-xl font-bold">L 3953.48</h2>
                        <button className="rounded-full bg-RED_LIGHT text-white p-2 w-full m-2 ">Agregar al carrito</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Shop;

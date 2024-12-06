import berlin from "../assets/images/berlin.webp"
import amsterdam from "../assets/images/amsterdam.webp"
import lisbon from "../assets/images/lisbon.webp"
import barcelona from "../assets/images/barcelona.webp"
import london from "../assets/images/london.webp"
import madrid from "../assets/images/madrid.webp"
import paris from "../assets/images/paris.webp"
import bangkok from "../assets/images/bangkok.webp"
import rome from "../assets/images/rome.webp"

const cities = [
  {
    name: "Berlin Brandenburg",
    image: berlin,
  },
  {
    name: "Amsterdam",
    image: amsterdam,
  },
  {
    name: "Lisbon",
    image: lisbon,
  },
  {
    name: "Barcelona",
    image: barcelona,
  },
  {
    name: "London",
    image: london,
  },
  {
    name: "Madrid",
    image: madrid,
  },
  {
    name: "Paris",
    image: paris,
  },
  {
    name: "Bangkok",
    image: bangkok,
  },
  {
    name: "Rome",
    image: rome,
  },
];

const Cities = () => {
    return (
      <div className="lg:mt-[200px] mx-[10%] my-[100px]">
        <h1 className="text-xl font-bold">Popular right now</h1>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex gap-6 items-center border border-gray-300 rounded-lg shadow-md"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-[80px] h-[80px] object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">{city.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Cities;
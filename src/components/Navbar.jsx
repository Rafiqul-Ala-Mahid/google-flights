import { IoIosAirplane } from "react-icons/io";
import { useState } from "react";

const languages = [
  { name: "English", flag: "https://flagcdn.com/us.svg" },
  { name: "French", flag: "https://flagcdn.com/fr.svg" },
  { name: "German", flag: "https://flagcdn.com/de.svg" },
];

const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (language) => {
      setSelectedLanguage(language);
      setIsOpen(false); // Close dropdown
    };
    return (
      <div className="bg-[#181A25] px-[10%] py-[20px] border-b-2 border-gray-300 flex justify-between text-white">
        <div className="flex gap-4">
          <div className="bg-[#FCB301] w-[35px] h-[35px] rounded-full">
            <IoIosAirplane className="text-black text-4xl m-auto" />
          </div>
          <div className="text-2xl font-extrabold">Flight-Fare</div>
        </div>
        <div className="relative inline-block">
          <div
            className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={selectedLanguage.flag}
              alt={`${selectedLanguage.name} Flag`}
              className="w-5 h-4"
            />
            <span>{selectedLanguage.name}</span>
          </div>
          {isOpen && (
            <div className="absolute mt-2 bg-white border rounded shadow-md w-48">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => selectLanguage(language)}
                >
                  <img
                    src={language.flag}
                    alt={`${language.name} Flag`}
                    className="w-5 h-4"
                  />
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;

const ModelOne = ({ togglePopup1 }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center p-2 ">
          <div className="flex justify-center space-x-10 items-center">
            <div className="cursor-pointer">
              <select className="bg-[#FFFFFF]  font-semibold  text-[#000000] rounded-[4px] px-5 py-2">
                <option className="text-black py-2">Mistral</option>
                <option className="text-black">LAMA 3</option>
                <option className="text-black">Claude</option>
              </select>
              <svg
                className="select-arrow"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.71436 3.5L6.71436 8.5L11.7144 3.5H1.71436Z"
                  fill="#687986"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="bg-[#FFFFFF] rounded-[4px] p-2">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer  "
                onClick={togglePopup1}
              >
                <path
                  d="M8.46436 4.75L6.02686 4.1875L4.90186 5.3125L5.46436 7.75L3.21436 9.25V10.75L5.46436 12.25L4.90186 14.6875L6.02686 15.8125L8.46436 15.25L9.96436 17.5H11.4644L12.9644 15.25L15.4019 15.8125L16.5269 14.6875L15.9644 12.25L18.2144 10.75V9.25L15.9644 7.75L16.5269 5.3125L15.4019 4.1875L12.9644 4.75L11.4644 2.5H9.96436L8.46436 4.75Z"
                  stroke="#687986"
                  strokeWidth="1.66667"
                />
                <path
                  d="M13.2144 10C13.2144 11.3807 12.0951 12.5 10.7144 12.5C9.33364 12.5 8.21436 11.3807 8.21436 10C8.21436 8.61929 9.33364 7.5 10.7144 7.5C12.0951 7.5 13.2144 8.61929 13.2144 10Z"
                  stroke="#687986"
                  strokeWidth="1.66667"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[40vh] h-[25vh] mt-7  text-black p-3 md:p-10 rounded-[14px] bg-[#F3F4F5] mr-2"
        style={{ overflowY: "auto" }}
      >
        According to the 2022 Global Happiness Report, the top 3 happiest
        countries in the world are:
        <br />
        <br />
        <span className="font-bold mr-2 text-[17px]"> 1. Finland :</span>
        Finland has consistently ranked as one of the happiest countries in the
        world. It has a high level of social support, low levels of corruption,
        and a high standard of living. <br />
        <br /> <span className="font-bold mr-2  text-[17px]">
          2. Denmark :
        </span>{" "}
        Denmark is known for its high standard of living, generous social
        welfare system, and high level of social support. The country also has a
        strong culture of work-life balance and a high level of trust in
        institutions.
        <br />
        <br />
        <span className="font-bold mr-2  text-[17px]">
          {" "}
          3. Switzerland :
        </span>{" "}
        Switzerland is a neutral and stable country with a high standard of
        living. It has a low level of corruption, a high level of social
        support, and a strong economy. The country also has a high level of
        trust in institutions and a strong culture of social cohesion. These
        countries have a high score on the Gross Domestic Happiness (GDH) index,
        which measures happiness and well-being across countries. The GDH index
        takes into account factors such as GDP per capita, social support,
        healthy life expectancy, freedom to make life choices, generosity, and
        perceptions of corruption and trust in institutions
      </div>
    </div>
  );
};

export default ModelOne;

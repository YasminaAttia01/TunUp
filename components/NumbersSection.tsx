"use client";
import CountUp from "react-countup";

const NumbersSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 md:px-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-primary">BUILDING BETTER</span> <br />
          WORKS LIVES, BETTER <br />
          ORGANIZATIONS.
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <CountUp start={0} end={5} duration={2.5} separator="," />/5
          </h2>
          <p className="text-gray-600 text-sm md:text-base">Client Satisfaction</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <CountUp start={0} end={5} duration={2.5} separator="," />/5
          </h2>
          <p className="text-gray-600 text-sm md:text-base">Employee Satisfaction</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            + <CountUp start={0} end={7} duration={2.5} separator="," />
          </h2>
          <p className="text-gray-600 text-sm md:text-base">Years of Experience</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <CountUp start={0} end={30} duration={2.5} separator="," />
          </h2>
          <p className="text-gray-600 text-sm md:text-base">Employee Average Age</p>
        </div>
     
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            +  <CountUp start={0} end={20} duration={2.5} separator="," />
          </h2>
          <p className="text-gray-600 text-sm md:text-base">Number of partners</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            + <CountUp start={0} end={300} duration={2.5} separator="," />
          </h2>
          <p className="text-gray-600 text-sm md:text-base">Number of Employees</p>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

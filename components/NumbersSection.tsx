"use client";
import CountUp from "react-countup";

const NumbersSection = () => {
  return (
    <section className="flex items-center justify-between  py-16 px-6 md:px-10 max-w-screen-xl mx-auto">
      {/* Texte et bouton */}
      <div className="flex flex-col gap-6 max-w-lg">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-primary">BUILDING BETTER</span> <br />
          WORKS LIVES, BETTER <br />
          ORGANIZATIONS.
        </h1>
        
      </div>
     
      

      {/* Chiffres animés */}
      <div className="grid grid-cols-2 gap-8">
        {/* Nombre 1 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold">
            <CountUp start={0} end={5} duration={2.5} separator="," />/5
          </h2>
          <p className="text-gray-600 text-lg"> Client Satisfaction</p>
        </div>

        {/* Nombre 2 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold">
            <CountUp start={0} end={5} duration={2.5} separator="," />/5
          </h2>
          <p className="text-gray-600 text-lg">Employee Satisfaction</p>
        </div>

        {/* Nombre 3 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold">
           + <CountUp start={0} end={7} duration={2.5} separator="," />
          </h2>
          <p className="text-gray-600 text-lg">Years of Experience</p>
        </div>

        {/* Nombre 4 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold">
            <CountUp start={0} end={25} duration={2.5} separator="," />
          </h2>
          <p className="text-gray-600 text-lg">Employee Average Age</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold">
          +  <CountUp start={0} end={20} duration={2.5} separator="," />K
          </h2>
          <p className="text-gray-600 text-lg">Number of partners</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold">
           + <CountUp start={0} end={200} duration={2.5} separator="," />
          </h2>
          <p className="text-gray-600 text-lg">Number of Employees</p>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

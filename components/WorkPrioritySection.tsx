const WorkPrioritySection = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 md:px-10 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-5xl md:text-4xl font-bold text-secondary">
            <span className="text-primary">WORK FOR</span> US IS A PRIORITY
          </h2>
  
        
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col items-center">
              <div className="w-40 h-20 bg-primary rounded-t-full flex items-end justify-center">
                <h3 className="text-white font-bold text-lg">Hybrid work</h3>
              </div>
              <p className="mt-4 text-gray-600 text-sm max-w-xs">
              Hybrid work provides employees with greater flexibility, autonomy, and work-life integration, which can lead to higher job satisfaction. 
              </p>
            </div>
           
            <div className="flex flex-col items-center">
              <div className="w-40 h-20 bg-primary rounded-t-full flex items-end justify-center">
                <h3 className="text-white font-bold text-lg">Transport</h3>
              </div>
              <p className="mt-4 text-gray-600 text-sm max-w-xs">
              TunUp provides organized taxi transportation to help employees commute safely and comfortably. 
              </p>
            </div>
  
        
            <div className="flex flex-col items-center">
              <div className="w-40 h-20 bg-primary rounded-t-full flex items-end justify-center">
                <h3 className="text-white font-bold text-lg">E-learning </h3>
              </div>
              <p className="mt-4 text-gray-600 text-sm max-w-xs">
              We support continuous learning by giving our employees access to professional e-learning platforms.              </p>
            </div>
  
         
            <div className="flex flex-col items-center">
              <div className="w-40 h-20 bg-primary rounded-t-full flex items-end justify-center">
                <h3 className="text-white font-bold text-lg">Environment</h3>
              </div>
              <p className="mt-4 text-gray-600 text-sm max-w-xs">
              At TunUp, we value employee well-being through team-building activities that encourages collaboration and motivation. 
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkPrioritySection;
  
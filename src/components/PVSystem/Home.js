import React from 'react';

  function Home() {

    return (
      <div>
        <div className="energy-dotgov">
          <h3>How to use this site</h3>
          <section>
            <p>This site is intended to give residential homeowners an easy way to calculate your average, maximum daily electicity usage with the <a href="/pv-system/e_use_calc">Energy use calc</a></p>
          </section>
          <section>
            With the knowledge of the peak use of electricity, you can more easily choose the appropriate size for your usage. If you have a few factors calculated for your solar panel system like the location, system size (kW), and panel angles, you can use the <a href="/pv-system/system_output">System output</a> to calculate how many kW your system will produce for each month of the year.
          </section>
          <section style={{display: 'flex', flexDirection: 'column'}}>
            For more information about system size, government programs for solar and other details, please check out energy.gov:
            <a href="https://www.energy.gov/energysaver/planning-home-solar-electric-system">
              <img style={{height: '250px'}} src="assets/grid_connected.gif" alt="pv system diagram" />
            </a>
          </section>


        </div>
      </div>
    )
  }

export default Home;

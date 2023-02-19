import React from 'react';
import { Outlet} from 'react-router-dom';
import NavButton from './styles/NavButton';
import './styles/home.css';

function Root() {
  
    return (
      <div className="pv-system-app">

        <div className="header">

            <div className="sun-logo"><h3>PV S<img src='/assets/sunlogo.gif' alt="sun logo" />lar System</h3></div>
        </div>
        <div>
            <div className="nav-container">
                <NavButton text='Home' url='/pv-system'></NavButton>
                <NavButton text='System Yield' url="/pv-system/system_output"></NavButton>
                <NavButton text='Energy Use Calc' url="/pv-system/e_use_calc"></NavButton>
            </div>
        <div>
            <Outlet />
        </div>
        </div>
      </div>

    )
}

export default Root;

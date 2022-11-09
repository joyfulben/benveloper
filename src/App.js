import React from 'react';
import './App.css';
import Body from './components/Body';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { HeadNav } from './components/HeadNav';
import { NavBar } from "./components/NavBar";
import $ from 'jquery';

export default function App () {

      
      $(document).ready(function() {
        $('a[href*=\\#]').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
            scrollTop : $(this.hash).offset().top
          }, 500);
        });
        
      });
    
    return (
      
        <div className="App">
          <header>
            <HeadNav></HeadNav>
          </header>
          <nav>
            <NavBar />
          </nav>
          <Body />
          <About />
          <Projects />
          <Resume />
        </div>
    );
  
}

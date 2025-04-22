import React, {useState} from 'react';

import { homeobjOne} from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/Index';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import OtherSection from '../components/OtherSection';
import Team from '../components/Team/Team';
import Footer from '../components/Footer';
import Time from '../components/Timeline/Timeline';

import HeroSection1 from '../components/Hero2';
///import Ml from '../videos/ml.mp4';
import Ml from '../gifs/ml.gif';
import "./Preloader.css";
import Carousel from '../components/Synths/Carousel';
import { useEffect } from 'react';
import Accordion from '../components/FAQ/accordion';

import { VideoBg1 } from '../globalStyles';



const Home = () => {
    const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 5000);
  }, []);
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
      setTimeout(() => {
          setTimedPopup(true);
      }, 18000);
    }, []);
  const [ setTimedPopup] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>LOADING...</span>
              <div className="half-spinner">
                  <VideoBg1  src={Ml} />
              </div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
            
          )}
        </>
      ) : (
        <>
          <>
        
      
        
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>
         <HeroSection1 />
        
         <InfoSection {...homeobjOne}/>
         <Team/>
        <Carousel/>
         <Accordion />
         <Time />
         <OtherSection />
         <Footer />
         
         </>
        </>
      )}
    </>
  );
}

export default Home;

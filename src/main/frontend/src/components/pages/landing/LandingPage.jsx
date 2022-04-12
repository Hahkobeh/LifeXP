import Navbar from '../../Navbar';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { useEffect } from 'react';


function LandingPage(){

    useEffect( ()=> {
        localStorage.clear();
    }, []);
    return(
        <div>
            <Navbar/>
            
            <Main/>
            <About/>
            <Testimonials/>
            <Contact/>
            
        </div>
    )
}

export default LandingPage;
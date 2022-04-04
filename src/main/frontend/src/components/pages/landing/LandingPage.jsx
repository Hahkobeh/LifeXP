import Navbar from '../../Navbar';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Testimonials from './Testimonials';


function LandingPage(){
    return(
        <div>
            <Navbar/>
            
            <Main/>
            <About/>
            <Contact/>
            
        </div>
    )
}

export default LandingPage;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import car from './images/type gadget net 2 u Bmw Wallpaper Free Wallpaper Desktop Background.jpg';
// import race from './wallpaperflare.com_wallpaper.jpg';
import race from './images/Bmw Wallpaper Black 6221 Hd Wallpapers in Cars   Imagescicom.jpg';
import tea from './images/vecteezy_bmw-logo-on-transparent-background_14414713.jpg';
// import logo from './pexels-maria-geller-2127039.jpg';
import rage from './images/exlm-07-media-wide.jpg';
import a from './images/exlm-05-media-hd1.jpg';
import ride from './images/exlm-11-media-hd.jpg';
import { Carousel } from 'react-bootstrap';
import red from './images/exlm-08-media-hd.jpg';
import Magazine from './Magazine';
import Navbar from './Navbar.js';
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (

    <div className="Sub">

      <Navbar />
      <Routes>
        <Route path="/Magazine" element={<Magazine/>} />
      </Routes>


      <div className='demo' >
        <p className='graph'>Blue, purple, red:a<br></br>
          history of the BMW<br></br>
          M logo
        </p>
      </div>
      <Magazine />
      <div className='cont'>
        <img src={car} className="ground" ></img>
        <div className='fluid'>
          <h2> Always stay up to date
          </h2><br></br>
          <p>Innovative mobility, exciting trends for the future and high <br></br>RPMs:Subscribe now to get notified of new content.</p>
          <button>Activate</button>
        </div>
      </div>
      <div className='demo2'>
        <p>That the “M” of BMW M originally stood for “motorsport” is well known<br></br> among car aficionados. But where did BMW’s sporty offshoot get its<br></br> colors? Bavarian blue may be obvious because of the color of the BMW<br></br> logo design (➜ Read more:The history of the BMW logo), but where do the<br></br> red and violet come from? And how did the M logo come about? We delve<br></br> into the BMW Group archives to find out.</p>
      </div>
      <div className='pic'>
        <img src={tea} className="ground" ></img>
      </div>
      <div className='demo3'>
        <p>&copy;BMW Group Archiv</p>
        <p className='back'>BMW M Logo Motorsport (1973)</p>
      </div>

      <div className='app'>
        <img src={race} className="grou" ></img>
        <div className='demo1'>
          <h2> HOW DOES THIS SOUND?
          </h2><br></br>
          <p>You can also listen to this article via Changing Lanes,<br></br> the official BMW podcast.<br></br> Apart from this and other narrated articles,<br></br> Changing Lanes offers you fresh new episodes every week,<br></br> packed with exclusive insights on tech,<br></br> lifestyle, design, cars, and more – brought to you by hosts Sara and Jonathan.<br></br>X Find and subscribe to Changing Lanes on all major podcasting platforms.</p>
        </div>
      </div>
      <div className='container'>
        <div className='push'>
          <img src={rage} className="name"></img>
          {/* <div className='q'>
          <img src={rage} width="100%" height="100%"></img>
        </div>
        <div className='w'>
          <img src={rage} width="50%" height="100%"></img>
        </div> */}
        </div>
      </div>
      <div className='container'>
        <div className='subject'>
          <h2> BMW M GmbH colors, the result of a<br></br> collaborative project
          </h2><br></br>
          <p>Every great success story has a myth attached to it, and the same is true<br></br> for the BMW M logo and colors. The following BMW staff were involved in <br></br>selecting the colors for the design of the motorsport division at BMW in<br></br> 1972: Jochen Neerpasch (then race director and co-managing director of <br></br>BMW Motorsport GmbH), Wolfgang Seehaus (then BMW interior designer),<br></br> and Manfred Rennen (then BMW exterior designer).</p>
        </div>
      </div>
      {/* <div className='container'>
        <div className='subject1'>
          <h6>BMW M GmbH was founded in 1972 as a business unit for the sporty products of the BMW brand. At that time the official name was still BMW Motorsport GmbH. It wasn't until 1993 that it became BMW M GmbH.
          </h6><br></br>
          <p>The newly created sports car division was meant to combine and professionalize BMW’s racing activities under a single, unified corporate identity. The unifying element for all of this was to be a crisp color scheme.Designer Seehaus was part of the team in charge of it, and he was the one who created the BMW M colors of blue, violet and red..</p>
        </div>
      </div> */}

      <div className='subject2'>
        <h2>“Blue stands for BMW, red for motorsport and violet for the unique combination of the two.”
        </h2>
      </div>
      <div className='pop'>
        <img src={a} className="po"></img>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className='slide'>
            <img src={ride} width="100%" height="10%"></img>
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className='slide'>
            <img src={red} width="100%" height=""></img>
          </div>
        </Carousel.Item>
      </Carousel>


      <div className='footer'>

        <ul>
          <h5>Quick Links</h5>
          <li><a href="#">Home</a></li>
          <li><a href="#">BMW in your country</a></li>
          <li><a href="#">BMW Group Careers</a></li>
          <li><a href="#">EU Detergents Regulation</a></li>
          <li><a href="#">REACH Regulation</a></li>
          <li><a href="#">REACH Regulation</a></li>
          <li><a href="#">Software Update</a></li>
          <li><a href="#">Accessories Update</a></li>
          <li><a href="#">Connected Test Vehicle</a></li>
          <li><a href="#">Service Page Charging Products</a></li><br></br><br></br>
          <div className='demo3'>
            <p>&copy;BMW Group Archiv</p>
          </div>
        </ul>

        <div className='fluid'>

          <ul>
            <h5>
              More BMW Websites</h5>
            <li><a href="#">BMW M</a></li>
            <li><a href="#">BMW Motorsport</a></li>
            <li><a href="#">BMW Motorsport</a></li>
            <li><a href="#">BMW Driving Experience</a></li>
            <li><a href="#">BMW Welt</a></li>
            <li><a href="#">BMW Group Classic</a></li>
            <li><a href="#">BMW Corporate/Direct Sales</a></li>
          </ul>

        </div>
        <div className='fluid'>
          <ul>
            <h5>BMW.com</h5>
            <li><a href="#">About BMW.com</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#"> Cookies</a></li>
            <li><a href="#">Imprint</a></li>
            <li><a href="#">Legal Notice / Data protection</a></li>
          </ul>
        </div>
        {/* <div className='fluid'>
          <ul>
            <h5>Visit us on</h5>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#"> Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div> */}

      </div>

    </div>


  );
}
export default App;
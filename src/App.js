import './App.css';
import jacob from './img/jacob.jpg';
import jaiwoo from './img/jaiwoo.jpg';
import nekog from './img/nekog.jpg';
import cruz from './img/cruz.png';
import actii from './img/actii.jpg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to Jacob's</p>
        <p id='Header-title'>kandii.club</p>
      </header>

      <img className='Header-img' src={jacob} alt='jacob'></img>

      <p className='Section-header'>
        Sat. Feb. 19th 2022 <br></br> 10p - 4a
      </p>

      <div className='Text-container'>
        <p>
          Before our boy moves forward into his 30s we're throwing it back for
          an early 2010's-style Rave and YOUR'RE invited!
        </p>
        <p>
          Think kandi bracelets, fuzzy leg warmers, outrageous costumes, and all
          neon everything. We'll have Secret Loft all to ourselves and will have
          some of our beloved DJ friends spinning the finest bangers of the era
          + some surprises!
        </p>
      </div>
      <p className='Section-header'>Your Throwback Curators</p>
      <div className='Talent-card'>
        <img className='Talent-img' id='jaiwoo-img' src={jaiwoo} alt=''></img>
        <p>Jaiwoo</p>
      </div>
      <div className='Talent-card'>
        <img className='Talent-img' id='cruz-img' src={cruz} alt=''></img>
        <p>Cruz Cruz</p>
      </div>
      <div className='Talent-card'>
        <img className='Talent-img' id='actii-img' src={actii} alt=''></img>
        <p>Act II</p>
      </div>
      <div className='Talent-card'>
        <img className='Talent-img' id='nekog-img' src={nekog} alt=''></img>
        <p>Neko G</p>
      </div>
      <p className='Section-header'>Get Hype!</p>
      <iframe
        title='spotify'
        src='https://open.spotify.com/embed/playlist/7qyfH51AhGM5YEVjEgBtMF?utm_source=generator'
        width='100%'
        height='380'
        frameBorder='0'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      ></iframe>
      <p className='Section-header'>Location</p>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0753001586595!2d-74.0005315840398!3d40.738368579329155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aaebe3a5fb%3A0xfdaf0dfc0a2978a6!2sSecret%20Loft!5e0!3m2!1sen!2sus!4v1642290346333!5m2!1sen!2sus'
        width='100%'
        height='450'
        allowfullscreen=''
        loading='lazy'
      ></iframe>
      <footer>Created by Jaiwoo</footer>
    </div>
  );
}

export default App;

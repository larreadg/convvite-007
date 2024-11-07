import fiesta from '../assets/images/fiesta.png'
import { redirectToGoogleMaps } from '../utils'

export function Fiesta() {

    return (
      <>
        <section className="fiesta">      
            <section>
                <img className='fiesta__icon' src={fiesta} alt="Fiesta" />
            </section>
            <section>
                <p className="fiesta__titulo neon">Fiesta</p>
            </section>
            <section>
                <p className="fiesta__nombre">Quinta Javy'aha</p>
                <p className="fiesta__nombre">21:00 hs</p>
            </section>
            <section>
            <button className='fiesta__btn' onClick={() => redirectToGoogleMaps('https://maps.app.goo.gl/wdJfXuLj4SgrGfgaA')}>VER UBICACIÓN</button>
            </section>
        </section>
      </>
    )
  }
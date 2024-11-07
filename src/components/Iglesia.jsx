import church from '../assets/images/church.png'
import { redirectToGoogleMaps } from '../utils'

export function Iglesia() {

    return (
      <>
          <section className="iglesia">
              <section>
                  <img className='iglesia__icon' src={church} alt="Iglesia" />
              </section>
              <section>
                  <p className="iglesia__titulo neon">Misa</p>
              </section>
              <section>
                  <p className="iglesia__nombre">Catedral Inmaculada Concepción</p>
                  <p className="iglesia__nombre">19:00 hs</p>
              </section>
              <section>
                <button className='iglesia__btn' onClick={() => redirectToGoogleMaps('https://maps.app.goo.gl/hKRnLkXHSf1TmRfZ7')}>VER UBICACIÓN</button>
              </section>
          </section>
      </>
    )
  }
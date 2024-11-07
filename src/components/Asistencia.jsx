import check from '../assets/images/check.png'
import { redirectToGoogleMaps } from '../utils'
import PropTypes from 'prop-types'

function Asistencia({ nroLinea }) {

    return (
      <>
        <section className="fiesta">      
            <section>
                <img className='fiesta__icon' src={check} alt="Fiesta" />
            </section>
            <section>
                <p className="fiesta__titulo neon">Asistencia</p>
            </section>
            <section>
                <p className="fiesta__nombre">Confirmar antes del 20 de Noviembre</p>
            </section>
            <section>
            <button className='fiesta__btn' onClick={() => redirectToGoogleMaps(`https://wa.me/${nroLinea}?text=${encodeURIComponent('Hola, quiero confirmar mi presencia para el 15 años de Maria Irene')}`)}>CONFIRMAR ASISTENCIA</button>
            </section>
        </section>
      </>
    )
}

Asistencia.propTypes = {
    nroLinea: PropTypes.string.isRequired,
}
  
export default Asistencia
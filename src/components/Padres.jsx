import padresImg from '../assets/images/padres.png'

export function Padres() {

  return (
    <>
        <section className="padres">
            <section>
                <img className='padres__icon' src={padresImg} alt="Padres" />
            </section>
            <section>
                <p className="padres__titulo neon">Mis padres</p>
            </section>
            <section>
                <p className="padres__p">Lilian Cáceres</p>
            </section>
            <section>
                <p className="padres__p">Toribio Morel</p>
            </section>
        </section>
    </>
  )
}
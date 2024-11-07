import DownCounter from "./Downcounter";
import bolaDisco from "../assets/images/bolas_disco.png";

export function Portada() {
    return (
        <>
            <section className="portada bg-neutral-950">
                <img className="portada__body__img" src={bolaDisco} alt="Bola Disco" />
                <section className="portada__body">
                    <section>
                        <p className="portada__body__xv">Mis XV</p>
                    </section>
                    <section>
                        <p className="portada__body__nq neon">Maria Irene</p>
                    </section>
                    <section>
                        <p className="portada__body__msg">Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón quiero que compartas conmigo este día tan especial</p>
                    </section>
                    <section>
                        <DownCounter fecha="2024-12-06"/>
                    </section>
                </section>
            </section>
        </>
    )
}
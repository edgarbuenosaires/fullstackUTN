import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (

        <main className="holder">
            <div className="homeing">
                <img src="images/hombre_pesas.jpg" alt="Pesas" />
                <img src="images/mujer_yoga.jpg" alt="Yoga" />
                <img src="images/running.jpg" alt="Running" />
            </div>
            <div className="bienvenida">
                <h2>ponte en forma con nosotros</h2>
            </div>

            <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <img src="images/perfil.jpg" alt="Francisco Gimenez" />
                    <div className="info">
                        <h5>Francisco Gimenez</h5>
                        <p>Desde que entre a DesarrolloFIT mi vida cambio 180 grados.</p>
                    </div>
                </div>
                <div className="testimonio">
                    <img src="images/perfil.jpg" alt="Paola Gutierrez" />
                    <div className="info">
                        <h5>Paola Gutierrez</h5>
                        <p>Amo mi plan de alimentacion y ejercicios de DesarrolloFIT.</p>
                    </div>
                </div>
                <div className="testimonio">
                    <img src="images/perfil.jpg" alt="Julieta Lema" />
                    <div className="info">
                        <h5>Julieta Lema</h5>
                        <p>A las dos semanas de comenzar a entrenar comence a ver los cambios fabulosos en mi cuerpo.</p>
                    </div>
                </div>
                <div className="testimonio">
                    <img src="images/perfil.jpg" alt="Marcelo Perez" />
                    <div className="info">
                        <h5>Marcelo Perez</h5>
                        <p>Soy una persona diferente desde que me alimento y entreno con DesarrolloFIT.</p>
                    </div>
                </div>
            </div>
        </main>

    );
}
export default HomePage;
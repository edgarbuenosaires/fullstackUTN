import React from "react";
import '../styles/components/pages/ActividadesPage.css';

const ActividadesPage = (props) => {
    return (
        <main className="holder">
            <div className="actividades">
                <h2>Nuestas Actividades</h2>

                {/* <<<Nutricion>>> */}
                <div className="actividad">
                    <img src="images/actividad_nutricion.jpg" alt="Nutricion" />
                    <div className="info">
                        <h4>Nutricion</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis saepe quaerat sit suscipit dolorum tenetur explicabo nobis, aliquam inventore quibusdam eos laboriosam totam praesentium eiuseveniet vitae.Architecto, sed voluptate.</p>
                    </div>
                </div>

                {/* <<<Running>>> */}
                <div className="actividad">
                    <img src="images/actividad_running.jpg" alt="Running" />
                    <div className="info">
                        <h4>Running</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis saepe quaerat sit suscipit dolorum tenetur explicabo nobis, aliquam inventore quibusdam eos laboriosam totam praesentium eius eveniet vitae.Architecto, sed voluptate.</p>
                    </div>
                </div>

                {/* <<<Musculacion>>> */}
                <div className="actividad">
                    <img src="images/actividad_musculacion.jpg" alt="Musculacion" />
                    <div className="info">
                        <h4>Musculacion</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis saepe quaerat sit suscipit dolorum tenetur explicabo nobis, aliquam inventore quibusdam eos laboriosam totam praesentium eius eveniet vitae.Architecto, sed voluptate.</p>
                    </div>
                </div>

                {/* <<<Yoga>>> */}
                <div className="actividad">
                    <img src="images/actividad_yoga.jpg" alt="Yoga" />
                    <div className="info">
                        <h4>Yoga</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis saepe quaerat sit suscipit dolorum tenetur explicabo nobis, aliquam inventore quibusdam eos laboriosam totam praesentium eius eveniet vitae.Architecto, sed voluptate.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ActividadesPage;
import React from "react";

const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="hostoria">
                <h2>Hostoria</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis reiciendis quam atque fuga quod?
                    Id obcaecati tempora optio sunt quia. Aperiam amet vel quaerat exercitationem, delectus minus. Saepe,
                    cumque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum ad suscipit corporis, magnam
                    debitis nemo! Nulla, aspernatur eaque! Porro excepturi ut aut necessitatibus illum maiores eum expedita,
                    vitae minus?</p>
            </div>
            <h2>Staff</h2>
            <div className="personas">

                {/* Persona 1 */}
                <div className="persona">
                    <img src="images/nosotros/nosotros1.jpg" width="75" alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo nesciunt qui vitae officia
                        accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                        nulla autem magnam?Deleniti!</p>
                </div>

                {/* Persona 2 */}
                <div className="persona">
                    <img src="images/nosotros/nosotros2.jpg" width="75" alt="Diana Reyes" />
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo nesciunt qui vitae officia
                        accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                        nulla autem magnam?Deleniti!</p>
                </div>

                {/* Persona 3 */}
                <div className="persona">
                    <img src="images/nosotros/nosotros3.jpg" width="75" alt="Roberto Zaptos" />
                    <h5>Roberto Zaptos</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo nesciunt qui vitae officia
                        accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                        nulla autem magnam?Deleniti!</p>
                </div>

                {/* Persona 4 */}
                <div className="persona">
                    <img src="images/nosotros/nosotros4.jpg" width="75" alt="Sandra Mastropiero" />
                    <h5>Sandra Mastropiero</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo nesciunt qui vitae officia
                        accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                        nulla autem magnam?Deleniti!</p>
                </div>

                {/* Persona 5 */}
                <div className="persona">
                    <img src="images/nosotros/nosotros5.jpg" width="75" alt="Luciano Figuero" />
                    <h5>Luciano Figuero</h5>
                    <h6>Gerente de Logistica</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo nesciunt qui vitae officia
                        accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                        nulla autem magnam?Deleniti!</p>
                </div>

            </div>

        </section>
    );
}
export default NosotrosPage;
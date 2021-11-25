import React from "react";
import '../styles/components/pages/StaffPage.css';

const StaffPage = (props) => {
    return (
        <main className="holder">
            <div className="staff">
                <h2>El Staff de DesarrolloFIT</h2>
                <div className="entrenadores">
                    <div className="entrenador">
                        <img src="images/edgardo.jpg" alt="Edgardo" />
                        <h5>Edgardo</h5>
                        <h6>Experto Front Corporal</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt qui vitae officia
                            accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                            nulla autem magnam? Deleniti!</p>
                    </div>

                    <div className="entrenador">
                        <img src="images/gabriel.jpg" alt="Gabriel" />
                        <h5>Gabriel</h5>
                        <h6>Expero Back Corporal</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo nesciunt qui vitae officia
                            accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                            nulla autem magnam?Deleniti!</p>
                    </div>

                    <div className="entrenador">
                        <img src="images/aguirre.png" alt="Aguirre" />
                        <h5>Aguirre</h5>
                        <h6>Full Stack Cuerpo y Mente</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo nesciunt qui vitae officia
                            accusantium ipsum quis, fugiat deserunt, dolorum ex cum neque reiciendis suscipit voluptates vel
                            nulla autem magnam?Deleniti!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default StaffPage;
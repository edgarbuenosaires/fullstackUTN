import React from "react";

import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam temporibus minus obcaecati enim fugit ex
                        repellendus iure consectetur inventore, maxime dolores! Nesciunt earum neque doloribus facere quo
                        iure quaerat voluptate?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum, aliquid impedit aut in,
                        consequatur magnam nesciunt asperiores placeat cupiditate earum ut distinctio. Molestiae quae ab
                        ducimus et, mollitia reiciendis?</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;
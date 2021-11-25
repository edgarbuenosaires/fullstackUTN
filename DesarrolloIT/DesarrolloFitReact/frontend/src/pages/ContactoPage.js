import React from "react";
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Comunicate con nosotros</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email" />
                    </p>
                    <p>
                        <label for="">Telefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="comentario">Comentario</label>
                        <textarea id="comentario"></textarea>
                    </p>

                    {/* OJO ACA ESTE CLASSNAME */}
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div class="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien se pueden comunicar con nosotros ...</p>
                <ul>
                    <li>Telefono: 0303-456</li>
                    <li>Email: <a href="mailto:info@desarrolloit.com.ar">info@desarrolloit.com.ar</a></li>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li>Skype: <a href="skype:desarrollofit?call">desarrollofit</a></li>
                </ul>
            </div>
        </main>
    );
}
export default ContactoPage;
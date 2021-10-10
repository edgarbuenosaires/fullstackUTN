import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                    </p>

                    <p>
                        <label>Email</label>
                        <input type="text" name="email" />
                    </p>

                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" />
                    </p>

                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>

                    <p className="centrar"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medias:</p>
                <ul>
                    <li>Telefono:123456789</li>
                    <li>Email: info@transportex.com</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
    );
}
export default ContactoPage;
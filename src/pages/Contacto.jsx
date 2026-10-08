function Contacto() {
    return (
        <section className="contact-section">
            <form action="#" method="POST">
                <div className="form-group">
                    {/* Cambiamos 'for' por 'htmlFor' */}
                    <label htmlFor="name">Nombre completo</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="tunombre@ejemplo.com" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone" placeholder="+54 11 1234-5678" required />
                </div>

                <div className="form-group">
                    <label htmlFor="reason">Motivo de contacto</label>
                    {/* Usamos defaultValue en el select en lugar de 'selected' en el option */}
                    <select id="reason" name="reason" defaultValue="" required>
                        <option value="" disabled>Seleccioná una opción</option>
                        <option value="reserva">Pedido de Amigurumis</option>
                        <option value="eventos">Pedido de Prendas</option>
                        <option value="trabajo">Pedido de Accesorios</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <fieldset>
                    <legend>¿Ya conocías nuestro sitio?</legend>
                    <div className="radio-group">
                        <div>
                            <input type="radio" id="first-yes" name="first-visit" value="si" required />
                            <label htmlFor="first-yes">Sí</label>
                        </div>
                        <div>
                            <input type="radio" id="first-no" name="first-visit" value="no" required />
                            <label htmlFor="first-no">No</label>
                        </div>
                    </div>
                </fieldset>

                <div className="form-group">
                    <label htmlFor="comment">Mensaje</label>
                    <textarea id="comment" name="comment" placeholder="Contanos en qué te podemos ayudar..." required></textarea>
                </div>

                <div className="form-buttons">
                    <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                    <button type="reset" className="btn btn-secondary">Limpiar formulario</button>
                </div>
            </form>
        </section>
    );
}

export default Contacto;
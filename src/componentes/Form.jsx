import "../estilos/form.css"
export function Form(){
    return <form id="form" className="form">
        <h1>Registrate</h1>
        <div>
            <input type="text" placeholder="Ingresa tu nombre" required/>
            <input type="text" placeholder="Ingresa tu apellido" required/>
            <input type="email" placeholder="Ingresa tu email" required />
            <input type="password" placeholder="Ingresa tu contraseña" required/>
            <button type="submit">Enviar</button>
        </div>
    </form>
}
import "../estilos/login.css"
export function Login(){
    return <form className="container-login">
        <h1>Ingresa</h1>
        <div>
            <input type="text" placeholder="Usuario" required/>
            <input type="password" placeholder="Contraseña" required/>
            <button type="submit">Ingresar</button>
        </div>
    </form>
}
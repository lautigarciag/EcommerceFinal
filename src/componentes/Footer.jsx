import { FaGithub } from "react-icons/fa";
import "../estilos/footer.css";
export function Footer() {
  return (
    <footer>
      <div className="container-foot">
      <div>
        <h2>Redes sociales</h2>
        <a href="https://github.com/" target="__BLANK"><FaGithub /></a>
      </div>
        <p>Sitio web con copyright / Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

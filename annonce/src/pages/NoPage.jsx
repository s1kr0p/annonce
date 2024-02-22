import "../styles/nopage.css";
import { useNavigate } from "react-router-dom";


export default function NoPage(){
  const navigate = useNavigate()

  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">4</span>
          <span className="fade-in" id="digit2">0</span>
          <span className="fade-in" id="digit3">4</span>
        </h1>
        <h3 className="fadeIn">PAGE NON TROUVEE</h3>
        <button onClick={() => navigate("/")} type="button" name="button">Retour à la page d'accueil</button>
      </div>
    </div>
  )
}


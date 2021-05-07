import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div className="HomePage">
      <Title title="Home of beer" />

      <Link className="to-beer-link" to="/Articles">
        Find Beer Here!
      </Link>
    </div>
  );
}

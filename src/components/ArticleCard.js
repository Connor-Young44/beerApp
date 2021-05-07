import "./ArticleCard.css";
import { Link } from "react-router-dom";
export default function ArticleCard(beer) {
  //console.log(article.webUrl);
  //console.log(beer);

  return (
    <div className="article-card">
      <h3 className="card-header">{beer.beer.name}</h3>
      <img
        style={{
          display: "block",
          maxWidth: "100%",
          maxHeight: "20rem",
          margin: "auto",
        }}
        alt="some type of beer"
        src={beer.beer.image_url}
      />
      <p className="tagline">{beer.beer.tagline} </p>
      <Link className="link-to-beer" to={`/Details/${beer.beer.id}`}>
        Learn More!!
      </Link>
    </div>
  );
}

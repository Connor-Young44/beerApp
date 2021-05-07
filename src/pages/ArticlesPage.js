import axios from "axios";
import Title from "../components/Title";
import "./ArticlesPage.css";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";
export default function ArticlesPage() {
  const [state, setState] = useState([]);
  const [searching, setSearch] = useState({ status: "idle" });

  //load page 1
  const page1 = async () => {
    if (state === []) {
      return;
    }
    setSearch({ status: "Loading" });
    const reply = await axios.get(
      `https://api.punkapi.com/v2/beers?page=1&per_page=20`
    );
    setState(reply.data);
    //console.log("Successs!", state, searching);
    setSearch({ status: "done" });
    //console.log(state.id);
  };
  //load page 2
  const page2 = async () => {
    if (state === []) {
      return;
    }
    setSearch({ status: "Loading" });
    const reply = await axios.get(
      `https://api.punkapi.com/v2/beers?page=2&per_page=20`
    );
    setState(reply.data);
    //console.log("Successs!", state, searching);
    setSearch({ status: "done" });
    //console.log(state.id);
  };

  //load page 3
  const page3 = async () => {
    if (state === []) {
      return;
    }
    setSearch({ status: "Loading" });
    const reply = await axios.get(
      `https://api.punkapi.com/v2/beers?page=3&per_page=20`
    );
    setState(reply.data);
    //console.log("Successs!", state, searching);
    setSearch({ status: "done" });
    //console.log(state.id);
  };
  //load page 4
  const page4 = async () => {
    if (state === []) {
      return;
    }
    setSearch({ status: "Loading" });
    const reply = await axios.get(
      `https://api.punkapi.com/v2/beers?page=4&per_page=20`
    );
    setState(reply.data);
    //console.log("Successs!", state, searching);
    setSearch({ status: "done" });
    //console.log(state.id);
  };
  //load page 5
  const page5 = async () => {
    if (state === []) {
      return;
    }
    setSearch({ status: "Loading" });
    const reply = await axios.get(
      `https://api.punkapi.com/v2/beers?page=5&per_page=20`
    );
    setState(reply.data);
    //console.log("Successs!", state, searching);
    setSearch({ status: "done" });
    //console.log(state.id);
  };

  return (
    <div className="articles-main">
      <Title title="Articles" />
      <button className="page-button" onClick={page1}>
        Page 1
      </button>
      <button className="page-button" onClick={page2}>
        Page 2
      </button>
      <button className="page-button" onClick={page3}>
        Page 3
      </button>
      <button className="page-button" onClick={page4}>
        Page 4
      </button>
      <button className="page-button" onClick={page5}>
        Page 5
      </button>

      {searching.status === "idle" && (
        <p style={{ color: "lime" }} className="beers-text">
          Get Some Beers
        </p>
      )}
      {searching.status === "Loading" && (
        <p style={{ color: "lime" }}>Drinking.....</p>
      )}
      {searching.status === "done" && (
        <div>
          <h2 style={{ color: "lime" }}>BEER!</h2>
          <div className="card-display">
            {state.map((beer) => (
              <ArticleCard key={beer.id} beer={beer} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

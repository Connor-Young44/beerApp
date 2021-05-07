import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DetailsPage() {
  const { id } = useParams();

  const [beerData, setBeerData] = useState("");

  //console.log("render....", beerData);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers/${id}`
      );
      setBeerData(response.data[0]);
    }
    fetchData();
  }, [id]);
  //console.log(beerData);
  return (
    <div className="details-main">
      {beerData ? (
        <div>
          <Title title="Details" />
          <h1 className="details-title">{beerData.name}</h1>
          <img
            className="details-image"
            src={beerData.image_url}
            alt="beer-here"
          />
          <p className="details-desc">
            {beerData.description} <br />
            <br />
            food tips - {beerData.food_pairing}
          </p>
        </div>
      ) : (
        <p>Loadind.....</p>
      )}
    </div>
  );
}

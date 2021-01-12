import React, { useEffect, useState } from "react";
import PromotionCard from "components/Promotion/Card/card.js";
import axios from "axios";

const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/promotions?_embed=comments")
      .then((respose) => {
        setPromotions(respose.data);
      });
  }, []);

  return (
    <div className="App" style={{ maxWidth: 800, margin: "30px auto" }}>
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion}></PromotionCard>
      ))}
    </div>
  );
};

export default PagesPromotionSearch;

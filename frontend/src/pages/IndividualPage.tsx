import React from "react";
import "../App.css";
import { API_BASE_URL } from "../config";
import firmDetail from "../component/IndividualFirm";
import { useParams } from "react-router-dom";
import { Firm } from "../types";

function IndividualPage() {
  const { id } = useParams();
  const [firm, setFirm] = React.useState<Firm>();

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/investors/${id}`)
      .then((response) => response.json())
      .then((data) => setFirm(data));
  }, [id]);

  return (
    <div className="App">
      <body>{firm && firmDetail({ firm })}</body>
    </div>
  );
}

export default IndividualPage;

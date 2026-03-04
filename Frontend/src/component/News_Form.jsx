import { useState } from "react";
import axios from "axios";

function NewsForm() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkNews = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/predict",
      { text }
    );

    setResult(res.data.prediction);
  };

  return (
    <div>

      <h2>Fake News Detector</h2>

      <textarea
        rows="6"
        onChange={(e) => setText(e.target.value)}
      />

      <br/>

      <button onClick={checkNews}>
        Check News
      </button>

      <h3>{result}</h3>

    </div>
  );
}

export default NewsForm;
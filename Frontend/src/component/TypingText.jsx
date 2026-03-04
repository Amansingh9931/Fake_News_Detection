import { useState, useEffect } from "react";

export default function TypingText({ text }) {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);

    }, 30);

    return () => clearInterval(interval);

  }, [text]);

  return <p className="text-gray-700 mt-2">{displayText}</p>;
}
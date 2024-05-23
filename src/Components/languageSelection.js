import { useState } from "react";
import "../App.css";
import axios from "axios";

function LanguageSelection() {
  const [selected, setSelected] = useState("");
  async function onSelectHandler(e) {
    console.log("selected");
    setSelected(e);
  }

  return (
    <div>
      <div className="textStyle">Select Language</div>
      {LANGUAGES.map((element) => {
        return (
          <div
            className={`languageChip ${
              selected == element.value ? "selected" : ""
            }`}
            key={element.value}
            onClick={() => onSelectHandler(element.value)}
          >
            {element.label}
          </div>
        );
      })}
      <div className="divider"></div>
    </div>
  );
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
];

export default LanguageSelection;

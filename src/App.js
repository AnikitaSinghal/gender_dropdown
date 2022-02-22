import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [gender, setGender] = useState("");
  const [pronounsString, setPronounsString] = useState("");

  useEffect(() => {
    if (gender === "male") {
      setPronounsString("Pronouns are he/his/him");
    } else if (gender === "female") {
      setPronounsString("Pronouns are she/her");
    }
  }, [gender]);

  return (
    <div className="App">
      <select
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option value="">-----</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <h1>{pronounsString}</h1>
    </div>
  );
}

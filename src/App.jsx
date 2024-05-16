import {useState} from 'react';
import Square from "./Square";
import BoardRow from "./BoardRow";
import "./App.css";
import "./styles.css";
import react from "@vitejs/plugin-react-swc";

export default function App() {
  const [value, setValue] = useState(null);

  const changeValue = () => {
    if (value === 'X') {
      setValue("O");
    } else {
      setValue("X");
    }
  }
  return (
    <div onClick={changeValue}>
      <BoardRow>
        <Square display={value}/>
        <Square display={value}/>
        <Square display={value}/>
      </BoardRow>
      <BoardRow>
        <Square display={value}/>
        <Square display={value}/>
        <Square display={value}/>
      </BoardRow>
      <BoardRow>
        <Square display={value}/>
        <Square display={value}/>
        <Square display={value}/>
      </BoardRow>
    </div>
  );
}

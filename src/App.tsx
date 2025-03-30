import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { InputForm } from "./Components/Inputform";

export function App() {
  //----------state--------------------------------
  //開始
  const [startDate, setStartDate] = useState<string>("");

  //終了予定
  const [finishedDate, setFinishedDate] = useState<string>("");

  //Todo入力フォーム
  const [inputTodo, setInputTodo] = useState<string>("");

  //優先度
  const [selectPriority, setPriority] = useState<string>("");

  //----------props--------------------------------
  //優先度選択
  const optionVal = ["高", "中", "低"];

  const funcOnChange = (setState: (val: string) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setState(e.target.value);
    };
  };
  return (
    <>
      {/* inputform */}
      <div className="inputFormContainer">
        <InputForm
          inputTodo={inputTodo}
          onChangeForm={funcOnChange(setInputTodo)}
          optionVal={optionVal}
          selectPriority={selectPriority}
          onChangePriority={funcOnChange(setPriority)}
          startDate={startDate}
          finishedDate={finishedDate}
          onChangeStartDate={funcOnChange(setStartDate)}
          onChangeFinishDate={funcOnChange(setFinishedDate)}
          buttonName="登録"
        />
      </div>

      <div className="addCreateTodoContainer"></div>

      <div className="finishedTodoContainer"></div>
    </>
  );
}

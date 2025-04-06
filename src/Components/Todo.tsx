type TodoProps = {
  startDate: string;
  finishedDate: string;
  inputTodo: string;
  selectPriority: string;
  onClickFinish: () => void;
  buttonName:string;
  buttonName2:string;
};

export const Todo = ({
  startDate,
  finishedDate,
  inputTodo,
  selectPriority,
  buttonName,
  buttonName2,
  onClickFinish,
}: TodoProps) => (
  
  <div className="todoItems">
    <h3>進行中または予定しているTODO</h3>

    <div className="date">
      <p>{startDate}</p>
      <p>～</p>
      <p>{finishedDate}</p>
    </div>
    <div className="todoDetail">
      <p>内容:</p>
      <p style={{ color:
      selectPriority === "高"
        ? "red"
        : selectPriority === "中"
          ? "blue"
          : "black"
    }}> {inputTodo}</p>
        <p>優先度:</p>
        <p style={{ color:
      selectPriority === "高"
        ? "red"
        : selectPriority === "中"
          ? "blue"
          : "black"
    }}>{selectPriority}</p>
     <button onClick={onClickFinish}>{buttonName}</button>
     <button>{buttonName2}</button>
    </div>
  </div>


);

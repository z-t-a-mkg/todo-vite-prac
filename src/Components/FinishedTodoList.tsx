type TodoType = {
    startDate: string;
    finishedDate: string;
    inputTodo: string;
    selectPriority: string;
  };

  type FinishedTodoProps = {
    finishedList: TodoType[];
    onClickRestore: (index: number) => void;
    onClickDelete: (index: number) => void;
    buttonName: string;
    buttonName2: string;
  };

  export const FinishedTodo = ({
    finishedList,
    onClickRestore,
    onClickDelete,
    buttonName,
    buttonName2,
  }: FinishedTodoProps) => {
    return (
      <div className="finishedTodoItems">
        <h3> 完了したTodo</h3>
        {finishedList.length === 0 ? (
          <p>まだ完了したタスクはありません。</p>
        ) : (
          finishedList.map((todo, index) => (
            <div key={index} className="todoItem finished">
              <div className="date">
                <p>{todo.startDate}</p>
                <p>～</p>
                <p>{todo.finishedDate}</p>
              </div>
              <div className="todoDetail">
                <p>内容:</p>
                <p
                  style={{
                    color:
                      todo.selectPriority === "高"
                        ? "red"
                        : todo.selectPriority === "中"
                        ? "blue"
                        : "black",
                  }}
                >
                  {todo.inputTodo}
                </p>
                <p>優先度:</p>
                <p
                  style={{
                    color:
                      todo.selectPriority === "高"
                        ? "red"
                        : todo.selectPriority === "中"
                        ? "blue"
                        : "black",
                  }}
                >
                  {todo.selectPriority}
                </p>
                <button onClick={() => onClickRestore(index)}>{buttonName}</button>
                <button onClick={() => onClickDelete(index)}>{buttonName2}</button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

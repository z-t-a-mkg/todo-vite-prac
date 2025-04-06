import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { InputForm } from './Components/Inputform'
import { Todo } from './Components/Todo'
import { FinishedTodo } from './Components/FinishedTodoList';


type TodoType = {
  startDate: string;
  finishedDate: string;
  inputTodo: string;
  selectPriority: string;
};



export function App() {

//----------state--------------------------------

//inputform
  //開始
  const [startDate, setStartDate] = useState<string>("");

  //終了予定
  const [finishedDate, setFinishedDate] = useState<string>("");

  //Todo入力フォーム
  const [inputTodo, setInputTodo] = useState<string>("");

  //優先度
  const [selectPriority, setPriority] = useState("");

  //登録されたフォーム内容表示
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  //完了されたTodoの処理
  const [finishedTodoList, setFinishedTodoList] = useState<TodoType[]>([]);




//----------props--------------------------------
  //優先度選択
  const optionVal = ['高','中','低'];

  //開始日のdateフォーム処理
  const funcStartDate = () => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
            setStartDate(e.target.value);
    }
  }

  //終了日のdateフォーム処理
  const funcFinishedDate = () => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
              setFinishedDate(e.target.value);
    }
  }


  //inputフォーム処理
  const funcInputTodo = () => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
              setInputTodo(e.target.value);
    }
  }


  //優先度のselect処理
  const funcPriority = () => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
            setPriority(e.target.value);
    }
  }


  //登録ボタンクリック時の処理
  const handleSubmit = () => {
    if (
      !startDate ||
      !finishedDate ||
      !inputTodo.trim() ||
      !selectPriority
    ) {
      alert("すべての項目を入力してください！");
      return;
    }

    const newTodo = {
      startDate,
      finishedDate,
      inputTodo,
      selectPriority,
    };
    setTodoList([...todoList, newTodo]);
    setStartDate("");
    setFinishedDate("");
    setInputTodo("");
    setPriority("");
  };

  //完了ボタンクリック時の処理
  const finishHandleSubmit = (index: number) => {
    const finishedTodoItem = todoList[index];
    const newTodoList = [...todoList];
    newTodoList.splice(index,1);

    setTodoList(newTodoList);
    setFinishedTodoList([...finishedTodoList,finishedTodoItem]);
  };

  //戻すボタンをクリック時の処理
  const restoreHandleSubmit = (index: number) => {
    const restoreTodo = finishedTodoList[index];
    const newFinishedList = [...finishedTodoList];
    newFinishedList.splice(index, 1);

    setFinishedTodoList(newFinishedList);
    setTodoList([...todoList, restoreTodo]);
  };

  // 未完了の削除ボタン
  const deleteTodo = (index:number) => {
    const newList = [...todoList];
    newList.splice(index,1);
    setTodoList(newList);
  }

   // 未完了の削除ボタン
   const finishedDeleteTodo = (index:number) => {
    const newList = [...finishedTodoList];
    newList.splice(index,1);
    setFinishedTodoList(newList);
  }



  return (
    <>
      {/*入力フォームの作成 */}
      <div className='inputFormContainer'>
      <InputForm
        startDate={startDate}
        onChangeStartDate={funcStartDate()}

        finishedDate={finishedDate}
        onChangeFinishDate={funcFinishedDate()}

        inputTodo={inputTodo}
        onChangeForm={funcInputTodo()}

        optionVal={optionVal}
        selectPriority={selectPriority}
        onChangePriority={funcPriority()}
        onClickSubmit={handleSubmit}
        buttonName="登録"

        />
      </div>

      <div className="addCreateTodoContainer">
        <h3>進行中または予定しているTODO</h3>

        {todoList.length === 0 ? (
          <p>登録がありません。</p>
        ) : (
          todoList.map((todo, index) => (
            <Todo
              key={index}
              {...todo}
              onClickFinish={() => finishHandleSubmit(index)}
              onClickDelete={() => deleteTodo(index)}
              buttonName="完了"
              buttonName2="削除"
            />
          ))
        )}
      </div>

      <div className='finishedTodoContainer'>
        <FinishedTodo
        finishedList={finishedTodoList}
        onClickRestore={(index) => restoreHandleSubmit(index)}
        onClickDelete={finishedDeleteTodo}
        buttonName="戻す"
        buttonName2="削除"
        />
      </div>
    </>
  )
}



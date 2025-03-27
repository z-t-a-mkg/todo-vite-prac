import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { InputForm } from './componets/Inputform'


function App() {
  const [count, setCount] = useState(0)



  const optionVal = ['優先度','高','中','低'];


  return (
    <>
    <div className='inputFormContainer'>
      <InputForm  optionVal={ optionVal }/>
    </div>

      <div className='addCreateTodoContainer'>
        <p>○○をする</p>
        <button>編集</button>
        <button>完了</button>
    </div>

      <div className='finishedTodoContainer'>
          <p>○○をした</p>
          <button>戻す</button>
          <button>削除</button>
      </div>




    </>
  )
}

export default App

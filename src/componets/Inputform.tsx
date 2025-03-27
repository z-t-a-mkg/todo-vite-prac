interface Props {
    optionVal: string[];
  }


export const InputForm = ({optionVal,}:Props) =>{

    return(
        <>

            <input type='date'></input>
            <input type='text' placeholder='TODOを入力してください' />
            <select name="" id="">
            {
                optionVal.map(priority =>
                    (
                    <option key={priority}>{priority}</option>
                    )
                )
            }
            </select>
            <button>登録</button>
        </>
    );

}
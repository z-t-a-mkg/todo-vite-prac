interface Props {
    inputTodo: string;
    onChangeForm: React.ChangeEventHandler<HTMLInputElement>;

    optionVal: string[];
    selectPriority: string;
    onChangePriority: React.ChangeEventHandler<HTMLSelectElement>;

    startDate: string;
    finishedDate: string;
    onChangeStartDate: React.ChangeEventHandler<HTMLInputElement>;
    onChangeFinishDate: React.ChangeEventHandler<HTMLInputElement>;

    buttonName:string;
}


export const InputForm = ({
    buttonName,
    optionVal,
    inputTodo,
    onChangeForm,
    selectPriority,
    onChangePriority,
    startDate,
    finishedDate,
    onChangeStartDate,
    onChangeFinishDate,

}:Props) =>{
    return(
        <>
            <div className="flexBox">
                <p>開始日</p>
                <input type="date" value={startDate} onChange={onChangeStartDate}/>
            </div>
            <div className="flexBox">
                <p>終了予定日</p>
                <input type="date" value={finishedDate} onChange={onChangeFinishDate}/>
            </div>
            <input type='text'value={inputTodo} placeholder='入力してください。' onChange={onChangeForm} />
            <select value={selectPriority} onChange={onChangePriority}>
            <option value="" disabled>優先度を選択</option>
            {

                optionVal.map(priority =>
                    (
                    <option  key={priority}>{priority}</option>
                    )
                )
            }
            </select>
            <div>
                <button>{buttonName}</button>
            </div>
        </>
    );

}
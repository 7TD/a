import React from "react";
import axios from "axios";

function PostGet() {
    const [Id, setId] = React.useState(0);
    const [FirstName, setFirstName] = React.useState('');

    const onChangeId = (event: any) => {
        setId(event.target.value);
    };
    const onChangeFirstName = (event: any) => {
        setFirstName(event.target.value);
    };

    const onAddPerson = () => {
        axios.post('', {Id, FirstName});
    };

    return(
        <div>
            <div>
                <input
                    type="text"
                    value={FirstName}
                    onChange={onChangeFirstName}
                    placeholder="FirstName"
                />
                <input
                    type="number"
                    value={Id}
                    onChange={onChangeId}
                    placeholder="Id"
                />
                <button onClick={() => console.log(FirstName, Id)} >Отправить</button>
                <button>Получить</button>
            </div>
            <span>{FirstName}   {Id}</span>
        </div>
    );
}

export default PostGet;
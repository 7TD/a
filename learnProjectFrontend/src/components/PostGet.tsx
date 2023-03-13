import React from "react";
import axios from "axios";

function PostGet() {
    const [Id, setId] = React.useState(0);
    const [FirstName, setFirstName] = React.useState('');
    const [item, setItem] = React.useState({ firstName: '', id: null});
    const [items, setItems] = React.useState([{ firstName: '', id: null }]);

    axios.defaults.headers.post['Content-Type'] = 'application/json';

    const onChangeId = (event: any) => {
        setId(event.target.value);
    };
    const onChangeFirstName = (event: any) => {
        setFirstName(event.target.value);
    };

    const onAddPerson = () => {
        axios.post('https://localhost:44392/api/Person/person', FirstName);
    }
    const onGetPersons = () => {
        axios.get(`https://localhost:44392/api/Person/${Id}`).then((res) => {
            setItem(res.data);
        })
        console.log(item);
        console.log(item.firstName);
        console.log(item.id);
    }
    const onDeletePerson = () => {
        axios.delete(`https://localhost:44392/api/Person/${Id}`);
    }
    const onGetAllPersons = () => {
        axios.get('https://localhost:44392/api/Person').then((res) => {
            setItems(res.data);
        })
    }

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
                <button onClick={onAddPerson} >Отправить</button>
                <button onClick={onGetPersons} >Получить</button>
                <button onClick={onGetAllPersons} >Получить все</button>
                <button onClick={onDeletePerson} >Удалить</button>

            </div>
            <span>{FirstName}   {Id}</span>
            <p>{item.firstName}</p>

            <div>
                {items.map((obj) => (
                    <p>{obj.firstName}  {obj.id}</p>
                ))}
            </div>

        </div>
    );
}

export default PostGet;
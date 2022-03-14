import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch((error) => console.log(error));
    },[]);

    const renderItems = () => users.map((user) => 
        <li key={user.id} onClick={() => navigate(`/${user.id}`, {state: {user}})}>
              {user.name}
        </li>);

    return (users ? <ul>{renderItems()}</ul> : <div>LOADING...</div>)
}

export {UserList};
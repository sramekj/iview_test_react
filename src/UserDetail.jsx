import {useLocation} from "react-router-dom";

const UserDetail = () => {
    const location = useLocation();
    const user = location.state.user;

    return (
        user ?
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
        : <div>LOADING...</div>)
}

export {UserDetail};
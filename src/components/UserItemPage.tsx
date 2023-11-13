import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


type UserItemPageParams = {
    id: string;
}

const UserItemPage:FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate();


    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async() => {
        const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
        setUser(res.data)
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>back</button>
            <h1>Пользователь {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;
import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import {useNavigate} from "react-router-dom";

const UsersPage:FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async() => {
        const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data)
    }

    return (
            <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id} />}/>
    );
};

export default UsersPage;
import Card, {CardVariant} from "./components/Card";
import Events from "./components/Events";
import {NavLink, Route, Routes} from 'react-router-dom'
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


function App() {



  return (
    <div >
        <nav>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
        </nav>
        <Routes>
            <Route path={'/users'} element={<UsersPage />}/>
            <Route path={'/todos'} element={<TodosPage />}/>
            <Route path={'/users/:id'} element={<UserItemPage />}/>
            <Route path={'/todos/:id'} element={<TodoItemPage />}/>
        </Routes>

    </div>
  );
}

export default App;


{/*  <Events />*/}
{/*<Card onClick={(num) => console.log('asdds', num)} variant={CardVariant.outlined} width='200px' height='200px'>*/}
{/*    <button>Btn</button>*/}
{/*    <div>sadasd</div>*/}
{/*</Card>*/}
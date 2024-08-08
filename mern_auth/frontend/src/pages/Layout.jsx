import AppHeader from "../components/AppHeader"
import { Outlet } from "react-router-dom";
import store from '../store';
import { Provider } from 'react-redux';


const Layout = () =>{
    return (
        <div>
            <Provider store={store}>
                <AppHeader />
                <Outlet />
            </Provider>
        </div>
    );
};

export default Layout;
import classes from './MainPage.module.css'
import Header from "./UI/Header/Header.tsx";

const Main = () => {
    return (
        <div className={classes.container}>
            <Header />
        </div>
    );
};

export default Main;
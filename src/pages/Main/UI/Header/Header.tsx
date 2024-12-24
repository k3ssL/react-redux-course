import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.container}>
            <nav>
                <span>О нас</span>
                <span>Меню</span>
                <span>Контакты</span>
                <span>Корзина</span>
            </nav>
        </div>
    );
};

export default Header;
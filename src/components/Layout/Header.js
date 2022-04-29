import koreanDishes from '../../assets/korean-foods.jpg';

import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Bu's Food</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={koreanDishes} alt='a table full of korean dishes!' />
      </div>
    </>
  );
};

export default Header;

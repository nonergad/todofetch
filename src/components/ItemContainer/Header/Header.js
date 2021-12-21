import React from 'react';
import styles from './Header.module.scss'
function Header() {
    return (
        <div className={styles.headerContianer}>
            <h2 className={styles.headerText}>Todo list</h2>
            <button className={styles.addButton}>Add</button>
        </div>
    );
}

export default Header;
import React, {useEffect, useState} from 'react';
import styles from './TaskLine.module.scss'
function TaskLine(props) {
    const [flag, setFlag] = useState(false)

    return (
        <div className={styles.taskLine}>
            <label>
                <input type="checkbox" className={styles.CheckBox} onChange={() => setFlag(!flag)} />
                <span className={styles.BlankCheckBox}></span>
            </label>
            <div className={styles.titleContainer}>
                <p className={flag ? styles.mainTitleChecked : styles.mainTitle }>Первая строка</p>
                <p className={flag ? styles.lowerTitle : styles.lowerTitle }>Вторая строка</p>
            </div>
        </div>
    );
}

export default TaskLine;
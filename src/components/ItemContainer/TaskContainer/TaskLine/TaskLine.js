import React, {useEffect, useState} from 'react';
import styles from './TaskLine.module.scss'
import classNames from "classnames";
function TaskLine(props) {
    return (
        <div className={styles.taskLine} onClick={() => props.changeCompleted(props.data.id)}>
            <label>
                <input type="checkbox"  className={classNames(styles.CheckBox, props.data.completed && styles.activeCheck)} onChange={() => props.changeCompleted(props.data.id)} />
                <div className={styles.BlankCheckBox}></div>
            </label>
            <div className={styles.titleContainer}>
                <p className={props.data.completed ? styles.mainTitleChecked : styles.mainTitle }>{props.data.title}</p>
                {props.data.subtitle && <p className={props.data.completed ? styles.lowerTitleChecked : styles.lowerTitle}>{props.data.subtitle}</p>}
            </div>
        </div>
    );
}

export default TaskLine;
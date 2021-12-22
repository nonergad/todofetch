import React, {useEffect, useState} from 'react';
import TaskLine from './TaskLine/TaskLine.js'
import styles from './TaskContainer.module.scss'
function TaskContainer(props) {
    return (
        <div className={styles.container}>
            {props.data.map((element, index) => {
                return(
                    <TaskLine changeCompleted={props.changeCompleted} key={element ? element.id : index} data={element}/>
                )
            })}
        </div>
    );
}

export default TaskContainer;
import React, {useEffect, useState} from 'react';
import TaskLine from './TaskLine/TaskLine.js'
import styles from './TaskContainer.module.scss'
function TaskContainer(props) {
    let subtitle = props.generateTitle()

    return (
        <div className={styles.container}>
            {props.data.map((element, index) => {
                return(
                    <TaskLine generateTitle={props.generateTitle} changeCompleted={props.changeCompleted} key={element ? element.id : index} data={element}/>
                )
            })}
        </div>
    );
}

export default TaskContainer;
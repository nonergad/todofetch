import React, {useEffect, useState} from 'react';
import TaskLine from './TaskLine/TaskLine.js'
function TaskContainer(props) {
    const [rend, setRend] = useState([])
    useEffect(()=>{
        let arr = [];
        for (let i = 0; i<19; i++){
            arr.push(props.data[i])
        }
        setRend(arr)
    },[])
    return (
        <div>
            {rend.map(element => {
                return(
                    <TaskLine data={element}/>
                )
            })}
        </div>
    );
}

export default TaskContainer;
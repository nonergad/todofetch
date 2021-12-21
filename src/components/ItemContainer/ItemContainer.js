import React, {useEffect, useState}  from 'react';
import styles from './ItemContainer.module.scss'
import Header from "./Header/Header.js";
import TaskContainer from './TaskContainer/TaskContainer.js'

function Main(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
          .then((res) => res.json())
          .then((data) => setData(data))
    },[])

    const generateTitle = () => {
        const rand = Math.floor(Math.random() * 4) + 1;
        if (rand === 1) {
            const randTitle = Math.floor(Math.random() * data.length - 1) + 1;
            return data[randTitle].title
        }
        return false
    }

    return (
        <div className={styles.divContainer}>
            <div className={styles.itemContainer}>
                <Header/>
                <TaskContainer data={data}/>
            </div>
        </div>
    );
}

export default Main;
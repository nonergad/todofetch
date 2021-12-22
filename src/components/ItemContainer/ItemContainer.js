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
          .then(() => addSubtitleData())
    },[])

    const generateTitle = (arr) => {
        const rand = Math.floor(Math.random() * 4) + 1;
        if (rand === 1) {
            const randTitle = Math.floor(Math.random() * data.length - 1) + 1;
            return data[randTitle].title
        }
        return false
    }

    const addSubtitleData = () => {
        let copyData = [...data]
        copyData = copyData.map((elem) => {
            let subtitle = generateTitle()
            if(subtitle){
                elem.subtitle = subtitle
            } else {
                elem.subtitle = ''
            }
        })
        console.log(copyData)
        setData(copyData)
    }

    const changeCompleted = (id) => {
        const copyData = [...data]
        copyData.find((elem) => {
           if(elem.id === id){
               elem.completed  = !elem.completed
           }
        })
        setData(copyData)
    }

    return (
        <div className={styles.divContainer}>
            <div className={styles.itemContainer}>
                <Header/>
                <TaskContainer generateTitle={generateTitle} changeCompleted={changeCompleted}  data={data}/>
            </div>
            <div className={styles.secondBlockBack}/>
            <div className={styles.thirdBlockBack}/>
        </div>
    );
}

export default Main;
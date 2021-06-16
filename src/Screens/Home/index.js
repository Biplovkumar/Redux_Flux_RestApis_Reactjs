import React, { useEffect, useState } from "react";
import { callGetRestApis } from "../../Services/index";
import Config from '../../Utils/Config'


const Home = (props) => {
    const [data, setData] = useState('')
    const Movies = [
        { id: 1, name: 'Reservoir Dogs' },
        { id: 2, name: 'Airplane' },
        { id: 3, name: 'Doctor Zhivago' },
        { id: 4, name: 'Memento' },
        { id: 5, name: 'Braveheart' },
        { id: 6, name: 'Beauty and the Beast' },
        { id: 7, name: 'Seven' },
        { id: 8, name: 'The Seven Samurai' }
    ];
    useEffect(() => {
        callApi()
    }, [])


    const callApi = async () => {
        await callGetRestApis(Config.users)
            .then((res) => {
                setData(res)
                console.log('callApi res :- ', res)
            })
            .catch((error) => {
                console.log('callApi error :- ', error)
                setData(Movies)
            })
    }

    const Item = (item) => { return (<div> <li key={item.id}> {item.name}</li> </div>) }

    const MoviesList = (Movies) => { return (<div><ul>{Movies.map(val => (Item(val)))} </ul> </div>) }

    console.log('Biplov', props);
    console.log('window', window);


    return (
        <>
            <div> <h1>Home...</h1> </div>
            {data && data != '' ? <div> {MoviesList(data)} </div>: null}
        </>
    )
}

export default Home;
import React, { useEffect, useState } from "react";
import AppDispatcher from '../Flux/Dispatcher';
import Store from '../Flux/stores';

const About = (props) => {
   const [data, setData] = useState([{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '52' }])

   useEffect(() => {
      getNewData()
   }, [])


   const getNewData = () => {
      console.log('Biplov', Store.getData());
   }


   const handleClick = () => {
      AppDispatcher.dispatch({
         eventName: 'SaveVal', data: data
      });
   }

   console.log(' Store.getData()', data, Store.getData());
   return (
      <>
      <div> <h1>About...</h1> </div>
      <div>
         <button onClick={handleClick()}>Save flux Data</button>
      </div>
      </>
   )
}


export default About;
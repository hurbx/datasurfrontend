import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import Portada from './Portada';
import {Button} from 'primereact/button';




const Init = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/history');
    }
   return (

       <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', padding: '10rem', marginLeft: 300}}>
           <Portada/>
          <Button onClick={handleOnClick} size={'large'} label="Observar UF" severity="secondary" rounded />
       </div>
   )
}
export default Init;
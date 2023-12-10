import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import Portada from './Portada';
import {Button} from 'primereact/button';




const Init = () => {
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/data/extract/');
            const data = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleOnClick = () => {
        // eslint-disable-next-line no-void
        void fetchData();

        // Esperar 5 segundos antes de navegar , cargando datos
        setTimeout(() => {
            navigate('/history');
        }, 5000);
    }
   return (

       <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', padding: '10rem', marginLeft: 300}}>
           <Portada/>
          <Button onClick={handleOnClick} size={'large'} label="Observar UF" severity="secondary" rounded />
       </div>
   )
}
export default Init;
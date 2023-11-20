import CustomCard from './CustomCard';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';


const Init = () => {
    const[apiData, setApiData] = useState([]);
    const navigate = useNavigate()
    const handleCardClick = (route) => {navigate(route)}

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/data/data/');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        void fetchData();
    }, []);

    console.log(apiData);




    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            gap: 60,
        }}>
            <div onClick={() => handleCardClick('/history')}>
                <CustomCard
                    value={'$29.000'}
                    pos={'left'}
                    title={'DOLLAR'}
                    alt={'dolar'}
                    imagen={'https://www.concierto.cl/wp-content/uploads/2023/09/Precio-del-dolar-en-chile-hoy-7-768x432.webp'}
                />
            </div>

            <div onClick={() => handleCardClick('/history')}>
                <CustomCard
                    value={'$29.000'}
                    pos={'left'}
                    title={'EURO'}
                    alt={'euro'}
                    imagen={'https://www.valor-euro.cl/wp-content/uploads/2019/05/que-es-el-euro.webp'}
                />
            </div>

            <div onClick={() => handleCardClick('/history')}>
                <CustomCard
                    value={'$29.000'}
                    pos={'left'}
                    title={'UF'}
                    alt={'uf'}
                    imagen={'https://www.24horas.cl/24horas/site/artic/20230711/imag/foto_0000000220230711181239/UF-VALOR-CHILE-JULIO-AGOSTO.jpg'}
                />
            </div>

            <div onClick={() => handleCardClick('/history')}>
                <CustomCard
                    value={'$29.000'}
                    pos={'left'}
                    title={'UTM'}
                    alt={'utm'}
                    imagen={'https://www.nostalgica.cl/wp-content/uploads/2023/10/1225196.jpg'}
                />
            </div>
        </div>

    );

}
export default Init;
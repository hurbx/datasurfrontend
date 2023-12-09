import CustomCard from './CustomCard';
import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import {FilterMatchMode} from 'primereact/api';
import {InputText} from 'primereact/inputtext';
import {Card} from 'primereact/card';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import styles from './styles.module.css'
import CustomIndicator from './CustomIndicator';



const Init = () => {
    const[apiData, setApiData] = useState([]);
    const[misc, setMisc] = useState({});
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }});
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        const _filters = { ...filters };

        _filters.global.value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/data/list/');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };
        const fetchMisc = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/data/misc/');
                const data = await response.json();
                setMisc(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }


        };
        // eslint-disable-next-line no-void
        void fetchData();
        // eslint-disable-next-line no-void
        void fetchMisc();
    }, []);
    console.log(misc);
    return (
        <div className={styles.container}>
            <div className={styles.grafico}>hola1</div>
            <div className={styles.indicadora}>
                <CustomCard
                    title={'MAXIMO 2023'}
                    value={misc.max_value}
                />
            </div>
            <div className={styles.indicadorb}>
                <CustomCard
                    title={'PROMEDIO 2023'}
                    value={misc.average_value}
                />
            </div>
            <div className={styles.indicadorc}>
                <CustomCard
                    title={'MINIMO 2023'}
                    value={misc.min_value}
                />
            </div>
            <div className={styles.top}>hola5</div>
            <div className={styles.tabla}>
                <DataTable
                    header={header}
                    value={apiData}
                    paginator rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                    dataKey={'id'}
                    filters={filters}
                    globalFilter={globalFilterValue}
                >
                    <Column field="day" header="Dia" style={{ width: '20%' }} sortable></Column>
                    <Column field="value" header="Valor" style={{ width: '20%' }} sortable></Column>
                    <Column field="month" header="Mes" style={{ width: '20%' }} sortable></Column>
                </DataTable>
            </div>
            <div className={styles.grafico2}>hola7</div>
        </div>
        /* <div style={{ display: 'flex', padding: '4rem', height: '100vh', background:'whitesmoke', alignItems: 'center' }}>
            <div style={{ background:'white',  }}>hola</div>
                <DataTable
                    header={header}
                    value={apiData}
                    paginator rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                    dataKey={'id'}
                    filters={filters}
                    globalFilter={globalFilterValue}
                >
                    <Column field="day" header="Dia" style={{ width: '20%' }} sortable></Column>
                    <Column field="value" header="Valor" style={{ width: '20%' }} sortable></Column>
                    <Column field="month" header="Mes" style={{ width: '20%' }} sortable></Column>
                </DataTable>
        </div> */
    )
}
export default Init;
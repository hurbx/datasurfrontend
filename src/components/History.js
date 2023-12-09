import CustomCard from './CustomCard';
import { React, useEffect, useState } from 'react';
import {FilterMatchMode} from 'primereact/api';
import {InputText} from 'primereact/inputtext';
import {Card} from 'primereact/card';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import styles from './styles.module.css'
import { Chart } from 'primereact/chart';
import { Timeline } from 'primereact/timeline';
import Banner from './Banner';
const History = () => {
    const [chartData, setChartData] = useState([]);
    const [chartData2, setChartData2] = useState({});
    const [chartOptions, setChartOptions] = useState({});
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
        const getChartData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/data/chart/');
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        // eslint-disable-next-line no-void
        void getChartData();
        // eslint-disable-next-line no-void
        void fetchData();
        // eslint-disable-next-line no-void
        void fetchMisc();
    }, []);
    const numerosEnFloat = chartData.map(numero => parseFloat(numero));


    const data5 = {
        labels: ['ENE', 'FEB', 'MAR', 'ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
        datasets: [
            {
                label: 'Valores max UF 2023',
                data: numerosEnFloat,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 159, 64)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }
        ]
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    const events = [
        { status: 'Enero', icon: 'pi pi-check', color: '#a486d7'  },
        { status: 'Febrero', icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Marzo', icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Abril', icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Mayo', icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Junio',icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Julio',icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Agosto',icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Septiembre',icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Octubre',icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Noviembre',icon: 'pi pi-check', color: '#a486d7' },
        { status: 'Diciembre',icon: 'pi pi-check', color: '#c2aee7' }
    ];
    const customizedMarker = (item) => {
        return (
            <span
                style={{
                    backgroundColor: item.color,
                    borderRadius: '50%',
                    height: 40,
                    width:40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <i className={item.icon}></i>
            </span>
        );
    };
    return (
        <div className={styles.container}>
            <div className={styles.grafico}>
                <Card>
                    <Chart type="line" data={data5} options={options} />
                </Card>
                <Card>
                    <DataTable
                        size={'small'}
                        stripedRows
                        header={header}
                        value={apiData}
                        paginator rows={10}
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
                </Card>
            </div>
            <div className={styles.indicadora}>
                <CustomCard
                    title={'MAXIMO 2023'}
                    value={'$'+misc.max_value}
                />
            </div>
            <div className={styles.indicadorb}>
                <Banner
                    title={'PROMEDIO 2023'}
                    value={'$'+misc.average_value}
                />
            </div>
            <div className={styles.indicadorc}>
                <CustomCard
                    title={'MINIMO 2023'}
                    value={'$'+misc.min_value}
                />
            </div>
            <div className={styles.top}>
                <Card>
                    <div style={{ marginBottom: 20 }}>Meses del Año Registrados</div>
                    <Timeline value={events} content={(item) => item.status} marker={customizedMarker} />
                </Card>
                <Card>
                    <div
                        style={{
                            marginBottom: 20,
                            fontWeight: 700,
                            fontSize: 25,

                        }}
                    >
                        Cantidad Registros en Tabla
                        <div
                            style={{
                                marginTop: 51,
                                marginBottom:51,
                                fontWeight: 700,
                                fontSize: 90,
                                textAlign: 'center',
                            }}>{apiData.length}</div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default History;
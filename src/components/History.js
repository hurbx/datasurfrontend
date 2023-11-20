import {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { FilterMatchMode } from 'primereact/api';
const History = () => {
    const[apiData, setApiData] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }});
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

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
                const response = await fetch('http://127.0.0.1:8000/data/data/');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        void fetchData();
    }, []);
    return (
        <Card
            title="Historial de Valores."
            subTitle={'historico'}
            style={{ margin: '300px 50px'}}
        >

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
                <Column field="id" header="Id" style={{ width: '5%' }} sortable></Column>
                <Column field="date" header="Fecha" style={{ width: '20%' }} sortable></Column>
                <Column field="uf" header="UF" style={{ width: '20%' }} sortable></Column>
                <Column field="utm" header="UTM" style={{ width: '20%' }} sortable></Column>
                <Column field="euro" header="Euro" style={{ width: '20%' }} sortable></Column>
                <Column field="dolar_obs" header="Dolar" style={{ width: '35%' }} sortable></Column>
            </DataTable>

        </Card>
    )
}
export default History;
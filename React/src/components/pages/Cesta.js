import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../config/server'
import NavbarMenu from '../layout/NavbarMenu'
import MaterialTable from 'material-table'
import { Button } from 'react-bootstrap'
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'

const Cesta = () => {

    const autenticacionContext = useContext(AutenticacionContext)
    const { usuario } = autenticacionContext

    const columnas = [
        {
            title: 'Producto',
            field: 'nombre'
        },
        {
            title: 'Cantidad',
            field: 'cantidad'
        },
        {
            title: 'Precio',
            field: 'precio'
        },
        {
            title: 'Fecha Inicio',
            field: 'fecha_inicio'
        },
        {
            title: 'Fecha Final',
            field: 'fecha_final'
        }
    ]

    const [cesta, setCesta] = useState([])

    const ListarCestaPorUsuario = async () => {
        const response = await clienteAxios.get(`/cesta/${usuario.id_usuario}`)
        setCesta(response.data.cesta)
    }

    useEffect(() => {
        ListarCestaPorUsuario()
    }, [])

    return (
        <div>
            <NavbarMenu />
            <Button
                variant="primary"
                onClick={ListarCestaPorUsuario}
            >
                Refrescar
            </Button>
            <MaterialTable
                columns={columnas}
                data={cesta}
                title="Cesta"
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar producto de la cesta',
                        onClick: async (e, rowData) => await clienteAxios.delete(`/cesta/${rowData.id_cesta}`) 
                    },
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
            />
        </div>
    )
}

export default Cesta

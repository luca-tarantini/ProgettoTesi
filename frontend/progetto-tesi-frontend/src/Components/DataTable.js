import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'nome', headerName: 'Nominativo', width: 200 },
  { field: 'data', headerName: 'Data', type:'date', width: 200 },
  { field: 'vittoria', headerName: 'Vittoria', type: 'boolean', width: 150 },
  { field: 'tempo', headerName: 'Tempo', width: 130 },
  { field: 'percorso', headerName: 'Percorso', type: 'number', width: 150 }
];


export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.giocatori}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
      />
    </div>
  );
}
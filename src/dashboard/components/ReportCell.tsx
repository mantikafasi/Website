import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

export default function ReportCell(props: any) {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        event.target.checked ? props.addReport(props.report) : props.removeReport(props.report);
    }; 
    
    var rep = props.report;

    return (
        <TableRow>
            <TableCell><Checkbox onChange={handleChange} /></TableCell>
            <TableCell>{rep.reportid}</TableCell>
            <TableCell>{rep.userid}</TableCell>
            <TableCell>{rep.username}</TableCell>
            <TableCell>{rep.reviewid}</TableCell>
            <TableCell>{rep.reporteduserid}</TableCell>
            <TableCell>{rep.comment}</TableCell>
        </TableRow>
    )
}

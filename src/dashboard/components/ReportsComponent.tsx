import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import { getReports } from '../../api/ReviewsAPI';
import { Report } from '../../entities/Report';

export default function ReportsComponent(props:any) {
    const [reports,setReports] = useState<Report[]>()

    useEffect(() => {
        if (reports === undefined) {
            getReports().then(res => {
                setReports(res)
            })
        }
    })
    
    return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Report ID</TableCell>
                    <TableCell>User ID </TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Review ID</TableCell>
                    <TableCell>Reported User ID</TableCell>
                    <TableCell>Comment</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    (reports) ? (reports.map(rep=>
                    <TableRow>
                        <TableCell><Checkbox onChange={(checked)=>(checked) ? props.addReport(rep) : props.removeReport(rep)}/></TableCell>
                        <TableCell>{rep.reportid}</TableCell>
                        <TableCell>{rep.userid}</TableCell>
                        <TableCell>{rep.username}</TableCell>
                        <TableCell>{rep.reviewid}</TableCell>
                        <TableCell>{rep.reporteduserid}</TableCell>
                        <TableCell>{rep.comment}</TableCell>
                    </TableRow>
                        )): (<></>)
                }
            </TableBody>

        </Table>

    </div>
  )
}

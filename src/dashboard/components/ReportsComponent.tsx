import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import { getReports } from '../../api/ReviewsAPI';
import { Report } from '../../entities/Report';
import ReportCell from './ReportCell';

export default function ReportsComponent(props: any) {
    const [reports, setReports] = useState<Report[]>()

    useEffect(() => {
        if (reports === undefined) {
            getReports().then(res => {
                setReports(res)
            })
        }
    }, [])

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
                        !!reports && reports.map(rep =>
                            <ReportCell key={rep.reportid} report={rep} addReport={props.addReport} removeReport={props.removeReport}></ReportCell>
                        )
                    }
                </TableBody>

            </Table>

        </div>
    )
}

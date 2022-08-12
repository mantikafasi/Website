import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function ReviewsComponent() {
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Review ID</TableCell>
                    <TableCell>Review </TableCell>
                    <TableCell>Review</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            
            </TableBody>

        </Table>
    </div>
  )
}

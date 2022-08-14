import React, { useEffect } from 'react'
import { Report } from '../../entities/Report';
import ReportsComponent from '../components/ReportsComponent'
import DeleteDialog from '../dialogs/DeleteDialog';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ReportsPage(props: any) {
  var selectedReports: Report[] = [];

  if (selectedReports.length === 0) {
    props.setShowTrash(false);
  }

  function addReport(report: Report) {
    window.emit("showIcon",
      (<IconButton color="error" onClick={() => {
        props.setDialog(<DeleteDialog closeDialog={props.setDialog}></DeleteDialog>)
      }}>
        <DeleteIcon ></DeleteIcon>
      </IconButton>))

    selectedReports = ([...selectedReports, report]);
  }

  function removeReport(report: Report) {
    selectedReports = (selectedReports.filter(r => r.reportid !== report.reportid));
    if (selectedReports.length === 0) {
      props.setShowTrash(false);
    }
  }

  if (selectedReports.length === 0) {
    props.setShowTrash(false);
  }

  const deleteReports = () => {
    alert("deleteReviews");
  }

  useEffect(() => {
    window.addEventListener("deleteReviews", deleteReports)

    return () => {
      window.removeEventListener("deleteReviews", deleteReports);
    }
  }, [])

  return (
    <div><ReportsComponent addReport={(rep: Report) => addReport(rep)} removeReport={(rep: Report) => removeReport(rep)} /></div>
  )
}

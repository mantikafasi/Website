import { useEffect } from 'react'
import { Report } from '../../entities/Report';
import ReportsComponent from '../components/ReportsComponent'
import DeleteDialog from '../dialogs/DeleteDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { deleteReviews } from '../../api/ReviewsAPI';
import { memo } from "react";

function ReportsPage(props: any) {
  var selectedReports: Report[] = [];

  function addReport(report: Report) {
    (window as any).emit("showIcon",
      (<IconButton color="error" onClick={() => {
        (window as any).emit("showDialog",(<DeleteDialog/>))
      }}>
        <DeleteIcon ></DeleteIcon>
      </IconButton>))

    selectedReports = ([...selectedReports, report]);
  }

  function removeReport(report: Report) {
    selectedReports = (selectedReports.filter(r => r.reportid !== report.reportid));
    if (selectedReports.length === 0) {
      (window as any).e("hideIcon")
    }
  }

  const deleteReports = () => {
    deleteReviews(selectedReports);
    (window as any).emit("showDialog",undefined)
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

export default memo(ReportsPage)
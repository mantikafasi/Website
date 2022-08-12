import React from 'react'
import { Report } from '../../entities/Report';
import ReportsComponent from '../components/ReportsComponent'

export default function ReportsPage(props:any) {
  const [selectedReports, setSelectedReports] = React.useState<Report[]>([]);

  function addReport(report: Report) {
    props.setShowTrash(true);
    setSelectedReports([...selectedReports, report]);
  }
  function removeReport(report: Report) {
    setSelectedReports(selectedReports.filter(r => r.reportid !== report.reportid));
    if (selectedReports.length === 0) {
      props.setShowTrash(false);
    }
  }
  
  if (selectedReports.length === 0) {
    props.setShowTrash(false);
  }

  window.addEventListener("deleteReviews",()=>{
    window.removeEventListener("deleteReviews",()=>{});
    alert("deleteReviews");
  })

  return (
    <div><ReportsComponent addReport={(rep:Report)=>addReport(rep)} removeReport={(rep:Report)=>removeReport(rep)}/></div>
  )
}

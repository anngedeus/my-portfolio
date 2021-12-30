import React from 'react'
import pdf from '../documents/Ann-Kareen-Gedeus-Resume(1).pdf'
import {
    Document,
    Page,
    pdfjs
 } from "react-pdf";
import { makeStyles } from '@material-ui/core';
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 

 const ResumeStyles = makeStyles((theme) => ({
    documentStyle: {
        marginLeft: theme.spacing(50),
    }    

 }));

export default function Resume() {

    const classes = ResumeStyles();

    return (
        <div className={classes.documentStyle}>
            <Document file={pdf}>
                <Page  pageNumber={1}/>
            </Document>
        </div>
    )
}
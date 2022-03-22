import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "../styles/program.css";

import WriteReviews from "./writeReviews";
import baseUrl from "../data/baseApi";


const program = () => {
    const {schoolProgramId} = useParams()
    const [selectedProgram, setSelectedProgram] = useState(null);
    console.log(schoolProgramId);

    useEffect(() => {
        async function getSelectedProgram() {

            const resp = await fetch(`${baseUrl}api/SchoolPrograms/${schoolProgramId}`, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                }
            });

            const data = await resp.json();
            setSelectedProgram(data)
        }
        getSelectedProgram();
    }, [])
    if (selectedProgram) {
        return (
            <div className="selected-program-section">
                <div>{selectedProgram.schoolProgramId}</div>
                <div>{selectedProgram.programName}</div>
                <div>{selectedProgram.programDesc}</div>
                {/* <WriteReviews 
                    selectedProgram={selectedProgram}
                /> */}
                <div key={selectedProgram.schoolProgramId} className="write-review-btn">
                    <Link to={`/programs/${selectedProgram.schoolProgramId}/writeReviews`}>Write reviews</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div>fetching data...</div>
        )
    }
    
}

export default program;
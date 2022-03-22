import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "../styles/program.css";
import baseUrl from '../data/baseApi';
const program = () => {
    const {schoolProgramId} = useParams()
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        async function getSelectedProgram() {
            const resp = await fetch(`${baseUrl}api/schoolprograms/${schoolProgramId}`, {
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
            </div>
        )
    } else {
        return (
            <div>fetching data...</div>
        )
    }
    
}

export default program;
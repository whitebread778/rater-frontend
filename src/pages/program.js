import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "../styles/program.css";

const program = () => {
    const {id} = useParams()
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        async function getSelectedProgram() {
            const resp = await fetch(`https://e801-50-64-177-16.ngrok.io/api/schoolPrograms/${id}`, {
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
                <div>{selectedProgram.id}</div>
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
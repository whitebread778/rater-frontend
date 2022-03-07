import React from 'react';
import { useState, useEffect } from 'react';


const program = (props) => {
    const program = props.program;

    return (
        <div className="program-section">
            <div>ID: {program.id}</div>
            <div>Name: {program.programName}</div>
            <div>Description: {program.programDesc}</div>
        </div>
    )
}

export default program;
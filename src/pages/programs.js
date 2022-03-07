import React from 'react';
import { useState, useEffect } from 'react';
import Program from "../components/program";

const programs = () => {
    const [allPrograms, setAllPrograms] = useState([]);
    const [searchedPrograms, setSearchedPrograms] = useState(null);

    useEffect(() => {
        async function getPrograms() {
            const resp = await fetch('https://e801-50-64-177-16.ngrok.io/api/schoolPrograms', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"    
                }
            });
            const data = await resp.json();
            console.log(data);
            setAllPrograms(data)
        }
        getPrograms();
    }, [])

    const programs = searchedPrograms?
        searchedPrograms.map(program => (
            <div>
                {program.id}
                {program.programName}
                {program.programDesc}
            </div>
        )) :
        allPrograms.map(program => (
            <div>
                {program.id}
                {program.programName}
                {program.programDesc}
            </div>
        ))

    const searchPrograms = (input) => {
        console.log(input);
        const result = allPrograms.filter(program => program.programName.toLowerCase().includes(input));
        setSearchedPrograms(result);
    }

    const searchBar = (
        <div className="search-program-bar">
            <input
                onChange={(e) => searchPrograms(e.target.value)}
                placeholder="Enter program name"
                className="search-program-input"
            />
        </div>
    )



    return (
        <div className="programs-page-wrapper">
            {searchBar}
            <div className="programs-wrapper">
                {programs}
                {/* {
                    allPrograms.map(program => {
                        return <Program
                                    key={program.id}
                                    program={program}/>
                    })
                } */}
            </div>
        </div>
    )
}

export default programs;
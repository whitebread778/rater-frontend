import React from 'react';
import { useState, useEffect } from 'react';
import Program from "./program";

const programs = () => {
    const [programs, setPrograms] = useState([]);

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
            setPrograms(data)
        }
        getPrograms();
    }, [])

    // async function getPrograms() {
    //     const resp = await fetch('api/SchoolPrograms', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "accept": "application/json"
    //         }
    //     });
    //     console.log(resp);
    //     const data = await resp.json();
    //     console.log(data);
    //     this.setState({programs: data, loading: false});
    // }

    return (
        <div>
            {
                programs.map(program => {
                    return <Program
                                key={program.id}
                                program={program}/>
                })
            }
        </div>
    )
}

export default programs;
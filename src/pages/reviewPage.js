import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../styles/reviewPage.css'
import ReviewCard from '../components/reviewCard';
import baseUrl from '../data/baseApi';
import { useParams } from "react-router-dom";

const reviewPage = () => {
    const {schoolProgramId} = useParams()
    const [allReviews, setAllReviews] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        async function getAllReviews() {
            const resp = await fetch(`${baseUrl}api/schoolprograms/${schoolProgramId}/programrates`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"    
                }
            });
            const data = await resp.json();
            console.log(data);
            setAllReviews(data)
        }
        getAllReviews();

        async function getSelectedProgram() {
            const resp = await fetch(`${baseUrl}api/schoolprograms/${schoolProgramId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"    
                }
            });

            const data = await resp.json();
            console.log(data);
            setSelectedProgram(data)
        }
        getSelectedProgram();
    }, [])
    
    if (selectedProgram) {
        return (
            <>
                <div className="selected-program-section">    
                    <h1>This is the review for {selectedProgram.programName} program: </h1>              
                </div>
                <div className="review-page">
                    <div className='review-content-container'>
                        {
                            allReviews.map(review => {
                                return <ReviewCard 
                                        review={review}
                                />
                            })
                        }
                    </div>
                </div>
            </>
        )
    }else {
        return (
            <div>fetching data...</div>
        )
    }
}

export default reviewPage;
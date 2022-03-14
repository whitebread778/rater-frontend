import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/writeReviews.css";
import baseUrl from "../data/baseApi";

const writeReviews = (props) => {
    const selectedProgram = props.selectedProgram;
    const [score, setScore] = useState(0);
    const [review, setReview] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`${baseUrl}api/programrates`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    SchoolProgramId: selectedProgram.SchoolProgramId,
                    RateNumber: Number(score),
                    ProgramReview: review,
                }),
            });
            
            let resJson = await res.json();
            if (res.status === 200) {
                setScore(0);
                setReview("");
                setMessage("Post review successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="write-reviews-wrapper">
            <h2>Write Reviews</h2>
            <form onSubmit={handleSubmit}>
                <label>Score</label>
                <input
                    type="text"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                /><br/>
                <label>Reasons</label>
                <textarea
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default writeReviews;
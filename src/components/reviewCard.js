import React, { useEffect, useState } from "react";
// import { useRouter } from 'next/router';
// import { Route, Routes } from "react-router-dom";


const reviewCard = (props) => {
  const review = props.review;
  // <div>{review.id}</div>
  return (
    <div className="reviewCard">
      <div className="programCard-left">
        <p>
          <b>Star Rating: </b>
          <br />
          {review.rateNumber}
        </p>
      </div>
      <div class="programCard-mid"></div>
      <div className="programCard-right">
        <p>
          <b>Review: </b>
          <br />
          {review.programReview}
        </p>
      </div>
    </div>
  );
};

export default reviewCard;

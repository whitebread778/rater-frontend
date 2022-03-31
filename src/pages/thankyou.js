import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const thankYou = (props) => {

    return (
        <Container className="p-3">
            <Row className="write-reviews-wrapper">
                <h2 className='text-center'>Thank you for submitting your review!</h2>
            </Row>
            <Col className="write-review-btn d-flex justify-content-around p-2">
                <Link to={'/'} className='btn btn-primary'>home</Link> <br />
                <Link to={'/programs'} className='btn btn-danger'>Programs</Link>
            </Col>

        </Container>
    )
}

export default thankYou;
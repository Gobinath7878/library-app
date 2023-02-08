import React from 'react'
import {Row,Col,Container } from 'reactstrap';
import {useNavigate } from 'react-router';


const Home= () => {
    const navigate=useNavigate();
  return (
    <>
     <section className='bg-warning'>
        <Container>
            <Row>
                <Col lg='12' className='text-center d-flex align-items-center justify-content-between mt-4 mb-3'>
                    <h5 className='fw-bold'>Library</h5>
                    <ul className='text-center d-flex align-items-center justify-content-center gap-5 fw-bold'>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/books")}>Books</li>
                        <li onClick={() => navigate("/addbook")}>Add Book</li>
                        <li onClick={() => navigate("/editbook")}>Edit Book</li>
                    </ul>
                </Col>
            <img src="https://img.freepik.com/free-vector/kids-reading-concept-illustration_114360-8513.jpg?w=740&t=st=1675887063~exp=1675887663~hmac=abb24eb88494e0c1c8771ead5b89d5bc796b900c4d620c9d74893314b9857a71" alt="" className='mb-2' />
               
            </Row>
        </Container>
     </section>
   
            <div className='head-text'>
                <h1 className='text-center fw-bold'>
                    <span>"Empowering Minds,</span><br />
                 Enriching Lives: Your Gateway to Knowledge."</h1>
            </div>
  

    </>
  )
}

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {Row,Col,Container} from "reactstrap"
import {CardBody,Card,CardTitle,CardText,CardSubtitle } from "reactstrap";
import {useNavigate } from 'react-router';
import { API } from "../global";
import {Button} from "reactstrap";


const Books =  () => {
  const [books, setBooks] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    axios
      .get(`${API}`)
      .then(res => setBooks(res.data))
      .catch(error => console.error(error));
  };

  // const handleUpdate = (book, values) => {
  //   axios
  //     .put(`https://63e33e21c919fe386c02b727.mockapi.io/books/${book.id}`, values)
  //     .then(res => {
  //       setBooks(
  //         books.map(item => {
  //           if (item.id === book.id) {
  //             return res.data;
  //           }
  //           return item;
  //         })
  //       );
  //     })
  //     .catch(error => console.error(error));
  // };


  
  
  // const handleDelete = book => {
  //   axios
  //     .delete(`https://63e33e21c919fe386c02b727.mockapi.io/books/${book.id}`)
  //     .then(res => {
  //       setBooks(books.filter(item => item.id !== book.id));
  //     })
  //     .catch(error => console.error(error));
  // };
  

  return (   
  <> 
  <div className="d-flex align-items-center justify-content-around  px-5 bg-warning gap-3">
    <h1 className="text-center mt-5 fw-bold ml-5">Books</h1>
    <Button color="success"
    outline className="text-center mt-5 px-4 fw-bold" onClick={() => navigate("/")}>Home</Button>  
  </div>  
    <section>
      <Container>
        <Row>
          <Col lg='12' className="d-flex align-items-center justify-content-between flex-wrap gap-5 mt-5" >
        
      {books.map(book => (
        // <li key={book.id}>
        //   {book.bookName} by {book.authorName}
        // </li>
        <Card
  style={{
    width: '300px',
    height:'250px'
  }}
  key={book.id}
>

  <CardBody >
    <CardTitle tag="h5" className="fw-bold" >
     {book.bookName}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {book.authorName}
    </CardSubtitle>
    <CardText className="summary">
      {book.summary}
    </CardText>
    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
    <h6>ratings: {book.rating}</h6>
    <h6 className="fw-bold genere">Genere: {book.genre}</h6>
    </div>
   
    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap" >
    {/* <h6 className="edit-btn" onClick={() => navigate("/editbook")}>Edit</h6>
    <h6 className="delete-btn">Delete</h6> */}
    {/* <Button onClick={() => navigate("/editbook")} className="bg-success border-0">Update</Button> */}
          {/* <Button onClick={() => handleDelete(book)} className="bg-danger border-0">Delete</Button> */}
    </div>   
  </CardBody>
</Card>

      ))}
       </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Books;

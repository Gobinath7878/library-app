import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";
import { API } from "../global";

const Result = () => {
  return <p className="success-msg">Your Book has been Added Successfully.</p>;
};

const BookForm = () => {
  const [books, setBooks] = useState([]);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [result, showResult] = useState(false);

  const handleSubmit = (values,{ resetForm }) => {
    axios
      .post(`${API}`, values)
      .then((res) => {
        setBooks([...books, res.data]);
        showResult(true);
        resetForm();
      })
      .catch((error) => console.error(error));
  };setTimeout(() => {
    showResult(false);
  },4000);

  const navigate = useNavigate();

  return (
    <>
    
    <Formik
      initialValues={{
        bookName: "",
        authorName: "",
        rating: "",
        summary: "",
        genre: "",
      }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.bookName) {
          errors.bookName = "Required";
        }
        if (!values.authorName) {
          errors.authorName = "Required";
        }
        if (!values.rating) {
          errors.rating = "Required";
        }
        if (!values.summary) {
          errors.summary = "Required";
        }
        if (!values.genre) {
          errors.genre = "Required";
        }
        return errors;
      }}
    >
    
        <Form className="d-flex align-items-center justify-content-center flex-column mt-5 addbook-form">
          <Field
            type="text"
            name="bookName"
            placeholder="book name"
            className="text-center"
          />
          <ErrorMessage name="bookName" component="div" />
          <br />
          <Field
            type="text"
            name="authorName"
            placeholder="author name"
            className="text-center"
          />
          <ErrorMessage name="authorName" component="div" />
          <br />
          <Field
            type="number"
            name="rating"
            placeholder="rating"
            className="text-center"
          />
          <ErrorMessage name="rating" component="div" />
          <br />
          <Field
            type="text"
            name="summary"
            placeholder="summary"
            className="text-center"
          />
          <ErrorMessage name="summary" component="div" />
          <br />
          <Field
            type="text"
            name="genre"
            placeholder="genere"
            className="text-center"
          />
          <ErrorMessage name="genre" component="div" />
          <br />
          {/* <Button
            type="submit"
            className="bg-success border-0 fw-bold"
          >
            Add Book
          </Button> */}
          
          <div>
      <Button
         className="bg-success border-0 fw-bold"
        type="submit"
        
      >
        Add Book
      </Button>
    </div>

          <Button
            type="submit"
            onClick={() => navigate("/books")}
            className="mt-3 bg-warning border-0 fw-bold"
          >
            Book store
          </Button>
          <div className="alert">{result ? <Result /> : null}</div>
        </Form>
   
    </Formik>
    </>
  );
};

// const BookList = ({ books }) => {
// return (
// <ul>
// {books.map(book => (
// <li key={book.id}>
// {book.bookName} by {book.authorName}.genere is {book.genere}.It's  {book.summary} and have a rating {book.rating}
// </li>

// ))}
// </ul>
// );
// };

function AddBook() {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  // axios
  // .get("https://63e33e21c919fe386c02b727.mockapi.io/books")
  // .then(res => setBooks(res.data))
  // .catch(error => console.error(error));
  // }, []);

  return (
    <div>
      <BookForm />
      {/* <BookList books={books} /> */}
    </div>
  );
}

export default AddBook;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API } from "../global";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router";
import { CardBody, Card, CardTitle, CardText, CardSubtitle } from "reactstrap";

export default function EditBook(book) {
  const navigate = useNavigate();
  const [bookList, setBookList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  //   const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [newBook, setNewBook] = useState({
    bookName: "",
    authorName: "",
    genre: "",
    rating: "",
    summary: "",
  });

  const getBook = useCallback(async () => {
    const result = await axios.get(API);
    setBookList(result.data);
  }, []);

  useEffect(() => {
    getBook();
  }, [getBook]);

  const addBook = async (book) => {
    const result = await axios.post(API, book);
    setBookList([...bookList, result.data]);
  };

  const updateBook = async (book) => {
    setNewBook({
      bookName: "",
      authorName: "",
      genre: "",
      rating: "",
      summary: "",
    });
    const result = await axios.put(`${API}/${book.id}`, book);
    const updatedBookList = bookList.map((b) => {
      if (b.id === result.data.id) {
        return result.data;
      }
      return b;
    });
    setBookList(updatedBookList);
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API}/${id}`);
    setBookList(bookList.filter((book) => book.id !== id));
  };

  return (
    <>
      <section className="bg-warning">
        <Container>
          <Row>
            <div className="d-flex justify-content-between align-items-center gap-5 mt-3 bg-warning ">
              <h2 className="fw-bold py-2">Book List</h2>
              <h5
                className="fw-bold home-btn text-center"
                onClick={() => navigate("/")}
              >
                Home
              </h5>
            </div>
            <Col lg="6" className="form-sidebar mt-5 py-5">
              <h6 className="py-2 fw-bold">Edit Form - Book</h6>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addBook(newBook);
                }}
              >
                <input
                  type="text"
                  placeholder="Book name"
                  value={newBook.bookName}
                  onChange={(e) =>
                    setNewBook({ ...newBook, bookName: e.target.value })
                  }
                />
                <br />
                <input
                  type="text"
                  placeholder="Author"
                  value={newBook.authorName}
                  onChange={(e) =>
                    setNewBook({ ...newBook, authorName: e.target.value })
                  }
                />
                <br />
                <input
                  type="text"
                  placeholder="genre"
                  value={newBook.genre}
                  onChange={(e) =>
                    setNewBook({ ...newBook, genre: e.target.value })
                  }
                />
                <br />
                <input
                  type="text"
                  placeholder="summary"
                  value={newBook.summary}
                  onChange={(e) =>
                    setNewBook({ ...newBook, summary: e.target.value })
                  }
                />
                <br />
                <input
                  type="text"
                  placeholder="rating"
                  value={newBook.rating}
                  onChange={(e) =>
                    setNewBook({ ...newBook, rating: e.target.value })
                  }
                />

                {/* <button className="edit-btn-form d-flex align-items-center justify-content-center mt-0 text-center " onClick={() => {
    updateBook({...newBook, id: book.id});
    
  }}>Update</button> */}
                {showSuccessMessage && (
                  <div className="success-message">
                    The book has been updated successfully!
                  </div>
                )}
                {/* <button type="submit">Add Book</button> */}
              </form>
            </Col>

            <Col
              lg="8"
              className="d-flex align-items-center justify-content-between flex-wrap gap-5 form-sidebar-2 mt-5"
            >
              {bookList.map((book) => (
                <Card
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                  key={book.id}
                >
                  <CardBody>
                    <CardTitle tag="h5" className="fw-bold">
                      {book.bookName}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {book.authorName}
                    </CardSubtitle>
                    <CardText className="summary">{book.summary}</CardText>
                    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                      <h6>ratings: {book.rating}</h6>
                      <h6 className="fw-bold genere">Genere: {book.genre}</h6>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                      {editMode ? (
                        <>
                          <button
                            className="edit-btn bg-success"
                            onClick={() => {
                              updateBook({ ...newBook, id: book.id });
                              setEditMode(false);
                              setShowSuccessMessage(true);
                              setTimeout(() => {
                                setShowSuccessMessage(false);
                              }, 5000);
                            }}
                          >
                            Update
                          </button>
                        </>
                      ) : (
                        <button
                          className="edit-btn"
                          onClick={() => {
                            setNewBook({ ...book, id: book.id });
                            setEditMode(true);
                          }}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => deleteBook(book.id)}
                        className="delete-btn mt-3"
                      >
                        Delete
                      </button>
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
}

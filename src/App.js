import React from "react";
import Home from "./Routes/Home";
import { Routes, Route} from "react-router-dom";
import './App.css'
import Books from "./Routes/Books";
import AddBook from "./Routes/AddBook";
import EditBook from "./Routes/updateBook";


 const App =()=>{
    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/editbook" element={<EditBook />} />
          {/* <Route path="/book" element={<BookList />} />
          <Route path="/book/:bookid" element={<BookDetail />} />
          <Route path="/book/add" element={<AddBook />} />

          <Route path="/book/edit/:bookid" element={<EditBook />} />

          <Route path="/color-game" element={<AddColor />} />
          <Route path="/novel" element={<Navigate replace to="/book" />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/form" element={<BasicForm />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} /> */}
        </Routes>
    )
}
export default App;

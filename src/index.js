import React from 'react'

import ReactDom from 'react-dom'

//CSS
import './index.css' 
//js
import {books} from './books';
import Book from './Book';
function BookList(){
  return (
    <section className="bookList">
      {/* Providing props here
     <Book
      img={books[0].img}
      title={books[0].title}
      author={books[0].author}
     >
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam, accusamus iusto deleniti libero voluptatibus voluptates tempora! Obcaecati, rem saepe.</p>
     </Book>
     <Book
      img={books[1].img}
      title={books[1].title}
      author={books[1].author} */}
     {/* /> */}
     {/* using map method to render data from book array to booklist function */}
     {books.map((book) =>{
       // structuring 
      return (
        <Book key={book.id} {...book}>
        </Book>
      )
       
     })}
    </section>
  );
}
// const names = ['john', 'peter', 'susan'];
// const newName = names.map((name) => {
//   console.log(name);
// });
// console.log(newName);




ReactDom.render(<BookList></BookList>, document.getElementById('root'));
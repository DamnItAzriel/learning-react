import React from 'react'

import ReactDom from 'react-dom'

//CSS
import './index.css' 
const books=[
{ id: 1,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg',
  title: 'Ikigai: The Japanese Secret To Long and Happy Life',
  author: 'Hector Garcia'
},
{
  id:2,
  img:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
  title: 'The Psychology Of Money',
  author: ' Morgan Housel'
},
{
  id: 3,
  img:'https://images-eu.ssl-images-amazon.com/images/I/814jC+rODgL._AC_UL604_SR604,400_.jpg',
  title: 'The Subtle Art Of Not Giving F*ck',
  author: ' Mark Manson'
}
];
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
        <Book key={book.id} book={book}>
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


const Book = (props) => {
  console.log(props.book)
  const { img, title, author} = props.book;
  return <article className= 'book'>
      <img src={img} alt="" width="350px"/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>;
};

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
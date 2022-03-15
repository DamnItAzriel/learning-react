import React from 'react'

import ReactDom from 'react-dom'

//CSS
import './index.css' 
// for javaScript file just write./fileName 


// Stateless Function Component or Dumb Components
// Returns JSX

// Nested Tools

//Setup vars
// const author = 'Hector Garcia';
// const img = 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg';
// const img2 = 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg'; 
//setup book 1
const books=[
{
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg',
  title: 'Ikigai: The Japanese Secret To Long and Happy Life',
  author: 'Hector Garcia'
},
{
  img:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
  title: 'The Psychology Of Money',
  author: ' Morgan Housel'
}
];
function BookList(){
  return (
    <section className="bookList">
      {/* Providing props here*/}
     <Book
      img={books[0].img}
      title={books[0].title}
      author={books[0].author}
     >
     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam, accusamus iusto deleniti libero voluptatibus voluptates tempora! Obcaecati, rem saepe.</p> */}
     </Book>
     <Book
      img={books[1].img}
      title={books[1].title}
      author={books[1].author}
     />
    </section>
  );
}
// Trying properties - > props

// const Book = (props) => {
const Book = (props) => {
  // console.log(props);
  //Object destructuring 
  // instead of props you could just destructure object in props place itself in function parenthesis
  const { img, title, author} = props;
  return <article className= 'book'>
    {/* <img src={props.img} alt="" width="350px"/> */}
    <img src={img} alt="" width="350px"/>
    {/* <h1>Ikigai: The Japanese Secret To Long and Happy Life</h1> */}
    {/* <h1>{props.title}</h1> */}
    <h1>{title}</h1>
    {/* <h4>Hector Garcia</h4> */}

    {/* <h4>{props.author}</h4>  */}
    <h4>{author}</h4>
    {/* <p>{props.job}</p>
    <p>{props.title}</p>
    <p>{props.price}</p> */}
    {/* {props.children} */}
    </article>;
};
// const Image = () => ;


// const Author = () => <h4 style={{color:'blue', fontSize:'0.75rem', marginTop:'0.25rem'}}>Hector Garcia</h4>;

// const Title = () => <h1>Ikigai: The Japanese Secret To Long and Happy Life</h1>;

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
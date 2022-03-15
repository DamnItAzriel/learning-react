import React from 'react'

import ReactDom from 'react-dom'

//CSS
import './index.css' 
// for javaScript file just write./fileName 


// Stateless Function Component or Dumb Components
// Returns JSX


// function Greeting() {
//   // return <h4>I am Pankaj and this is my first component</h4>;
//   return (
//     <div>
//       <div>
//         <h1>
//           Hello World
//         </h1>
//       </div>
//       <div>
//         <h2>
//           Bye!
//         </h2>
//       </div>
//     </div>

//   );
// }


// const Greeting = () => {
//   return React.createElement('h1', {}, "Hello World"); 
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, "Hello WOrld")
//   )
// }

// Nested Tools

//Setup vars
// const author = 'Hector Garcia';
// const img = 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg';
// const img2 = 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg'; 
//setup book 1
const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg',
  title: 'Ikigai: The Japanese Secret To Long and Happy Life',
  author: 'Hector Garcia'
}
const secondBook= {
  img:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
  title: 'The Psychology Of Money',
  author: ' Morgan Housel'
}
function BookList(){
  return (
    <section className="bookList">
      {/* Providing props here*/}
     <Book
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
     />
     <Book
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}
     />
     {/* <Book/>
     <Book/>
     <Book/>
     <Book/>
     <Book/> */}
    </section>
    // <div>
    //   {/* <h1>Pankaj Pawar</h1> */}
    //   <Person/>
    //   {/* <p>
    //     God, Freedom, Truth
    //   </p> */}
    //   <Quote/>
    // </div>
  );
}
// Trying properties - > props
const Book = (props) => {
  console.log(props);
  // const title = 'Ikigai: The Japanese Secret To Long and Happy Life';
  // const author = 'Hector Garcia';
  return <article className= 'book'>
    {/* <Image></Image>
    <Title/>
    <Author/> */}
    <img src={props.img} alt="" width="350px"/>
    {/* <h1>Ikigai: The Japanese Secret To Long and Happy Life</h1> */}
    <h1>{props.title}</h1>
    {/* <h4>Hector Garcia</h4> */}
    <h4>{props.author}</h4> 
    {/* <p>{props.job}</p>
    <p>{props.title}</p>
    <p>{props.price}</p> */}
    </article>;
};
// const Image = () => ;


// const Author = () => <h4 style={{color:'blue', fontSize:'0.75rem', marginTop:'0.25rem'}}>Hector Garcia</h4>;

// const Title = () => <h1>Ikigai: The Japanese Secret To Long and Happy Life</h1>;

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
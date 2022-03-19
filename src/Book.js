import React from 'react'
import { greeting } from './testing/testing';

const Book = ({ img, title, author}) => {
  // console.log(props)
  // const { img, title, author} = props;
  // console.log({ img, title, author})
  //attribute, eventHandler
  //onClick, onMouseOver
  console.log(greeting);
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  };
  const complexExample = (author) =>{
      console.log(author);
  };
  return <article 
    className= 'book' 
    onMouseOver={()=> {
    console.log(title);
  }}>
      <img src={img} alt="" width="350px"/>
      <h1 onClick={() => {console.log(title)}}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
    Reference Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>More Complex Example</button>
    </article>;
};

export default Book
import React from 'react';

const Link = ({ className, href, children }) => {
  
  const onClick = (event) => {
    event.preventDefault();
    console.log("hola");
  }; 
  
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
    );
};

export default Link;
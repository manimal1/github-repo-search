import * as React from 'react';
import './Title.css';

interface ITitleProps {
  title: string
}

export const Title = ({title}: ITitleProps) => {
  
  return(
    <h1 className="title">{title}</h1>
  );
}

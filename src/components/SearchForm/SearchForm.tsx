import * as React from 'react';
import './SearchForm.css';

interface ISearchFormProps {
  value: any,
  handleChange: (e: Event) => void,
  handleSubmit: (e: Event) => void
}

export const SearchForm = ({value, handleChange, handleSubmit}: ISearchFormProps) => {
  
  return(
    <form className="search-form">
      <div>
        {/* tslint:disable */ }
        <input type="search" id="ghSearch" name="q" value={value} onChange={(e: any) => handleChange(e)} placeholder="github username" />
        <button className="search-form__button" onClick={(e: any) => handleSubmit(e)}>Search</button>
      </div>
    </form>
  )
}

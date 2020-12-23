
import React from 'react';

const Form = props => (
  <form onSubmit={props.getResult} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="movieName" /> 
    
    {/* <br/> <br/>
    <label for="type">Select Search Type:</label>
    <select class="select-css" name="searchType" id="type">
      <option value="Movies">Movies</option>
      <option value="TV_Shows">Tv Shows</option>
    </select>    
    <br/> */}
    <button className="form__button">Search</button>
  </form>
);

export default Form;
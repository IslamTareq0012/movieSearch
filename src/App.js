import React from 'react';
import Form from './Components/Form';
import Movies from './Components/Movies';
import './App.css';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      results: []
    }
  }
  getResult = async (e) => {
    const movie = e.target.elements.movieName.value;
 //   const type = e.target.elements.searchType.value;
    if(movie !== "" || movie){
      e.preventDefault();

 //     if(type ==="Movies"){

        const api_call = await  fetch(`https://api.themoviedb.org/3/search/movie?api_key=dda7bf64cfed94e09e52b4a001586421&language=en-US&page=1&include_adult=false&query=${encodeURI(movie)}`);
     
        const data = await api_call.json();
   
        this.setState({ 
          results: data.results
         });      
        
 //       }
        
        // else if(type ==="TV_Shows")
        // {
        //   const api_call = await  fetch(`https://api.themoviedb.org/3/search/tv?api_key=dda7bf64cfed94e09e52b4a001586421&language=en-US&page=1&include_adult=false&query=${encodeURI(movie)}`);
     
        //   const data = await api_call.json();
     
        //   this.setState({ 
        //     results: data.results
        //    });   
        // }
    }

    
    }

  render() {

    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">TMDB Search</h1>
      </header>
      <Form getResult={this.getResult} />
      <Movies results={this.state.results} />

    </div>
    );
  }
}

export default App;

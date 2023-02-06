import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem'

class FilmsItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href="{this.props.url}">{this.props.url}</a>
      </li>
    )
  }
}
class Starwars extends React.Component {
  constructor () {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }

  getNewCharacter() {
    const randomNumber = Math.random( Math.round()*82)
    const url = "https://swapi.dev/api/people/1/"
    fetch(url)
       .then(response => response.json())
       .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
       })
  
  })
  }
  render() {

    const movies= this.state.films.map((film,i) => { 
    return <FilmsItemRow key={i} url={film} />
    })
    return(
      <div>
        {
         this.state.loadedCharacter &&
          <div>
             <h1>{this.state.name}</h1>
        <p>{this.state.height} cm</p> 
        <p><a href={this.state.homeworld}>homeworld</a></p>
        <ul>
         {movies}
      
      </ul>
            </div>
        }
       
        <button type="button"  onClick={()=>this.getNewCharacter()}
         className="btn"
         >
          click
           </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Starwars/>
      </header>
    </div>
  );
}

export default App;

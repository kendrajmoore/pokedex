import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
  let title;
  if (this.props.isWinner){
    title = <h1 className="Pokedex-winner">Winner</h1>
  } else {
    title = <h1 className="Pokedex-loser">Loser</h1>
  }
    return (
      <div class="Pokedex">
       {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((poke) => (
              <Pokecard id={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />
          ))}
          </div>
      </div>
    )
  }
}


export default Pokedex;
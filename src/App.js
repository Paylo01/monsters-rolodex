import React from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import {SearchField} from './Components/search-field/search-field.component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

 componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(users => this.setState({monsters: users}))
 }
  
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchField 
          placeholder="Search For Monsters..."
          handleChange={evt => this.setState({searchField: evt.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

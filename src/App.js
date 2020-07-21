import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/cardList/CardList';
import {SearchBox} from './components/searchBox/SearchBox';
class App extends Component{
  
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }


  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then( data => this.setState({monsters: data})).catch(err => console.log('error'));
    
  }

  onSearchChange = (event) => {
      this.setState({searchField:event.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsers = monsters.filter(element => {
      return element.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
    
    <div className="App">
        <h1> Monser rolodex </h1>
        <SearchBox placeholder="Search monsters" onChange={this.onSearchChange} />
        <CardList monsters = {filteredMonsers} />
       
    </div>
     );
}
}
export default App;

import React from 'react';

 import Books from './components/Books';
import Navbar from 'react-bootstrap/Navbar';
 import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
 import SavedPage from './components/SavedPage';
 import SearchPage from './components/SearchPage';


import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      headerLinks: [
        { title: 'Search', path: '/' },
        { title: 'Saved', path: '/saved' },
      ],
      search: {
        title: 'Search'
      },
      saved: {
        title: 'Saved'
      }

    }
  }

  render() {
    return (
      
      
      
        
    
       <div className="App">
        {/* <Header /> */}
        
        <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="">
          <Navbar.Brand>Google Books</Navbar.Brand>
          

           <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className= "ml-auto" >
              <Link className="nav-link" to="/">Search</Link>
              <Link className="nav-link" to="/saved">Saved</Link>
              
            </Nav>
          </Navbar.Collapse> 
        </Navbar>

          <Route path = "/" exact render={() => <SearchPage title={this.state.search.title} subTitle={this.state.search.subTitle} text={this.state.searchtext} />} />
        <Route path = "/saved" exact render={() => <SavedPage title={this.state.saved.title} /> } />  
        </Container>
    </Router>
    
         <Books /> 
         </div> 
  
        
      


    );
  }
}

export default App;

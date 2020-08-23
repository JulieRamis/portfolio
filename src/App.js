import React, { Component } from 'react';
import Presentation from './views/Text';
import Nav from './views/Nav/Nav';
import SideDrawer from './views/SideDrawer/SideDrawer';
import Backdrop from './views/Backdrop/Backdrop'
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false})
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
    <div style={{height:'100%'}}>
      <Nav drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <main style={{marginTop: '64px'}}> 
      Bonjour
      <Presentation />
      </main>
     
    </div>
  );
  };
 
}

export default App;

import React, {Component} from 'react'
import{NavLink} from 'react-router-dom'
import {menuData} from './menu-data'
import './Navigation.css'


export default class Navigation extends Component {

  constructor(props){
    super(props)
    this.state = {
      isSidebarOpen: false,
    }
  }

  handleMenuButtonClick = () => {
    this.setState({
        isSidebarOpen: ! this.state.isSidebarOpen
    })
  }

  handleCloseButtonClick = () => {
    this.setState({
        isSidebarOpen: ! this.state.isSidebarOpen
    })
  }

  handleSelectedLink = () => {
    this.setState({
        isSidebarOpen: ! this.state.isSidebarOpen, 
    })
  }

  render(){
    const {isSidebarOpen} = this.state
    return(
      <div className='nav-container'>
        <div className='menu-button' 
          onClick = {this.handleMenuButtonClick}
        >
          <i className="fas fa-bars"/>
        </div>
        {/* Sidebar*/}
        { menuData.length && (
          <nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
            <div className='close'
              onClick = {this.handleCloseButtonClick}
            >
              <i className="fas fa-times"/>
            </div>
            <ul className='menu-items'>
              { menuData.map( item => (
                <li className='menu-list' key={item.label}>
                    <NavLink onClick = {this.handleSelectedLink}
                        className='menu-link'
                        activeClassName='menu-link-active' 
                        exact 
                        to={item.url} 
                    >
                        {item.label}
                    </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ) }
      </div>
    )
  }
}
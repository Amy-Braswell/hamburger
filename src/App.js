import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import NotFound from './Components/NotFound'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    
    return(
      <div className='App'>
      <Navigation />
      <div className='Content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/skills' component={Skills} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </div>
    )
  }
}



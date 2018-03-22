import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CommonHeader from './Common/CommonHeader/CommonHeader'
import CommonFooter from './Common/CommonFooter/CommonFooter'
import MainPage from './MainPage/MainPage'
import DemoOne from './Demos/DemoOne/DemoOne'
import DemoTwo from './Demos/DemoTwo/DemoTwo'
import './index.scss'

 class App extends React.Component {

  render() {
    return (
        <div>
        <CommonHeader />
            <div className="content">
            <Route exact path="/" component={MainPage} /> 
                <Switch>
                <Route path="/DemoOne" component={DemoOne} /> 
                <Route path="/DemoTwo" component={DemoTwo} />   
                </Switch>
            </div>
        <CommonFooter />
        </div>
    )
  }
}

render(
    <Router>
    <App />
    </Router>,
    document.getElementById('root')
)

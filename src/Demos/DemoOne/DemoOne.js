import React, {Component} from 'react'
import './DemoOne.scss'
export default class DemoOne extends Component {
    render() {
        return (
            <div id="demo-one-container">
                <div className="one-grid one-header">header</div>
                <div className="one-grid one-sidebar">sidebar</div>
                <div className="one-grid one-content">content</div>
                <div className="one-grid one-extra">extra</div>
                <div className="one-grid one-footer">footer</div>
            </div>

        )
    }
}
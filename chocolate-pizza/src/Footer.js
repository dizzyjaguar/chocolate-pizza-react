import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className='the-footer'>
                <img src={this.props.vanessa} />
                <h3>Vanessa Stevenson</h3>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                <button>SHARE RECIPE</button>
            </div>
        )
    }
}
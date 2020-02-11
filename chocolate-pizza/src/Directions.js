import React, { Component } from 'react';

export default class Directions extends Component {
    render() {
        return (
            <div className='directions-div'>
                <h1>Chocolate Pizza</h1>
                <p className='date-p'>Posted on 15 december 2013 / desserts</p>
                <img alt='pizza' className='the-pizza-img' src={this.props.mainPhoto}>
                </img>
                <div className='p-div'>
                    <p className='directions-p'>{this.props.directions1}</p>
                    <p className='directions-p'>{this.props.directions2}</p>
                    <p className='directions-p'>{this.props.directions3}</p>
                </div>

            </div>
        )
    }
}
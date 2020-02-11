import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className='the-header'>
                <img className='logo-img' alt='logo' src={this.props.logo} />
                <h2>Delicious</h2>
                <p>The best Food blog on the web</p>
                <div className='icons'>
                    <img src={this.props.fb} />
                    <img src={this.props.google} />
                    <img src={this.props.flic} />
                    <img src={this.props.insta} />
                    <img src={this.props.mail} />
                    <img src={this.props.twitter} />
                    <img src={this.props.rss} />

                </div>

            </div>
        )
    }
}
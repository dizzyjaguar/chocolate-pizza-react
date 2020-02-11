import React, { Component } from 'react';

export default class Recipe extends Component {
    render() {
        return (
            <div className='recipe-div'>
                <div id='list1'>
                    <ul>
                        <li>1 1/2 cups milk</li>
                        <li>1/2 cup mascarpone</li>
                        <li>1/2 tsp pink salt</li>
                        <li>1 lb Black Mission Figs</li>
                        <li>1/2 cup brown sugar</li>
                        <li>2-4 tbsp water</li>
                    </ul>
                </div>
                    <div id='list2'>
                        <ul>
                            <li>1 1/2 cups heavy cream</li>
                            <li>1/3 granulated sugar</li>
                            <li>2 egg yolks</li>
                            <li>1 lemon, juiced</li>
                            <li>2 tbsp butter</li>
                            <li>1 cup honey roasted pecans, roughly chopped</li>
                        </ul>
                    </div>
            </div>
        )
    }
}
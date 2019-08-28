import React, { Component } from 'react'
import BookList from './BookList';
import Wishlist from './Wishlist';
import { throwStatement } from '@babel/types';

class Library extends Component{
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:"JS Fundamentals",
                author:"John"
            },
            {
                id:2,
                title:"React Pro",
                author:"John"
            },
            {
                id:3,
                title:"Node in action",
                author:"John"
            }
        ]

        this.state={
            books:books,
            wishlist:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(book)
        this.setState({
            wishlist:[
                ...this.state.wishlist,
                book
            ]
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Library</h1>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
                <Wishlist books={this.state.wishlist}/>
            </React.Fragment>
        )
    }
}

export default Library;
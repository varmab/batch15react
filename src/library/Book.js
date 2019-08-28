import React, { Component } from 'react'

class Book extends Component{
    constructor(props){
        super(props);

        this.state={
           book:props.book 
        }
    }

    add=()=>{
        this.props.addToWishlist(this.state.book)
    }

    render(){
        return(
            <React.Fragment>
                <h3>{this.state.book.title}</h3>
                <button onClick={this.add}>Add to wishlist</button>
            </React.Fragment>
        )
    }
}

export default Book;
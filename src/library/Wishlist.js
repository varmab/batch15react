import React, { Component } from 'react'

class Wishlist extends Component{
    
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            books:newProps.books
        })
    }

    render(){
        return(
            <h1>Wishlist:{this.state.books.length}</h1>
        )
    }
}

export default Wishlist;
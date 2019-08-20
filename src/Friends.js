import React, {Component} from 'react'

class Friends extends Component{
    constructor(){
        super();

        this.state={
            friends:["Ram","Robert","Rahim"]
        }
    }

    render(){
        return(
            <div>
                <h1>My Friends</h1>
                <ul>
                    {
                        this.state.friends.map((friend)=>{
                            return <li key={friend}>{friend}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Friends;
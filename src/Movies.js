import React, {Component} from 'react'

class Movies extends Component{
    constructor(){
        super();

        this.state={
            movies:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json')
        .then(response=>response.json())
        .then(movies=>{
            this.setState({
                movies:movies,
                loading:false
            })
        })
        .catch(err=>{
            this.setState({
                loading:false,
                error:true
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <h1>Loading.. Please wait</h1>
            )
        }

        if(this.state.error==true){
            return(
                <h1>Sorry.. Failed to load movies</h1>
            )
        }

        return(
            <React.Fragment>
                <h1>Movies</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                        {
                            this.state.movies.map((movie)=>{
                                return <tr key={movie.id}>
                                            <td>{movie.title}</td>
                                            <td>{movie.rating}</td>
                                            <td><img src={movie.cover_url}/></td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Movies;
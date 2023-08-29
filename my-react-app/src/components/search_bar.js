import React ,{Component}from 'react';
// The Component class is the base class that you will extend to create your own React components.

//Here, you're defining a class-based component named SearchBar.
class SearchBar extends Component{

    constructor(props)
    {
        super(props);
        this.state={term: ''};
    }

    render(){
    return    (  <div className="my-4 mx-3 mb-3 row">
                     <label htmlFor="search" class="col-sm-2 col-form-label">Search</label>
                    <div className="col-sm-5">
                        <input 
                        value= {this.state.term}
                         onChange={event=>this.onInputChange(event.target.value)} type="text" class="form-control" id="inputPassword"
                         />
                        
                    </div>
                </div>)
     
}
onInputChange(term){
    this.setState({term});
    this.props.onSearchtermchange(term)
}
}

export default SearchBar;
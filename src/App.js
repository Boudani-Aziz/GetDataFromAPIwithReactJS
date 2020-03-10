import React ,{Component} from 'react';

class  App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      items:[],
      isLoaded: false,
      
    };
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        isLoaded:true,
        items:data,
      })
     
    });
    
  }
  render(){
    var {isLoaded,items} =this.state;
    //console.log(items);
    if(!isLoaded){
      return (<div>Loading .......</div>);
    }else{
      //
      return (
        <div className="App">
              <ul>
              {items.map(item=>(
                <li key={item.id}>
                
                  <div className={ item.completed ? 'alert alert-success' :'alert alert-danger' }  role="alert">
                      Aufgabe: {item.title} = >  { item.completed ? 'Erledigt' :'Offen' }
                  </div>
                
                </li>

              ))};
              </ul>
        </div>
      );
    }
  }
}

export default App;

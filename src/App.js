import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import StarComponent from './StarComponent';

class App extends Component{
    constructor(props){
        super(props);
        this.state={n:13, results:[]};
    }
    componentDidMount(){
        let results=[];
        let count=1;
        let increment=true;
        for(let i=0;i<this.state.n;i++){
           results.push(count);
            if(increment && count<this.state.n ){
                 count=count+2; 
            }
            else{
                count= count-2;
                increment=false;
            }
             
        }
       this.setState({results:results})
    }
  render(){
  return (
    <div className="App">
     {this.state.results.map((el,index)=>(
      <StarComponent n={el} key={index}/>
     ))}
    </div>
  );
  }
}

export default App;

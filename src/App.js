import React, {useEffect, useState} from 'react';
import './App.css';
import Question1 from './components/game/Game';

  class App extends React.Component{

    constructor(){
      super()
      this.state = {
        show: true,
        child: false
      }
    }

    render(){
      return(
        
        <div>
          {this.state.show ? 
          <div>
            <h1 className='w-100 text-center title'>Select a category</h1>
            <div className='container d-flex flex-column flex-md-row justify-content-md-center align-items-md-center flex-md-wrap'>
              <div className='row m-3 category'>
                <div className='col text-center'>
                  <p>Sport</p>
                  <img alt='football' src='https://cdn.pixabay.com/photo/2019/02/26/09/13/the-ball-4021499__340.jpg' width="200px" className="mb-3 rounded"></img>
                  <button className='btn btn-primary d-block m-auto mb-3 main' onClick={()=>{this.setState({show: !this.state.show, child: !this.state.child})}}>Click to play!</button>
                </div>
              </div>
        
              <div className='row m-3 category'>
                <div className='col text-center'>
                  <p>Geography</p>
                  <img alt='football' src='https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269__340.jpg' className="mb-3 rounded" width="200px"></img>
                  <button className='btn btn-primary d-block m-auto mb-3 disabled'>Coming Soon!</button>
                </div>
              </div>
        
              <div className='row m-3 category'>
                <div className='col text-center'>
                    <p>Politics</p>
                    <img alt='football' src='https://cdn.pixabay.com/photo/2019/03/15/00/11/brussels-4056171_960_720.jpg' width="200px" className="mb-3 rounded"></img>
                    <button className='btn btn-primary d-block m-auto mb-3 disabled'>Coming Soon!</button>
                </div>
              </div>
        
              <div className='row m-3 category'>
                <div className='col text-center'>
                    <p>History</p>
                    <img alt='football' src='https://cdn.pixabay.com/photo/2017/08/07/19/07/books-2606859_960_720.jpg' width="200px" className="mb-3 rounded"></img>
                    <button className='btn btn-primary d-block m-auto mb-3 disabled'>Coming Soon!</button>
                </div>
              </div>
            </div> 
          </div>:null}

          {this.state.child ? <Question1 />:null}
          
        </div>
      );
    }
    
}



export default App;

/* eslint-disable react/style-prop-object */
import React, {useEffect, useState} from "react";
import './game.css'


class Question1 extends React.Component{
    constructor(){
        super()
        this.state = {
            points: 0,
            showQuestion2: false,
        }
    }
    render(){
      return (
        <div>
            <div className="container">
            <h3 className="question text-center">Pytanie testowe?</h3>
            <div className="row mb-md-5">
                <div className="col-md-5 col-12 text-center option mt-5 correct">Opcja 1</div>
                <div className="col-2"></div>
                <div className="col-md-5 col-12 text-center option mt-5">Opcja 2</div>
            </div>

            <div className="row">
                <div className="col-md-5 col-12 text-center option mt-5">Opcja 3</div>
                <div className="col-2"></div>
                <div className="col-md-5 col-12 text-center option mt-5">Opcja 4</div>
            </div>
            </div>

            {this.state.showQuestion2? <Question2 /> : null}
            
        </div>
      )
    }

    componentDidMount(){
        document.querySelector(".correct").addEventListener("click", ()=>{
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.points++
            console.log(this.state.points);
        })

        document.querySelectorAll(".option").forEach((el)=>{
            el.addEventListener("click", ()=>{
                this.setState({showQuestion2: !this.state.showQuestion2})
            })
            
        })
    }
  }

  class Question2 extends React.Component{
        render(){
            return (
                    <h1>Pytanie testowe dwa</h1>
            )
        }
  }


export default Question1
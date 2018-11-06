import React, { Component } from 'react';
import './App.css';
import flowers from "./flowers.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FlowerCard from "./components/FlowerCard";

class App extends Component {

  state = {
    flowers,
    currentScore: 0,
    highScore: 0,
    remaining: flowers,
    headline: ""
  };

  randomizeFlowerField = arr =>{
    var origArr = [...arr];
    var tempArr = [];
    while( origArr.length > 0){
      var i = Math.floor(Math.random()* origArr.length)
      tempArr.push(origArr[i])
      origArr.splice(i, 1);
    }
    return tempArr;
  }
  
  pickFlower = id => {
    console.log(id)

    
    let findFlower = this.state.remaining.find(flower => flower.id === id)
    console.log(findFlower)
    if(!findFlower){
      this.setState({
        flowers: this.randomizeFlowerField(flowers),
        headline: "Your bouquet already had that flower",
        currentScore: 0,
        remaining: flowers
      })      
      } else {
        const remainingFlowers = this.state.remaining.filter(flower => flower.id !== id)
        console.log(remainingFlowers);
        this.setState({
          flowers: this.randomizeFlowerField(flowers),
          currentScore: this.state.currentScore + 1,
          remaining: remainingFlowers,
          headline: "",
          highScore: (this.state.currentScore >= this.state.highScore) ? this.state.currentScore + 1 : this.state.highScore 
        })
      }
  }

  render() {
    return (
      <Wrapper>
        <Title>Flowers 
          <div>Current Score: {this.state.currentScore}</div>
          <div>High Score: {this.state.highScore}</div>
          <div>{this.state.headline}</div>
        </Title>
        {this.state.flowers.map(flower => (
          <FlowerCard 
            pickFlower= {this.pickFlower}
            id= {flower.id}
            key= {flower.id}
            name= {flower.name}
            image= {flower.image}      
          />
        ))}
      </Wrapper>
 
      
    );
  }
}

export default App;

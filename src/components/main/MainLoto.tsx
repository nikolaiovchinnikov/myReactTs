import React, { Component } from 'react';
import Loto from './ComponentLoto';
import listRandom from './random';
import { getRandomArbitrary } from './random'

class MainLoto extends Component {
  listException:Set<number> = new Set([]) 
  count:number = 5
  state = {
    listRandom
  }
  random = () => {
    if (this.listException.size >= 75){
        return
    }
    let list:number[] = this.state.listRandom
    while (this.listException.size < this.count  ) {
      this.listException.add(getRandomArbitrary(1,80))
    }
    let temporarysheet:number[] = []
    let item:number = 0
    this.listException.forEach((v) => {
      item ++
      if (item > this.count - 5  ) {
        temporarysheet.push(v)
        console.log(v)
      }
    })
    list = temporarysheet
    console.log(this.listException)
    console.log(list)
    this.setState({listRandom:list})
    this.count += 5
  }
  render() {
    return (
    <div className='container' >
      <Loto list={this.state.listRandom} func={this.random}/>
    </div>
    )
  }
}
export default MainLoto;
import React from 'react'
import { setModal } from '../actions/score'
export function fieldButtonEnhancer(ComponentClass){
  return class FieldButtonHOC extends ComponentClass{
    constructor(props) {
      super(props);
      this.setModalEvent.bind(this)
    }
    setModalEvent(){
      const { dispatch } = this.props
      dispatch(setModal())
    }
    hideModelEvent(){
      const { dispatch } = this.props
      dispatch(setModal)
    }
    render(){
      return(
        super.render()
      )
    }
  }
}


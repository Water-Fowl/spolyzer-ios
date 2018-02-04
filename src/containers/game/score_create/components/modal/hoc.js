import React from 'react'
export function scoreCreateModalEnhancer(ComponentClass){
  return class HOComponent extends React.Component{
    render(){
      const { visible } = this.props
      console.log(visible)
      if( visible ){
        return (
          <ComponentClass {...this.props} />
        )
      }
      else{
        return(
          null
        )
      }
    }
  }
}

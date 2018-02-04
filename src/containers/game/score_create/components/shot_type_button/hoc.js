import { hideScoreCreateModal } from '../../../../shared/redux/view/actions'
export function scoreCreateShotTypeButtonEnhancer(ComponentClass){
  return class HOComponent extends ComponentClass{
    hideModalEvent(){
      const { dispatch } = this.props
      dispatch(hideScoreCreateModal())
    }
    render(){
      return(
        super.render()
      )
    }
  }
}

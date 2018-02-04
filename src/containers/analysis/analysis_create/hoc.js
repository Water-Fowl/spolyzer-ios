import { baseHigherOrderComponentEnhancer } from 'enhances';

export default function enhancer(ComponentClass){
  BaseHOComponentClass = baseHigherOrderComponentEnhancer(ComponentClass)
  return BaseHOComponentClass
  return class AnalysisCreateHOC extends BaseHOComponentClass{
    constructor(props) {
      super(props)
      this.getGameInformationForm.bind(this)
    }
    getGameInformationForm(){
      const { dispatch } = this.props;
      const sample_data = {
        "data":{
          "user_id": 2,
          "opponent_user": 1,
          "victory": 1,
        }
      }
      dispatch(getAnalysisGames(sample_data))
    }
    render(){
      return(
        super.render()
      )
    }
  }
}


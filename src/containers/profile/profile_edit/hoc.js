import baseHigherOrderComponentEnhancer from 'enhances';
import { ImagePicker } from 'react-native-image-picker';
export default function enhancer(ComponentClass){
  BaseHOC = baseHigherOrderComponentEnhancer(ComponentClass)
}

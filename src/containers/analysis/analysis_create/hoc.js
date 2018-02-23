import baseEnhancer from "enhances";

export default function enhancer(ComponentClass) {
  const BaseHOComponentClass = baseEnhancer(ComponentClass);
  return class AnalysisCreateHOC extends BaseHOComponentClass {
    render() {
      return (
        super.render()
      );
    }
  };
}

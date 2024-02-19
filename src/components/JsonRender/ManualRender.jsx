import SampleComponent from "../SampleComponent";
import Stages from "./RenderTypes/Stages";

const ManualRender = () => {
  const getComponent = () => {
    return (
      <Stages>
        {[
          <Stages name="Main Stage">
            {[{ name: "Demand" }, <SampleComponent name="Prop-Supply" />]}
          </Stages>,
          <Stages name="Stage 2">
            {[{ name: "Demand" }, <SampleComponent name="Prop-Supply" />]}
          </Stages>,
        ]}
      </Stages>
    );
  };
  console.log(getComponent())
  return getComponent();
};

export default ManualRender;

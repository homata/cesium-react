import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";

export default () => {
  storiesOf("ScreenSpaceCameraController", module).addWithJSX("default", () => (
    <Viewer full>
      <ScreenSpaceCameraController enableZoom={false} />
    </Viewer>
  ));
};

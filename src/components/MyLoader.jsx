import { Dimmer, Loader, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function MyLoader() {
  return (
    <>
      <Segment>
        <Dimmer active>
          <Loader size="big">Loading</Loader>
        </Dimmer>
      </Segment>
    </>
  );
}

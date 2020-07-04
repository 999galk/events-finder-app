import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import './Loader.css';

const LoaderNew = () => {
  return(
    <Segment>
      <Dimmer active>
        <Loader size='large'/>
      </Dimmer>
    </Segment>
  );
}

export default LoaderNew;
import React from 'react';

import { Card } from './styles';

const CardContainer = () => (
  <Card>
    <div>
      <strong>Add new user</strong>
      <form>
        <input type="text" placeholder="Github user" />
        <div className="buttons-wrapper">
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </Card>
);

export default CardContainer;

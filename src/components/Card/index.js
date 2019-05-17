import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './styles';

const CardContainer = ({ cancel }) => (
  <Card>
    <div>
      <strong>Add new user</strong>
      <form>
        <input type="text" placeholder="Github user" />
        <div className="buttons-wrapper">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              cancel(e);
            }}
          >
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </Card>
);

// props validation
CardContainer.propTypes = {
  cancel: PropTypes.func.isRequired,
};

export default CardContainer;

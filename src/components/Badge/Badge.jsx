import React from 'react';

function Badge({ count }) {
  return (
    <span className="badge">
      {count > 0 && count}
    </span>
  );
}

export default Badge;

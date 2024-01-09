import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';


export default function HoverDot({user}) {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <TableCell align="center">
      <span
        style={{
          height: '10px',
          width: '10px',
          backgroundColor: user.enabled ? 'green' : 'grey',
          borderRadius: '50%',
          display: 'inline-block',
        }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
      {isHovered ? (user.enabled ? 'Aktiven' : 'Neaktiven') : null}
    </TableCell>
  );
}

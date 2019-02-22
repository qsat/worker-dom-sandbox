import React from 'react';
import Nav from '../Nav/index.tsx'

export default function App(): React.ComponentElement<{}, any> { 
  return (
    <div>
      <h1 key='map'>Precinct Map</h1>
      <div draggable>aaa</div>
      <Nav />
    </div>
  )
} 

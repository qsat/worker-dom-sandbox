import React from 'react';
import Nav from '../Nav/index.tsx'
import DragDrop from '../DragDrop/index.tsx'

window.addEventListener('scroll', () => console.log('aaaa')) // not work

export default function App(): React.ComponentElement<{}, any> { 
  return (
    <div
      onMouseMove={() => console.log('mousemove')} // work
      onScroll={() => console.log('scroll')} // not work
    >
      <h1 key='map'>Precinct Map</h1>
      <div draggable>aaa</div>
      <Nav />
      <DragDrop />
    </div>
  )
} 

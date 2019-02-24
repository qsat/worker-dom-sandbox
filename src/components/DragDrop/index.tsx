import * as React from 'react'
// import DndBackend from 'react-dnd-touch-backend'
import DndBackend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'
import Dustbin from './Dustbin.tsx'
import Box from './Box.tsx'

export default class Container extends React.Component {
	public render() {
    return (
      <DragDropContextProvider backend={DndBackend}>
			<div>
				<div style={{ overflow: 'hidden', clear: 'both' }}>
					<Dustbin allowedDropEffect="any" />
					<Dustbin allowedDropEffect="copy" />
					<Dustbin allowedDropEffect="move" />
				</div>
				<div style={{ overflow: 'hidden', clear: 'both' }}>
					<Box name="Glass" />
					<Box name="Banana" />
					<Box name="Paper" />
				</div>
			</div>
			</DragDropContextProvider>
		)
	}
}

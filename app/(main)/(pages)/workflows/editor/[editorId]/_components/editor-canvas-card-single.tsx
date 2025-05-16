import { EditorCanvasCardType } from '@/lib/types'
import { useNodeId } from '@xyflow/react'
import React, { useMemo } from 'react'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'

type Props = {}

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
     const { dispatch, state } = useEditor()
  const nodeId = useNodeId()
  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />
  }, [data])
  return (
    <div>EditorCanvasCardSingle</div>
  )
}

export default EditorCanvasCardSingle
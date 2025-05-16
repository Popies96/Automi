import { ConnectionsProvider } from '@/providers/connections-providers'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='h-full'>
      <EditorProvider><ConnectionsProvider><></></ConnectionsProvider></EditorProvider>
    </div>
  )
}

export default Page
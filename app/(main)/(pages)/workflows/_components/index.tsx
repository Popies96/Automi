import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'>
        <section className='flex flex-col m-2'>
            <Workflow name='Google Drive to Notion' description='This workflow will copy files from Google Drive to Notion' id='1' publish={false} />
        </section>
    </div>
  )
}

export default Workflows
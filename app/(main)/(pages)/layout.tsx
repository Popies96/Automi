import React from 'react'

type Props = {children: React.ReactNode}

const Layout = (props: Props) => {
  return (
    <div className='border-l-[1px] border-t-[1px] pb-20 rounded-l-3xl border-muted-foreground/20 overflow-scroll h-screen'>{props.children}</div>
  )
}

export default Layout
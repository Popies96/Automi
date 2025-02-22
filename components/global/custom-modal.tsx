import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useModal } from '@/providers/modal-provider'
import { Button } from '../ui/button'

type Props = {
    title: string
    subtitle: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({title,subtitle,children,defaultOpen}: Props) => {
    const {isOpen, setClose} = useModal()
    const handleClose = () => setClose()
  return (
   <Drawer
   open={isOpen}
    onClose={handleClose}
   >
    <DrawerContent>
        <DrawerHeader>
            <DrawerTitle className='text-center'>{title}</DrawerTitle>
            <DrawerDescription className='flex flex-col text-center items-center gap-4 h-96 overflow-scroll'>
                {subtitle}
                {children}
                </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='flex flex-col bg-background border-t-[1px] border-t-muted gap-4'>
            <DrawerClose>
             <Button variant={'ghost'} className='w-full' onClick={handleClose}>close</Button>
            </DrawerClose>
        </DrawerFooter>
    </DrawerContent>
   </Drawer>
  )
}

export default CustomModal
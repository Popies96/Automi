'use client'
import React from 'react'
import UploadCareButton from './uploadCare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onUpload?: any
  onDelete?: any
}

const ProfilePicture = ({ userImage, onUpload, onDelete }: Props) => {
  const router = useRouter()
  const onRemoveImage = async () => {
    const response = await onDelete()
    if (response) router.refresh()
  }
  return (
    <div className='flex flex-col'>
        <p className='text-lg text-white'>Profile picture</p>
        <div className='flex h-[30vh] flex-col items-center justify-center'>
          {userImage ? <>
          <div className='relative w-2/12 h-full'>
          <Image src={userImage} 
          fill 
          alt='profileImage'
          />
          
          </div>
          <Button onClick={onRemoveImage} className='text-white/70 bg-transparent hover:bg-transparent hover:text-white'><X />remove </Button>
          </> : <UploadCareButton onUpload={onUpload} />}
          
        </div>
    </div>
  )
}

export default ProfilePicture
'use client'
import React, { useEffect } from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';

type Props = {
    onUpload:(e : string) => any
}

const UploadCareButton = ({ onUpload }: Props) => {
    const router = useRouter()
    useEffect(() => {
        const handleUpload =async (event: any) => {
            const file = await onUpload(event.detail.cdnUrl)
            if (file) {
                router.refresh()
            }
        }
    }, [])
  return (
      <div>
      <FileUploaderRegular
         sourceList="local, camera, facebook, gdrive"
         cameraModes="video, photo"
         classNameUploader="uc-light"
         pubkey="480c703a36a45c11ea90"
      />
    </div>
  )
}

export default UploadCareButton
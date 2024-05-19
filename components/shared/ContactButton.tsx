"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FormDialog } from '../FormDialog';

const ContactButton = () => {
    const [open, setOpen] = useState(false);

    const openHandler = () => {
        setOpen(true);
    }
    return (
        <>
        <div className='md:mx-0 mx-2'>
            <Button onClick={openHandler} className='rounded-sm'>CONTACT US</Button>
        </div>
        <FormDialog open={open} setOpen={setOpen}/>
        </>
    )
}

export default ContactButton
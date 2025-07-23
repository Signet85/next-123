
'use client';
import React from 'react'
import {Button} from "@heroui/button";
import { FaRegSmile } from 'react-icons/fa';
import Link from 'next/link';

export default function page() {
  return (
    <div>  
      <Button 
      as = {Link}
      href='/members'
      color="primary" 
      variant="bordered" 
      startContent={<FaRegSmile size={20}/>}>
      click me
      </Button>
    </div>  
    )
}

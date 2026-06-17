"use client";
import React from 'react'
import BookStepper from './BookStepper';
import { BookProvider } from '@/context/BookContext';

const page = () => {
  return (
    <div>
      <BookProvider>
      <BookStepper/>
      </BookProvider>
      
    </div>
  )
}

export default page

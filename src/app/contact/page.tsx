'use client'
import React, { FormEvent, useState } from 'react';
import { Meteors } from "@/components/ui/meteors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { div } from 'framer-motion/client';


function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
   
    <div className='flex justify-center items-center h-screen pt-10'>
    <div className="max-w-md mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      Welcome To My Portfolio
    </h2>
    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      Get In Touch
    </p>

    <form className="my-8" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">Your Good Name</Label>
          <Input id="firstname" placeholder="Rejo Rajan" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Contact Number</Label>
          <Input id="lastname" placeholder="0123456789" type="text" />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="example123@gmail.com" type="email" />
      </LabelInputContainer>
     
      

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Submit &rarr;
        
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
      </div>
    </form>
    <Meteors number={20} />   
  </div>  
  </div>     
  ); 
}



const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};



export default page


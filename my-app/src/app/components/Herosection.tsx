import React from 'react'
import Link from 'next/link'
import { Button } from "./ui/moving-border";

import {Spotlight} from '@/app/components/ui/SpotLight'
function Herosection() {
  return (
    <div
      className='h-auto md:h-[40rem] w-full rounded-full flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-0'>
      <div className='p-4 relative z-10 w-full text-center'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Reet Associates</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quos eligendi, enim voluptate perferendis similique deserunt fuga laudantium a minima, totam rem asperiores unde iste nostrum consectetur suscipit dolorem beatae? Quibusdam, neque rerum molestias quasi libero praesentium unde est suscipit minus ad voluptatem obcaecati eius quas vitae recusandae autem qui.</p>
        <div className='mt-4'>
          <Link href={"/course"}>
            
            <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Join Our Family
      </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Herosection
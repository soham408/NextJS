'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero illum obcaecati nemo natus repellendus est cum sint, facilis commodi nihil. Asperiores natus reprehenderit ratione.",
    name: 'Alex Johnson',
    title: 'Pet photography Student',
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quod ut voluptatum. Nihil, magni soluta eos natus aliquam fugiat! Dicta magnam omnis dignissimos facilis temporibus.",
    name: 'Samantha Lee',
    title: 'Wildlife photography Student',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic ab? Nisi qui perspiciatis dolores quasi, quis officiis facilis sit eos eaque numquam ea quibusdam!",
    name: 'Michael Chen',
    title: ' Equine photography Student',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolores libero harum facere. Magni hic omnis dicta modi nihil, dolorem reprehenderit culpa aliquam voluptatibus id.",
    name: 'Emily Taylor',
    title: 'Real estate photography Student',
  },
  {
    quote:
     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, eum, iure recusandae ducimus accusamus cum fuga ipsa deserunt voluptates obcaecati odit possimus architecto quas.",
    name: 'Chris Morales',
    title: 'Sports photography Student',
  },
];


function PicCards() {
  return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default PicCards
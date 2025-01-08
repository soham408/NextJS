import Link from "next/link"
import { Spotlight } from "./Spotlight"
import { Button } from "./moving-border"

function HeroSection() {
  return (
    <div
    className="text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relstive overflow-hidden mx-auto py-10 md:py-0"
    >
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
      <div className="p-4 relative z-10 w-full text-center">
     
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master The Art Of Photography</h1>
        <p
        className="mt-4 font-normal text-base md:text-lg text-natural-300 mx-w-lg mx-auto"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quibusdam reprehenderit nemo impedit nostrum repudiandae nobis harum mollitia unde perferendis, excepturi sed incidunt aspernatur voluptas dolorem. Maxime voluptatibus illo totam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime voluptatibus illo totam.</p>
        <div className="mt-4">
        <Link href={"/courses"}>
        <Button>
        Explore Courses

        </Button>
        </Link>
        </div>
      </div>
      </div>
  )
}

export default HeroSection
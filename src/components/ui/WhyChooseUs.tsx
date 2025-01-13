"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover Your Photography with Us: A Personal Journey in Photography',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam rerum fugiat cum facilis maiores, possimus repudiandae reprehenderit exercitationem? Libero impedit totam eos maxime ipsam, aliquam odit? Laboriosam minima recusandae, beatae corporis minus nostrum, voluptatum quasi dolore quam sequi adipisci omnis corrupti, sint laudantium deserunt! Expedita magni error commodi itaque.",
    },
    {
      title: 'Discover Your Photography with Us: A Personal Journey in Photography',
      description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate itaque culpa architecto ipsam. In sunt mollitia magni quod molestiae, numquam ea ab reiciendis ipsam eligendi officia ad culpa nihil id ut neque aspernatur aliquam possimus labore! Nesciunt architecto autem deleniti nobis voluptas laboriosam, quod eos ex. Illo, aperiam repudiandae.",
    },
    {
      title: 'Discover Your Photography with Us: A Personal Journey in Photography',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, porro animi fuga eaque voluptate, corrupti, officiis saepe neque harum esse labore. Iste consectetur aperiam harum ut? Facilis beatae quae est accusamus, harum reprehenderit quaerat iste rem architecto corporis eaque nulla earum illum. Earum commodi unde eius soluta excepturi minus a?",
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quod illo a quam hic unde magnam porro. Sequi culpa, doloremque adipisci vitae aliquam dignissimos magni quibusdam cum quod unde modi totam accusantium nihil quos suscipit soluta? Animi, repellendus? Adipisci repudiandae eius non dolore modi odio, maxime ipsa beatae dolorum?",
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias distinctio obcaecati officia accusantium. Quia excepturi modi, libero, dignissimos omnis quod, alias ex tempora aliquam sunt ut facilis. Labore magni esse laboriosam repellat fuga amet deserunt ratione cum obcaecati, quae quasi? Ipsum animi aspernatur voluptas tempora non explicabo fuga quae?",
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo corrupti ipsam totam voluptates laudantium nemo placeat voluptatum in id? Totam omnis, aspernatur tempore aliquid vel rerum neque. Quidem, voluptatibus, ullam omnis quaerat nemo molestiae repudiandae possimus beatae magnam ab tenetur natus accusamus quod illum dolor ex deleniti animi earum.",
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
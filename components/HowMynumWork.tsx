'use client'
import { sale } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'
const HowMynumWork = () => {
  return (
    <section className="px-3">
      <motion.h2
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        }
      }}
      className="text-3xl md:text-4xl font-semibold">How MyEnum Works ?</motion.h2>
      <motion.div
        initial={{
          opacity: 0,
          y:100
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay:1
          },
          y:0
        }}
      className="flex justify-center items-center gap-3 my-5 max-md:flex-col">
        <div className="w-1/2 text-xl flex flex-col gap-y-3 max-md:w-full">
          <p>
            <span className="font-semibold">🚀 Step 1: Input Data –</span>{" "}
            Upload or integrate datasets via APIs, spreadsheets, or databases.
          </p>
          <p>
            <span className="font-semibold">
              ⚡ Step 2: Choose Enumeration Type –
            </span>{" "}
            Select from structured numbering, categorical classification,
            hierarchical indexing, or custom schema-based enumeration.
          </p>
          <p>
            <span className="font-semibold">
              🤖 Step 3: Smart Processing –{" "}
            </span>
            AI-driven automation detects patterns, assigns sequences, and
            eliminates duplicates.
          </p>
          <p>
            <span className="font-semibold">
              📊 Step 4: Export & Integrate –
            </span>
            Download structured data or integrate directly into enterprise
            systems.
          </p>
          <p className="mt-5">
            With <span className="font-semibold">MyEnum</span>, you can automate
            and scale enumeration effortlessly, reducing errors and boosting
            efficiency.
          </p>
        </div>
        <div className="w-1/2 max-md:w-full">
        <Image src={sale} alt="sale" width={500} height={500} className="w-full rounded-2xl"/>
        </div>
      </motion.div>
    </section>
  );
};

export default HowMynumWork;

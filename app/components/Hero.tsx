"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <>
      <section
        className="relative w-full overflow-hidden min-h-[440px] md:min-h-[595px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(1,2,73,0.50) 0%, rgba(1,2,73,0.50) 100%), url('/images/hero-bg.jpg') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-12 md:px-[59px] md:py-[100px] font-[family-name:var(--font-roboto-slab)]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: "#D4E3FF", fontWeight: 400 }}
            className="w-full max-w-[484px] text-[16px] md:text-[24px]"
          >
            For nearly 5 decades, Our reputation has been earned through decades of principled legal practice.
          </motion.p>

          <div className="mt-10 md:mt-16 flex flex-col items-start w-full max-w-[532px] md:ml-auto">
            <BlurText
              as="h1"
              text="Built on Justice. Guided by Ethics."
              delay={120}
              animateBy="words"
              direction="top"
              className="text-[30px] md:text-[48px]"
              style={{
                color: "#FFF",
                fontWeight: 400,
                lineHeight: "134%",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                margin: 0,
              }}
            />

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 md:mt-8 bg-white text-black rounded-[4px] py-3 px-5 md:py-4 md:px-6 flex items-center gap-4 md:gap-8 font-medium text-sm md:text-base"
            >
              Speak to a Lawyer
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.11378 4.66752C5.98962 4.79242 5.91992 4.96139 5.91992 5.13752C5.91992 5.31364 5.98962 5.48261 6.11378 5.60751L8.47378 8.00085L6.11378 10.3608C5.98962 10.4858 5.91992 10.6547 5.91992 10.8308C5.91992 11.007 5.98962 11.1759 6.11378 11.3008C6.17576 11.3633 6.24949 11.4129 6.33073 11.4468C6.41197 11.4806 6.49911 11.498 6.58712 11.498C6.67512 11.498 6.76226 11.4806 6.8435 11.4468C6.92474 11.4129 6.99847 11.3633 7.06045 11.3008L9.88712 8.47418C9.9496 8.41221 9.9992 8.33847 10.033 8.25723C10.0669 8.17599 10.0843 8.08886 10.0843 8.00085C10.0843 7.91284 10.0669 7.8257 10.033 7.74446C9.9992 7.66322 9.9496 7.58949 9.88712 7.52751L7.06045 4.66752C6.99847 4.60503 6.92474 4.55543 6.8435 4.52159C6.76226 4.48774 6.67512 4.47032 6.58712 4.47032C6.49911 4.47032 6.41197 4.48774 6.33073 4.52159C6.24949 4.55543 6.17576 4.60503 6.11378 4.66752Z"
                  fill="black"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row bg-[#F9FCE4] font-[family-name:var(--font-roboto-slab)]">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-[59px] md:py-16">
          <p className="text-[16px] md:text-[20px] leading-[180%] text-[#525731] mb-4">
            Established 1977
          </p>
          <h2 className="text-[24px] md:text-[32px] leading-[138%] tracking-[-0.32px] uppercase text-black mb-6">
            Built on Justice.
            <br />
            Guided by Ethics.
          </h2>
          <a href="#" className="underline font-medium w-fit">
            Learn More
          </a>
        </div>

        <div
          className="relative flex-none md:flex-1 min-w-0 h-[280px] md:h-[556px]"
          style={{
            overflow: "hidden",
            backgroundColor: "#0d0605",
          }}
        >
          <Image
            src="/images/hero-judge-full.jpg"
            alt="Judge"
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ objectFit: "contain", objectPosition: "50% 50%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(91deg, rgba(0,0,0,0.66) 22.52%, rgba(51,51,51,0.33) 51.2%, rgba(102,102,102,0.00) 62.82%)",
            }}
          />
        </div>
      </section>
    </>
  );
}

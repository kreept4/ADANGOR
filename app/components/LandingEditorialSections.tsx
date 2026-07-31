"use client";

import { useMemo, useState } from "react";
import { articles, books, featured } from "../data/publications";
import "./LandingEditorialSections.css";

const people = [
  { name: "Advocacy", role: "Prepared for the record", image: "/images/hero-judge.jpg" },
  { name: "Judgment", role: "Guided by ethics", image: "/images/hero-judge-full.jpg" },
  { name: "The chambers", role: "Abuja · Port Harcourt", image: "/images/hero-bg.jpg" },
  { name: "Scholarship", role: "A published legal record", image: "/images/zach-book.png" },
  { name: "Justice", role: "The standard we keep", image: "/images/hero-holographic.jpg" },
];

function titleOf(citation: string) {
  const match = citation.match(/[“"]([^”"]+)[”"]/);
  return match?.[1] ?? citation.split(" (")[0];
}

export default function LandingEditorialSections() {
  const [activeFilter, setActiveFilter] = useState("All");

  const stories = useMemo(() => {
    const entries =
      activeFilter === "Books"
        ? books
        : activeFilter === "Articles"
          ? [featured, ...articles]
          : [featured, articles[0], books[0] ?? featured];
    return entries.slice(0, 3);
  }, [activeFilter]);

  return (
    <div className="landing-editorial">
      <section className="people-section" aria-labelledby="people-title">
        <div className="people-grid" aria-hidden="true">
          {people.map((person, index) => (
            <figure className={`people-card people-card-${index + 1}`} key={person.name}>
              <img src={person.image} alt="" />
            </figure>
          ))}
        </div>
        <div className="people-intro">
          <p className="section-kicker">EZENUWA CHAMBERS</p>
          <h2 id="people-title">Principled counsel for matters that carry weight.</h2>
          <p className="people-body">
            From first consultation to final argument, every instruction is met with clear advice,
            careful preparation and a steady hand.
          </p>
          <a className="editorial-link" href="/about">Meet the chambers <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="news-section" aria-labelledby="news-title">
        <div className="news-header">
          <h2 id="news-title">News Center</h2>
          <p>Read the latest from the chambers.</p>
        </div>
        <div className="news-filters" role="group" aria-label="Filter publications">
          {["All", "Articles", "Books"].map((filter) => (
            <button
              type="button"
              className={activeFilter === filter ? "is-active" : ""}
              onClick={() => setActiveFilter(filter)}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="news-grid">
          {stories.map((story, index) => (
            <article className="news-card" key={`${story.citation}-${index}`}>
              <div className="news-card-image">
                <img src={index === 0 ? featured.cover : people[(index + 1) % people.length].image} alt="" />
              </div>
              <div className="news-card-body">
                <p className="news-card-type">{activeFilter === "Books" ? "Book & chapter" : "Journal article"}</p>
                <h3>{titleOf(story.citation)}</h3>
                <div className="news-card-footer">
                  <span>Prof. Z. Adangor</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

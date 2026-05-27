import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import classroomImg from "@/assets/facility-classroom.jpg";
import campusImg from "@/assets/facility-campus.jpg";
import activities from "@/assets/gallery/excursion.jpg";
import dev from "@/assets/gallery/awards.jpg";
import learning from "@/assets/gallery/classroom.jpg";

const items = [
  { t: "Modern Classrooms", d: "Bright, ventilated and well-equipped spaces that foster focus and creativity.", img: classroomImg, span: "lg:col-span-2 lg:row-span-2" },
  { t: "Learning Environment", d: "Curated resources and intentional design that make learning a delight.", img: learning, span: "" },
  { t: "School Activities", d: "Sports, excursions, arts and clubs that build confidence and friendships.", img: activities, span: "" },
  { t: "Student Development", d: "Mentorship, awards and recognition to celebrate every achievement.", img: dev, span: "lg:col-span-2" },
  { t: "Safe Campus", d: "Secure perimeter, trained staff and a culture of care for every child.", img: campusImg, span: "" },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Facilities"
          title={<>A campus designed for <span className="text-gradient-gold">young minds</span></>}
        />

        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:h-[640px]">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft hover-lift ${it.span}`}
            >
              <img src={it.img} alt={it.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-deep via-royal-deep/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Facility</div>
                <h3 className="mt-2 font-display text-2xl font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-white/85 max-w-md">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

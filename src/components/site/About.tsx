import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Calendar, Users, Building, Award, FileCheck, GraduationCap } from "lucide-react";

const milestones = [
  { y: "1999", t: "A Single Pupil", d: "Founded by Mrs. Titilayo Christiana Onyia as a lesson centre with one child, Rashidat Ibrahim, at Assemblies of God Church Auditorium, Gbazango, Kubwa Abuja.", icon: GraduationCap },
  { y: "2000", t: "First PTA Inaugurated", d: "Under the chairmanship of Mr. S.A Oboh, the school's first PTA met to discuss land acquisition and development.", icon: Users },
  { y: "2001", t: "Path to a New Home", d: "Second PTA meeting held to plan the school's movement to its temporary site.", icon: Calendar },
  { y: "2002", t: "A Permanent Campus", d: "The school moved fully into its current structure, expanded its staff and laid the foundation for growth.", icon: Building },
  { y: "2003", t: "First Common Entrance", d: "Eight pupils sat for the first common entrance exam — the beginning of a tradition of academic success.", icon: Award },
  { y: "2007", t: "Officially Incorporated", d: "Registered with CAC in February 2007 (RC 682911). Approved and managed by qualified professionals.", icon: FileCheck },
];

export function About() {
  return (
    <section id="about" className="relative py-28 bg-gradient-cream overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Story"
          title={<>A quarter century of <span className="text-gradient-gold">building futures</span></>}
          intro="From a single pupil in a church auditorium to a beloved institution in Abuja — every milestone has been a step toward shaping the leaders of tomorrow."
        />

        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={m.y}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`md:grid md:grid-cols-2 md:gap-12 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className={`${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="font-display text-5xl font-bold text-gradient-gold">{m.y}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{m.t}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{m.d}</p>
                  </div>
                  <div className="hidden md:flex justify-center relative">
                    <div className="absolute h-14 w-14 rounded-full bg-gold/20 blur-xl" />
                    <div className="relative h-14 w-14 rounded-full bg-gradient-royal flex items-center justify-center shadow-elegant ring-4 ring-cream">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

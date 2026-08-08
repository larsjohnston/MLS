import { faqs, faqCategories } from "@/data/faqs";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand, Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "FAQ | Commercial Locksmith Questions Answered",
  description:
    "Answers to common commercial locksmith questions in Winnipeg — response times, pricing, rekeying vs replacement, key control, access control, safes, licensing and service coverage.",
  path: "/faq",
});

const crumbs = [{ href: "/faq", label: "FAQ" }];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="Frequently asked questions"
        title="Straight answers, before you pick up the phone"
        blurb="Everything commercial clients ask us most — pricing, response times, key control, access control, safes and coverage. If your question is not here, call and ask."
        crumbs={crumbs}
        badges={["No sales pitch", "Real answers", "Ask us anything"]}
      />
      <TrustBar />

      {faqCategories.map((category, idx) => {
        const items = faqs.filter((f) => f.category === category);
        if (!items.length) return null;
        return (
          <Section key={category} tone={idx % 2 === 0 ? "white" : "light"}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr]">
              <SectionHeading eyebrow="Category" title={category} />
              <FaqAccordion items={items} defaultOpen={null} />
            </div>
          </Section>
        );
      })}

      <CtaBand
        title="Still have a question?"
        blurb="Call and ask. We would rather spend two minutes on the phone than have you guess — and we will tell you if you do not need us."
      />
    </>
  );
}

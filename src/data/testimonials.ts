/**
 * ⚠️  PLACEHOLDER CONTENT — DO NOT PUBLISH AS-IS.
 *
 * These are illustrative examples showing the shape and tone of testimonials
 * that suit this site. Replace every entry with real, attributable quotes —
 * ideally pulled from your Google Business Profile — before launch, and delete
 * any you cannot source. Publishing invented reviews is both a trust problem
 * and, under Canada's Competition Act, a legal one.
 *
 * When you have real reviews, set `isPlaceholder` to false and the amber
 * "placeholder" notice will disappear from the site automatically.
 */

export const testimonialsArePlaceholder = true;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
  industry: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Called first thing in the morning when our walk-in cooler lock failed and we could not get to the prep. A technician came out that morning and had it working before lunch service.",
    name: "[Name]",
    role: "General Manager",
    org: "[Restaurant name]",
    industry: "Restaurants & Hospitality",
  },
  {
    quote:
      "They rebuilt a master key system nobody had documentation for across six buildings. For the first time we can actually say who holds what, and adding a door is now a phone call instead of a project.",
    name: "[Name]",
    role: "Facilities Manager",
    org: "[Property management company]",
    industry: "Property Management",
  },
  {
    quote:
      "We had a break-in over the weekend. They came out Monday, secured the door, repaired the frame properly, and gave us documentation our insurer accepted without a single question.",
    name: "[Name]",
    role: "Owner",
    org: "[Retail business]",
    industry: "Retail",
  },
  {
    quote:
      "Straight advice. We asked for access control on every door and they talked us out of half of it, then explained exactly why those doors did not need it. Saved us a significant amount of money.",
    name: "[Name]",
    role: "Operations Director",
    org: "[Manufacturing company]",
    industry: "Warehouse & Industrial",
  },
];

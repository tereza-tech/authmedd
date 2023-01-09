import { source as b1 } from './blog-1'
import b1s from './blog-2.png'
import { source as b2 } from './blog-2'
import b2s from './blog-1.png'
import { source as b3 } from './blog-3'
import b3s from './blog-3.png'
import { source as b4 } from './blog-4'
import b4s from './blog-4.png'
import { source as b5 } from './blog-5'
import b5s from './blog-5.png'

import { source as c1 } from './contact-1'
import c1s from './contact-1.png'
import { source as c2 } from './contact-2'
import c2s from './contact-2.png'
import { source as c3 } from './contact-3'
import c3s from './contact-3.png'

import { source as d1 } from './content-1'
import d1s from './content-1.png'
import { source as d2 } from './content-2'
import d2s from './content-2.png'
import { source as d3 } from './content-3'
import d3s from './content-3.png'
import { source as d4 } from './content-4'
import d4s from './content-4.png'
import { source as d5 } from './content-5'
import d5s from './content-5.png'
import { source as d6 } from './content-6'
import d6s from './content-6.png'
import { source as d7 } from './content-7'
import d7s from './content-7.png'
import { source as d8 } from './content-8'
import d8s from './content-8.png'

import { source as a1 } from './cta-1'
import a1s from './cta-1.png'
import { source as a2 } from './cta-2'
import a2s from './cta-2.png'
import { source as a3 } from './cta-3'
import a3s from './cta-3.png'
import { source as a4 } from './cta-4'
import a4s from './cta-4.png'

import { source as e1 } from './ecommerce-1'
import e1s from './ecommerce-1.png'
import { source as e2 } from './ecommerce-2'
import e2s from './ecommerce-2.png'
import { source as e3 } from './ecommerce-3'
import e3s from './ecommerce-3.png'

import { source as f1 } from './feature-1'
import f1s from './feature-1.png'
import { source as f2 } from './feature-2'
import f2s from './feature-2.png'
import { source as f3 } from './feature-3'
import f3s from './feature-3.png'
import { source as f4 } from './feature-4'
import f4s from './feature-4.png'
import { source as f5 } from './feature-5'
import f5s from './feature-5.png'
import { source as f6 } from './feature-6'
import f6s from './feature-6.png'
import { source as f7 } from './feature-7'
import f7s from './feature-7.png'
import { source as f8 } from './feature-8'
import f8s from './feature-8.png'

import { source as z1 } from './footer-1'
import z1s from './footer-1.png'
import { source as z2 } from './footer-2'
import z2s from './footer-2.png'
import { source as z3 } from './footer-3'
import z3s from './footer-3.png'
import { source as z4 } from './footer-4'
import z4s from './footer-4.png'
import { source as z5 } from './footer-5'
import z5s from './footer-5.png'

import { source as g1 } from './gallery-1'
import g1s from './gallery-1.png'
import { source as g2 } from './gallery-2'
import g2s from './gallery-2.png'
import { source as g3 } from './gallery-3'
import g3s from './gallery-3.png'

import { source as h1 } from './header-1'
import h1s from './header-1.png'
import { source as h2 } from './header-2'
import h2s from './header-2.png'
import { source as h3 } from './header-3'
import h3s from './header-3.png'
import { source as h4 } from './header-4'
import h4s from './header-4.png'

import { source as r1 } from './hero-1'
import r1s from './hero-1.png'
import { source as r2 } from './hero-2'
import r2s from './hero-2.png'
import { source as r3 } from './hero-3'
import r3s from './hero-3.png'
import { source as r4 } from './hero-4'
import r4s from './hero-4.png'
import { source as r5 } from './hero-5'
import r5s from './hero-5.png'
import { source as r6 } from './hero-6'
import r6s from './hero-6.png'

import { source as p1 } from './pricing-1'
import p1s from './pricing-1.png'
import { source as p2 } from './pricing-2'
import p2s from './pricing-2.png'

import { source as s1 } from './statistic-1'
import s1s from './statistic-1.png'
import { source as s2 } from './statistic-2'
import s2s from './statistic-2.png'
import { source as s3 } from './statistic-3'
import s3s from './statistic-3.png'

import { source as q1 } from './step-1'
import q1s from './step-1.png'
// import { source as q2 } from './step-2'
// import q2s from './step-2.png'
import { source as q3 } from './step-3'
import q3s from './step-3.png'

import { source as t1 } from './team-1'
import t1s from './team-1.png'
import { source as t2 } from './team-2'
import t2s from './team-2.png'
import { source as t3 } from './team-3'
import t3s from './team-3.png'

import { source as m1 } from './testimonial-1'
import m1s from './testimonial-1.png'
import { source as m2 } from './testimonial-2'
import m2s from './testimonial-2.png'
import { source as m3 } from './testimonial-3'
import m3s from './testimonial-3.png'

import { getPngHtml } from '../../../utils'

const sources = [
  {
    id: 'blog-block-1',
    // class: 'fa fa-map-o',
    class: '',
    label: getPngHtml(b1s),
    // label: 'b2s().outerHTML',
    content: b1,
    category: 'Blog',
    // order: 1
  },
  {
    id: 'blog-block-2',
    class: '',
    label: getPngHtml(b2s),
    content: b2,
    category: 'Blog',
    // order: 1
  },
  {
    id: 'blog-block-3',
    class: '',
    label: getPngHtml(b3s),
    content: b3,
    category: 'Blog',
    // order: 1
  },
  {
    id: 'blog-block-4',
    class: '',
    label: getPngHtml(b4s),
    content: b4,
    category: 'Blog',
    // order: 1
  },
  {
    id: 'blog-block-5',
    class: '',
    label: getPngHtml(b5s),
    content: b5,
    category: 'Blog',
    // order: 1
  },
  {
    id: 'contact-block-1',
    class: '',
    label: getPngHtml(c1s),
    content: c1,
    category: 'Contact',
    // order: 1
  },
  {
    id: 'contact-block-2',
    class: '',
    label: getPngHtml(c2s),
    content: c2,
    category: 'Contact',
    // order: 1
  },
  {
    id: 'contact-block-3',
    class: '',
    label: getPngHtml(c3s),
    content: c3,
    category: 'Contact',
    // order: 1
  },
  {
    id: 'content-block-1',
    class: '',
    label: getPngHtml(d1s),
    content: d1,
    category: 'Content',
    // order: 1
  },
  {
    id: 'content-block-2',
    class: '',
    label: getPngHtml(d2s),
    content: d2,
    category: 'Content',
    // order: 1
  },
  {
    id: 'content-block-3',
    class: '',
    label: getPngHtml(d3s),
    content: d3,
    category: 'Content',
    // order: 1
  },
  {
    id: 'content-block-4',
    class: '',
    label: getPngHtml(d4s),
    content: d4,
    category: 'Content',
    // order: 1
  },
  {
    id: 'content-block-5',
    class: '',
    label: getPngHtml(d5s),
    content: d5,
    category: 'Content',
    // order: 1
  },
  {
    id: 'content-block-6',
    class: '',
    label: getPngHtml(d6s),
    content: d6,
    category: 'Content',
    // order: 1
  },
  {
    id: 'content-block-7',
    class: '',
    label: getPngHtml(d7s),
    content: d7,
    category: 'Content',
    // order: 1
  },
  {
    id: 'content-block-8',
    class: '',
    label: getPngHtml(d8s),
    content: d8,
    category: 'Content',
    // order: 1
  },
  {
    id: 'cta-block-1',
    class: '',
    label: getPngHtml(a1s),
    content: a1,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'cta-block-2',
    class: '',
    label: getPngHtml(a2s),
    content: a2,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'cta-block-3',
    class: '',
    label: getPngHtml(a3s),
    content: a3,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'cta-block-4',
    class: '',
    label: getPngHtml(a4s),
    content: a4,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'commerce-block-1',
    class: '',
    label: getPngHtml(e1s),
    content: e1,
    category: 'Commerce',
    // order: 1
  },
  {
    id: 'commerce-block-2',
    class: '',
    label: getPngHtml(e2s),
    content: e2,
    category: 'Commerce',
    // order: 1
  },
  {
    id: 'commerce-block-3',
    class: '',
    label: getPngHtml(e3s),
    content: e3,
    category: 'Commerce',
    // order: 1
  },
  {
    id: 'feature-block-1',
    class: '',
    label: getPngHtml(f1s),
    content: f1,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-2',
    class: '',
    label: getPngHtml(f2s),
    content: f2,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-3',
    class: '',
    label: getPngHtml(f3s),
    content: f3,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-4',
    class: '',
    label: getPngHtml(f4s),
    content: f4,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-5',
    class: '',
    label: getPngHtml(f5s),
    content: f5,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-6',
    class: '',
    label: getPngHtml(f6s),
    content: f6,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-7',
    class: '',
    label: getPngHtml(f7s),
    content: f7,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-8',
    class: '',
    label: getPngHtml(f8s),
    content: f8,
    category: 'Features',
    // order: 1
  },
  {
    id: 'footer-block-1',
    class: '',
    label: getPngHtml(z1s),
    content: z1,
    category: 'Footer',
    // order: 1
  },
  {
    id: 'footer-block-2',
    class: '',
    label: getPngHtml(z2s),
    content: z2,
    category: 'Footer',
    // order: 1
  },
  {
    id: 'footer-block-3',
    class: '',
    label: getPngHtml(z3s),
    content: z3,
    category: 'Footer',
    // order: 1
  },
  {
    id: 'footer-block-4',
    class: '',
    label: getPngHtml(z4s),
    content: z4,
    category: 'Footer',
    // order: 1
  },
  {
    id: 'footer-block-5',
    class: '',
    label: getPngHtml(z5s),
    content: z5,
    category: 'Footer',
    // order: 1
  },
  {
    id: 'gallery-block-1',
    class: '',
    label: getPngHtml(g1s),
    content: g1,
    category: 'Gallery',
    // order: 1
  },
  {
    id: 'gallery-block-2',
    class: '',
    label: getPngHtml(g2s),
    content: g2,
    category: 'Gallery',
    // order: 1
  },
  {
    id: 'gallery-block-3',
    class: '',
    label: getPngHtml(g3s),
    content: g3,
    category: 'Gallery',
    // order: 1
  },
  {
    id: 'header-block-1',
    class: '',
    label: getPngHtml(h1s),
    content: h1,
    category: 'Header',
    // order: 1
  },
  {
    id: 'header-block-2',
    class: '',
    label: getPngHtml(h2s),
    content: h2,
    category: 'Header',
    // order: 1
  },
  {
    id: 'header-block-3',
    class: '',
    label: getPngHtml(h3s),
    content: h3,
    category: 'Header',
    // order: 1
  },
  {
    id: 'header-block-4',
    class: '',
    label: getPngHtml(h4s),
    content: h4,
    category: 'Header',
    // order: 1
  },
  {
    id: 'hero-block-1',
    class: '',
    label: getPngHtml(r1s),
    content: r1,
    category: 'Hero',
    // order: 1
  },
  {
    id: 'hero-block-2',
    class: '',
    label: getPngHtml(r2s),
    content: r2,
    category: 'Hero',
    // order: 1
  },
  {
    id: 'hero-block-3',
    class: '',
    label: getPngHtml(r3s),
    content: r3,
    category: 'Hero',
    // order: 1
  },
  {
    id: 'hero-block-4',
    class: '',
    label: getPngHtml(r4s),
    content: r4,
    category: 'Hero',
    // order: 1
  },
  {
    id: 'hero-block-5',
    class: '',
    label: getPngHtml(r5s),
    content: r5,
    category: 'Hero',
    // order: 1
  },
  {
    id: 'hero-block-6',
    class: '',
    label: getPngHtml(r6s),
    content: r6,
    category: 'Hero',
    // order: 1
  },
  {
    id: 'pricing-block-1',
    class: '',
    label: getPngHtml(p1s),
    content: p1,
    category: 'Pricing',
    // order: 1
  },
  {
    id: 'pricing-block-2',
    class: '',
    label: getPngHtml(p2s),
    content: p2,
    category: 'Pricing',
    // order: 1
  },
  {
    id: 'statistic-block-1',
    class: '',
    label: getPngHtml(s1s),
    content: s1,
    category: 'Statistics',
    // order: 1
  },
  {
    id: 'statistic-block-2',
    class: '',
    label: getPngHtml(s2s),
    content: s2,
    category: 'Statistics',
    // order: 1
  },
  {
    id: 'statistic-block-3',
    class: '',
    label: getPngHtml(s3s),
    content: s3,
    category: 'Statistics',
    // order: 1
  },
  {
    id: 'step-block-1',
    class: '',
    label: getPngHtml(q1s),
    content: q1,
    category: 'Steps',
    // order: 1
  },
  // {
  //   id: 'step-block-2',
  //   class: '',
  //   label: getPngHtml(q2s),
  //   content: q2,
  //   category: 'Steps',
  //   // order: 1
  // },
  {
    id: 'step-block-3',
    class: '',
    label: getPngHtml(q3s),
    content: q3,
    category: 'Steps',
    // order: 1
  },
  {
    id: 'team-block-1',
    class: '',
    label: getPngHtml(t1s),
    content: t1,
    category: 'Team',
    // order: 1
  },
  {
    id: 'team-block-2',
    class: '',
    label: getPngHtml(t2s),
    content: t2,
    category: 'Team',
    // order: 1
  },
  {
    id: 'team-block-3',
    class: '',
    label: getPngHtml(t3s),
    content: t3,
    category: 'Team',
    // order: 1
  },
  {
    id: 'testimonial-block-1',
    class: '',
    label: getPngHtml(m1s),
    content: m1,
    category: 'Testimonials',
    // order: 1
  },
  {
    id: 'testimonial-block-2',
    class: '',
    label: getPngHtml(m2s),
    content: m2,
    category: 'Testimonials',
    // order: 1
  },
  {
    id: 'testimonial-block-3',
    class: '',
    label: getPngHtml(m3s),
    content: m3,
    category: 'Testimonials',
    // order: 1
  },
]

const loadTailwindBlocks = (newEditor: { BlockManager: any }): void => {
  const blockManager = newEditor.BlockManager

  sources.forEach((s) => {
    blockManager.add(s.id, {
      label: s.label,
      attributes: { class: s.class },
      content: s.content,
      category: { label: s.category, open: s.category === 'Features' },
    })
  })
}
export { loadTailwindBlocks }

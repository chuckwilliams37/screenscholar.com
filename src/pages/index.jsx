import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.png'
import image4 from '@/images/photos/image-4.png'
import image5 from '@/images/photos/image-5.png'
import logoScreenScholar from '@/images/logos/screenscholar.png'
import logoFlote from '@/images/logos/flote.app.svg'
import logoAgileThought from '@/images/logos/agilethought.jpg'
import logoEquaGlobal from '@/images/logos/Equa-logo-white-transparent-300x131.png'
import logoDash from '@/images/logos/dash_logo_2018_rgb_for_screens.png'
import logoPlayerLync from '@/images/logos/playerlync_logo.png'
import logoOppenheimerfunds from '@/images/logos/ofilogonotagblackdigital.png'
import logoLevel3 from '@/images/logos/Level_3_Communications-Logo.png'
import logoEffectiveUI from '@/images/logos/EffectiveUI_logo_4c-01v2.png'
import logoNYK from '@/images/logos/nyk-logistics-megacarrier-logo-8902054D1D-seeklogo.png'
import logoMOD from '@/images/logos/logo-mod-color.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

const resumeFilePath = '/assets/ChuckWilliams-Web2_3_1page_20221024.2158CT.pdf'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Screen Scholar',
      title: 'Founder, Consultant, Developer, Freelance Contractor',
      logo: logoScreenScholar,
      start: 'May 2007',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Flote.app',
      title: 'Chief Experience Officer (CXO)',
      logo: logoFlote,
      start: 'Jan 2021',
      end: 'Jun 2022',
    },
    {
      company: 'Agile Thought',
      title: 'Technical Architect',
      logo: logoAgileThought,
      start: 'Jan 2020',
      end: 'Jan 2021',
    },
    {
      company: 'Equa Start, LLC',
      title: 'Product, Experience, and Technical Development Lead',
      logo: logoEquaGlobal,
      start: 'Dec 2018',
      end: 'Dec 2019',
    },
    {
      company: 'Dash Core Group, Inc.',
      title: 'Head of UI / UX',
      logo: logoDash,
      start: 'Jan 2017',
      end: 'Jun 2018',
    },
    {
      company: 'PlayerLync, LLC',
      title: 'User Experience & Interface Lead / SCRUM Master',
      logo: logoPlayerLync,
      start: 'Jan 2015',
      end: 'Jun 2017',
    },
    {
      company: 'Oppenheimerfunds, Inc.',
      title: 'Senior Programmer / Analyst - Internet',
      logo: logoOppenheimerfunds,
      start: 'Sep 2013',
      end: 'Dec 2014',
    },
    {
      company: 'Level 3 Communications, Inc.',
      title: 'Senior Software Architect',
      logo: logoLevel3,
      start: 'Sep 2011',
      end: 'Sep 2013',
    },
    {
      company: 'Effective UI, Inc.',
      title:
        'Practice Lead, Software Architect, Senior Sales Engineering Consultant',
      logo: logoEffectiveUI,
      start: 'May 2008',
      end: 'Apr 2011',
    },
    {
      company: 'NYK Logistics, Americas',
      title: 'Solutions Architect',
      logo: logoNYK,
      start: 'Jun 2006',
      end: 'May 2008',
    },
    {
      company: 'Mind Over Data, LLC',
      title: 'Senior Business Analyst',
      logo: logoMOD,
      start: 'Apr 2004',
      end: 'Jun 2006',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-100 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className=" h-10 w-10 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href={resumeFilePath}
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
        download
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Chuck Williams</title>
        <meta
          name="description"
          content="I'm Chuck Williams - patented UI/UX developer, consultant,
            radio/podcast host, public presenter, and cryptocurrency
            professional."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Chuck Williams - patented UI/UX developer, consultant,
            radio/podcast host, public presenter, and cryptocurrency
            professional
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400"></p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/chuckwilliams37"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.instagram.com/chuckwilliams37/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
              target="_blank"
            />
            <SocialLink
              href="https://github.com/chuckwilliams37"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.linkedin.com/in/chuckcwilliams/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}

            <p>
              I believe that evolved, empathic problem solving involves clear
              assessment of reality, honest & transparent communications, and
              the capability to push through to results. I make this work my
              art.
            </p>
            <p>
              I intend to bring value crafting elegant interfaces & experiences,
              identifying & pursuing growth opportunities, and building software
              that aligns with my dream of voluntary interactions for all
              individuals, and a society free from coercion.
            </p>
            <p>
              Strengths include business communications skills, measurable
              productivity, strategic planning, project direction, team
              management, and elegant problem solving in the realms of
              application code, systems architecture, and data management. Also
              heavy advocate for purposeful living, empathy, meditation, and
              radical transparency.
            </p>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}

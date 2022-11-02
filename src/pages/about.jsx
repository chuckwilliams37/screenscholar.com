import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import basicBookImage from '@/images/photos/ibm-pc-jr-vb-hands-on.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Chuck Williams</title>
        <meta
          name="description"
          content="I'm Chuck Williams - patented UI/UX developer, consultant,
            radio/podcast host, public presenter, and cryptocurrency
            professional."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Chuck Williams - patented UI/UX developer, consultant,
              radio/podcast host, public presenter, and cryptocurrency
              professional
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I believe that evolved, empathic problem solving involves clear
                assessment of reality, honest & transparent communications, and
                the capability to push through to results. I make this work my
                art. I intend to bring value crafting elegant interfaces &
                experiences, identifying & pursuing growth opportunities, and
                building software that aligns with my dream of voluntary
                interactions for all individuals in a society free from
                coercion.
              </p>
              <h5>Strengths include:</h5>
              <ul className="list-disc pl-5">
                <li>written & verbal business communications skills</li>
                <li>
                  software & agile team leadership, mentorship, & management
                </li>
                <li>emotional intelligence</li>
                <li>public speaking</li>
                <li>change management</li>
                <li>research & best-practice training</li>
                <li>measurable productivity</li>
                <li>strategic planning</li>
                <li>project direction</li>
                <li>elegant problem solving</li>
                <li>application code development</li>
                <li>systems architecture</li>
                <li>data design, management, & reporting</li>
              </ul>
              <h5>Hobbies & personal pursuits include:</h5>
              <ul className="list-disc pl-5">
                <li>purposeful living</li>
                <li>Bitcoin & cryptocurrency</li>
                <li>meditation</li>
                <li>conscious empathy</li>
                <li>human design</li>
                <li>hobby psychology</li>
                <li>camping</li>
                <li>swimming</li>
                <li>travel</li>
              </ul>
              <Image
                src={basicBookImage}
                alt=""
                sizes="(min-width: 1024px) 14rem, 8rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 md:hidden"
              />
              <p>
                When I was 9 years old, entranced with my friend&apos;s display
                of a xenon blinking apparatus, I enthusiastically ran back
                through the humid summer midday to the single-wide trailer where
                I lived with my dad in Hammond, MN, begging for a strobe light.
                He refused with a dismissing wave of his hand saying, &ldquo;...
                go do something with that computer over there...&rdquo;
                gesturing at the very new IBM PC Jr sitting in the corner of the
                kitchen.
              </p>

              <p>
                With my seasoned years of LEGO assembly skills, and frustrated
                childhood angst, I spent the next few hours reading through the
                &quot;Hands-on BASIC&quot; manual that came with the
                beige-boxed-appliance, determined to find out if I could make
                the cryptic and unfamiliar technology do my bidding. By the end
                of that hot, humid, Minnesota summer day in Hammond, I had the
                computer screen blinking black & white in a timmed
                &quot;goto&quot; loop with a &quot;wait&quot; command between
                screen redraws. By the end of the next day, I had incrementally
                improved my first strobe program with arrow commands to change
                speed and color.
              </p>
              <p>
                In that moment I knew that if I could make computers do what I
                wanted, and combine it with art &amp;/or creativity, that I
                would be living a sort of childhood dream!
              </p>
              <p>
                Today I have been privileged to contribute this
                childhood-spawned passion to over 56 software development teams,
                hundreds of businesses, and literally millions of customers
                through my client projects.
              </p>
              <p>
                Tomorrow, I hope to make a legacy impact to the planet, sharing
                what I&apos;ve learned about the synthesis between the
                best-practices of building meaningful & useful software, the
                flow state of human productivity, the Austrian economic value of
                immutable cryptocurrency blockchains, and the neuro-linguistic
                incentives of behavioral psychology.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/chuckwilliams37"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/chuckwilliams37/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/chuckwilliams37"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/chuckcwilliams/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:chuck@screenscholar.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                chuck@screenscholar.com
              </SocialLink>
            </ul>
            <div className="mt-12 pt-12">
              <Image
                src={basicBookImage}
                alt=""
                sizes="(min-width: 1024px) 20rem, 16rem"
                className="invisible hidden aspect-square -rotate-6 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 md:visible md:block"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllMedia } from '@/lib/getAllMedia'
import { formatDate } from '@/lib/formatDate'

function MediaItem({ article: media }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/media/${media.slug}`}>{media.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={media.date}
          className="md:hidden"
          decorate
        >
          {formatDate(media.date)}
        </Card.Eyebrow>
        <Card.CoverImage src={media.mediaCoverImage} />
        <Card.Description>{media.description}</Card.Description>
        <Card.Cta>View media</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={media.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(media.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function MediaIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Media - Chuck Williams</title>
        <meta
          name="description"
          content="All of my podcast appearances, hosted shows, & stage talks in chronological order wherein I share my thoughts & perspectives on cryptocurrency, economy, freedom, the practice of software development, hobby psychology, love, spirituality, and lots more."
        />
      </Head>
      <SimpleLayout
        title="Media Appearances of Chuck Williams"
        intro="All of my media, podcast appearances, hosted shows, & stage talks in chronological order wherein I share my thoughts & perspectives on cryptocurrency, economy, freedom, the practice of software development, hobby psychology, love, spirituality, and lots more."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((mediaItem) => (
              <MediaItem key={mediaItem.slug} article={mediaItem} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllMedia()).map(({ component, ...meta }) => meta),
    },
  }
}

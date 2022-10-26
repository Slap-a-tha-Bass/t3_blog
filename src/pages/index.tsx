import BlogCard from '@components/blogCard';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { data } = trpc.example.hello.useQuery({ text: 'from tRPC' });
  return (
    <>
      <Head>
        <title>Albatross Family</title>
        <meta name="description" content="Travel blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="container-flex">
          <h1>Welcome to Albatross Family</h1>
          <h3>TRAVEL BLOG</h3>
        </div>

        <div className="container-grid">
          <BlogCard
            name="Posts"
            description="The blog posts you have been waiting for"
            variant="primary"
            isLink
            link="Posts"
          />
          <BlogCard
            name="Reviews"
            description="All reviews in one place"
            variant="secondary"
            isLink
            link="Reviews"
          />
          <BlogCard
            name="Users"
            description="See all users"
            variant="tertiary"
            isLink
            link="Users"
          />
          <BlogCard
            name="Projects"
            description="Major projects"
            variant="success"
            isLink
            link="Projects"
          />
          <BlogCard
            name="Family"
            description="See our family"
            variant="warning"
            isLink
            link="Family"
          />
          <BlogCard
            name="Travel"
            description="All of our travel"
            variant="danger"
            isLink
            link="Travel"
          />
          <BlogCard
            name="Airports"
            description="See best airports"
            variant="light"
            isLink
            link="Airports"
          />
          <BlogCard
            name="Mini Projects"
            description="Minor projects"
            variant="dark"
            isLink
            link="Mini Projects"
            urlSegment="projects"
          />
          <BlogCard
            name="Fast Pace Life"
            description="Fast Pace Life in the cities we travel"
            variant="info"
            isLink
            link="Fast Pace Life"
            urlSegment="travel"
          />
        </div>
        <div className="">
          {data ? <p>{data.greeting}</p> : <p>Loading...</p>}
        </div>
        <AuthShowcase />
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();
  console.log('sessionData', sessionData);
  return (
    <div className="">
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        className=""
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};

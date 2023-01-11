import { Helmet } from 'react-helmet-async';
import { ReactNode, memo } from 'react';
import { useLocation } from 'react-router-dom';
import profilePic from '../../images/profilepic.jpg';

interface PageProps {
  children?: ReactNode;
  title: string;
  description: string;
}

const Page = memo(({children, title, description}:PageProps) => {
  const {pathname} = useLocation();
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="profile" />
        <meta property="og:profile:first_name" content="Dallas" />
        <meta property="og:profile:last_name" content="Johnson" />
        <meta property="og:profile:gender" content="male" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`url(${profilePic})`} />
        <meta property="og:url" content={`https://reactresume.com${pathname}`} />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Helmet>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;

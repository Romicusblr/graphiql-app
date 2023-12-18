import LinkGitHub from './UI/LinkGitHub';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center shrink-0 bg-gray-800 px-8 py-1 text-gray-400">
      <ul>
        <li>
          <LinkGitHub
            name={'Romicusblr'}
            link={'https://github.com/romicusblr'}
          />
        </li>
        <li>
          <LinkGitHub name={'W1t1uv'} link={'https://github.com/w1t1uv'} />
        </li>
        <li>
          <LinkGitHub
            name={'AndreiArtsiomenko'}
            link={'https://github.com/AndreiArtsiomenko'}
          />
        </li>
      </ul>
      <div className="font-bold">© 2023</div>
      <div>
        <a href="https://rs.school/react/" rel="noreferrer" target="_blank">
          <img
            src="/images/logo-rss.svg"
            alt="logo RS School"
            className="w-24 hover: text-blue-700"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

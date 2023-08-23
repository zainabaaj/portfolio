import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
    </nav>

    <style jsx>
      {`
        header {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0;
          height: 4rem;
          min-width: 100%;
        }

        nav {
          flex: 1;
          place-content: center;
          display: flex;
          font-size: 2rem;
          z-index: 10;
        }

        nav a {
          padding: 0 3rem;
        }

        a {
          color: #fff;
          text-transform: uppercase;
        }
      `}
    </style>
  </header>
);

export default Header;

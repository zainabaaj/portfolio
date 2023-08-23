import React from "react";
import Header from "./header";

export default function Page({ children }) {
  const divStyle = {
    backgroundImage: "url('/bg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", /* Horizontally center content */
    minHeight: "100vh", /* Minimum height of 100% of the viewport height */

  };
  return (
    <>
      <div style={divStyle} className="min-h-screen  flex flex-col justify-center items-center">
        <Header />
        <main>{children}</main>
        <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          color: #fff;
          font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
            monospace;
          position: relative;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
           
        }

        #__next {
          height: 100%;
          overflow: hidden;
        }

        .page-transition-wrapper {
          height: 100%;
        }

        #page-transition-container {
          overflow: hidden;
          max-width: 100%;
          width: 100%;
          height: 100%;
        }

        main {
          align-items: stretch;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow-scrolling: touch;
          -webkit-overflow-scrolling: touch;
          margin: 0;
        }

        .section {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          place-content: center;
          place-items: center;
          padding: 0;
          margin: 0;
          font-size: 20vmin;
          text-align: center;
        }

        *,
        *::before,
        *::after {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-font-kerning: auto;
          font-kerning: auto;
          word-wrap: break-word;
        }

        h1 {
          font-size: 10vmin;
        }

        h2 {
          font-size: 8vmin;
        }

        p {
          font-size: 1rem;
        }
      `}</style>
        <style jsx>{`
        html,
        body {
          background-image: url('/bg.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>
      </div>

    </>
  );
}

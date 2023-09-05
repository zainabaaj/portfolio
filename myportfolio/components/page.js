import React from "react";
import Header from "./header";
import Footer from "./Footer";

export default function Page({ children }) {
  const divStyle = {
    backgroundImage: "url('/bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",


  };
  return (
    <>
      <div style={divStyle} className="min-h-screen w-full  bg-cover flex flex-col items-center">
        <Header />

        <main>{children}</main>
        <Footer />
        <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          color: #fff;
         background-color:#000000;
         scroll-behavior: smooth;
           
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

       

        p {
          font-size: 1rem;
        }
      `}</style>

      </div>

    </>
  );
}

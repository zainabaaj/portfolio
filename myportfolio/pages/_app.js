import App from "next/app";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../public/bg.png'
export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    };
    return (
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <div>
            <Component {...pageProps} key={router.pathname} />
          </div>
        </div>
      </AnimatePresence>
    );
  }
}

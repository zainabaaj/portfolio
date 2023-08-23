import React, { useRef } from "react";
import Page from "../page";
import { motion } from "framer-motion";
export default function About() {
  const constraintsRef = useRef(null);
  const config = {
    type: "spring",
    damping: 100,
    stiffness: 100
  };
  return (
    <Page>
      <div className="section">
        <motion.div ref={constraintsRef} className="drag-box">
          <motion.div
            drag
            dragConstraints={constraintsRef}
            transition={config}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className="inline"
          >
            <span className="grab">framer-motion</span>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            transition={config}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className="inline"
          >
            <span className="grab fire" role="img" aria-label="fire emoji">
              🔥
            </span>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            transition={config}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className="inline"
          >
            <span className="grab">plz don't drop me</span>
          </motion.div>
          <p className="dragger">Click to drag the items above!</p>
        </motion.div>
      </div>
      <style jsx global>{`
        span.grab {
          cursor: grab;
          cursor: -webkit-grab;
          font-size: 2rem;
          font-weight: bold;
        }
        span.grab:active {
          cursor: grabbing;
          cursor: -webkit-grabbing;
        }

        span.fire {
          font-size: 5rem;
        }

        .dragger {
          position: absolute;
          bottom: 1rem;
          display: block;
          width: 100%;
        }

        .inline {
          display: block;
          width: 30rem;
          height: 15rem;
        }

        .drag-box {
          height: 100%;
          width: 100%;
          padding: 1rem;
          position: fixed;
          top: 0;
          left: 0;
        }
      `}</style>
    </Page>
  );
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function PopUp() {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100, x: 500, scale: 0.5 }}
        className="w-full h-80 bg-green-500 flex justify-center items-center"
      >
        <p className="w-80 h-80 bg-green-300 mt-10" />
      </motion.div>
    </AnimatePresence>
  );
}

export default PopUp;

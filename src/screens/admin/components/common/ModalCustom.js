import React from "react";
import { motion } from "framer-motion";

export const RightModal = ({ onClickClose, children }) => {
  return (
    <div
      className="z-30 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 cursor-pointer"
      onClick={onClickClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-[100px] right-12 bg-white w-[240px]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const CenterModal = ({ onClickClose, children,height }) => {
  return (
    <div
      className="z-30 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 cursor-pointer "
      onClick={onClickClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`absolute top-1/2 left-1/2 translate-xy-50 bg-white ${height=== undefined?"":height} overflow-y-auto`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

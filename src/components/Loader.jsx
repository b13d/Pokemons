import React from "react";
import {motion} from "framer-motion";

export default function Loader() {
    return (
        <div className="lodaer-wrapper">
            <motion.div
                initial={{}}
                animate={{rotate: 10}}
                transition={{
                    repeat: Infinity,
                }}
                className="loader"
            ></motion.div>
        </div>
    );
}

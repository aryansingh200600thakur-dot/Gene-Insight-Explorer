import { motion } from "framer-motion";

function DNAAnimation() {
  const basePairs = Array.from({ length: 8 });

  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center overflow-visible">


      {/* Glow */}

      <div
        className="
        absolute
        h-72
        w-72
        rounded-full
        bg-cyan-400/20
        blur-3xl
        "
      />


      {/* DNA Helix */}

      <div className="relative h-64 w-32">

        {basePairs.map((_, index) => (

          <motion.div
            key={index}
            animate={{
              x:[
                -20,
                20,
                -20
              ],
              rotate:[
                -15,
                15,
                -15
              ]
            }}

            transition={{
              duration:4,
              repeat:Infinity,
              delay:index*0.2
            }}

            className="
            absolute
            left-10
            flex
            items-center
            gap-8
            "
            style={{
              top:index*30
            }}
          >

            {/* Left nucleotide */}

            <div
            className="
            h-4
            w-4
            rounded-full
            bg-cyan-400
            shadow-lg
            shadow-cyan-400/50
            "
            />


            {/* Connection */}

            <div
            className="
            h-[2px]
            w-14
            bg-white/40
            "
            />


            {/* Right nucleotide */}

            <div
            className="
            h-4
            w-4
            rounded-full
            bg-purple-400
            shadow-lg
            shadow-purple-400/50
            "
            />

          </motion.div>

        ))}


      </div>



      {/* Floating Data Nodes */}


      <motion.div
      animate={{
        y:[0,-15,0]
      }}
      transition={{
        duration:3,
        repeat:Infinity
      }}

      className="
      absolute
      -left-2
      top-16
      rounded-xl
      border
      border-white/10
      bg-white/10
      px-4
      py-2
      text-sm
      backdrop-blur-xl
      "
      >
        🧬 Gene Data
      </motion.div>




      <motion.div
      animate={{
        y:[0,15,0]
      }}
      transition={{
        duration:3,
        repeat:Infinity
      }}

      className="
      absolute
      -right-2
      bottom-16
      rounded-xl
      border
      border-white/10
      bg-white/10
      px-4
      py-2
      text-sm
      backdrop-blur-xl
      "
      >
        🤖 AI Model
      </motion.div>


    </div>
  );
}


export default DNAAnimation;
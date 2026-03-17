import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundController() {

  const { scrollYProgress } = useScroll();

  // background layers
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const servicesOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const statsOpacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const faqOpacity = useTransform(scrollYProgress, [0.32, 0.42], [0, 1]);

  // switch visibility (FAQ → FAQ2)
  // Whole overlay fades out earlier so CTA content never overlaps balance text
  const switchOpacity = useTransform(
    scrollYProgress,
    [0.30, 0.32, 0.44, 0.46],
    [0, 1, 1, 0]
  );

  // knob movement
  const knobX = useTransform(
    scrollYProgress,
    [0.36, 0.40],
    [0, 28]
  );

  // toggle background
  const toggleColor = "#c4b5fd";

  // text color OFF -> ON
  const textColor = useTransform(
    scrollYProgress,
    [0.36, 0.40],
    ["#ffffff", "#000000"]
  );

  // label
  const labelOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.38],
    [0, 1]
  );
  // small label text change
  const offLabelOpacity = useTransform(
    scrollYProgress,
    [0.34, 0.38],
    [1, 0]
  );

  const onLabelOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.42],
    [0, 1]
  );
  // TEXT SWITCH
  const offOpacity = useTransform(scrollYProgress, [0.30, 0.34], [1, 0]);
  // ON text fades in [0.38→0.42] then fades out [0.43→0.45] before CTA arrives
const onOpacity = useTransform(
  scrollYProgress,
  [0.36, 0.40, 0.41, 0.43],
  [0,   1,   1,   0]
);
  

  return (
    <div className="bg-system">

      <motion.div className="bg hero-bg" style={{ opacity: heroOpacity }} />
      <motion.div className="bg services-bg" style={{ opacity: servicesOpacity }} />
      <motion.div className="bg stats-bg" style={{ opacity: statsOpacity }} />
      <motion.div className="bg faq-bg-main" style={{ opacity: faqOpacity }} />

      {/* SWITCH + TEXT OVERLAY */}
      <motion.div
        className="balance-overlay"
        style={{ opacity: switchOpacity }}
      >

        {/* SWITCH */}
        <motion.div
          className="balance-switch"
          style={{ color: textColor }}
        >

          <span>BALANCE</span>

          <motion.div
            className="toggle"
            style={{ background: toggleColor }}
          >
            <motion.div
              className="knob"
              style={{ x: knobX }}
            />
          </motion.div>

          <motion.div
            className="switch-label"
            style={{ opacity: labelOpacity }}
          >
            ON
          </motion.div>

        </motion.div>


        {/* OFF TEXT */}

        <motion.div
          className="balance-text off"
          style={{ opacity: offOpacity }}
        >
          <h1>
            If only finding balance were
            <br />
            as simple as flipping a switch.
          </h1>

          <p>
            You're closer than you think.
            <br />
            And every step you take makes it clearer.
          </p>
        </motion.div>


        {/* ON TEXT */}

        <motion.div
          className="balance-text on"
          style={{ opacity: onOpacity }}
        >
          <h1>
            There may not be a single switch,
            <br />
            but there are clear steps forward.
          </h1>

          <p>
            Every path is different. These are the ways
            we help people move forward with confidence.
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
}
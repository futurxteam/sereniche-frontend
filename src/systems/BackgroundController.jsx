import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundController() {
  const { scrollYProgress } = useScroll();

  // Hero background fades out and blurs as you scroll down
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.25], ["blur(0px)", "blur(20px)"]);
  
  // Services background fades in BEFORE hero fully disappears
  const servicesOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div className="bg-system">
      <motion.div
        className="bg hero-bg"
        style={{ opacity: heroOpacity, filter: heroBlur }}
      />

      <motion.div
        className="bg services-bg"
        style={{ opacity: servicesOpacity }}
      />
    </div>
  );
}

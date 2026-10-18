import { AnimatePresence, motion } from 'framer-motion';

const presets = {
  default: { type: 'spring', stiffness: 170, damping: 26 },
  gentle:  { type: 'spring', stiffness: 120, damping: 14 },
  wobbly:  { type: 'spring', stiffness: 180, damping: 12 },
  stiff:   { type: 'spring', stiffness: 210, damping: 20 },
  slow:    { type: 'spring', stiffness: 280, damping: 60 },
};

function TextTransition({ text, spring = presets.wobbly }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        style={{ display: 'inline-block' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={spring}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}
export default TextTransition;
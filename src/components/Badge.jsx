import { motion } from "framer-motion";

const Badge = ({ caption }) => {
  return (
    <motion.span
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.3 }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
};
export default Badge;

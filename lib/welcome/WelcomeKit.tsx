import MainContent from './contents/MainContent'
import { motion, AnimatePresence } from 'framer-motion'
import './styles.css'

export default function WelcomeKit() {
  return (
    <div className="welcome-content">
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          style={{ zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <MainContent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
  showOnlyWhenDisabled?: boolean;
  isParentDisabled?: boolean;
}

const Tooltip = ({
  content,
  children,
  position = 'top',
  delay = 0.2,
  className = '',
  showOnlyWhenDisabled = false,
  isParentDisabled = false,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1 -translate-x-1/2 mt-2',
    left: 'right-full top-1 -translate-y-1/2 mr-2',
    right: 'left-full top-1 -translate-y-1/2 ml-2',
  };

  const shouldShowTooltip = showOnlyWhenDisabled ? isParentDisabled && isVisible : isVisible;

  return (
    <div 
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {shouldShowTooltip && (
          <motion.div
            initial={{ opacity: 0, y: position === 'top' ? 5 : position === 'bottom' ? -5 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === 'top' ? 5 : position === 'bottom' ? -5 : 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`absolute z-50 min-w-max px-3 py-1.5 text-xs text-white bg-gray-800 rounded-md shadow-lg pointer-events-none ${positionClasses[position]}`}
          >
            {content}
            <div 
              className={`absolute w-2 h-2 bg-gray-800 rotate-45 ${
                position === 'top' ? 'bottom-[-3px] left-1/2 -translate-x-1/2' :
                position === 'bottom' ? 'top-[-3px] left-1/2 -translate-x-1/2' :
                position === 'left' ? 'right-[-3px] top-1/2 -translate-y-1/2' :
                'left-[-3px] top-1/2 -translate-y-1/2'
              }`} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
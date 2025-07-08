import { ArrowLeftRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

// Define props interface
interface BeforeAfterSliderProps {
    beforeContent: React.ReactNode;
    afterContent: React.ReactNode;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeContent, afterContent }) => {
    const [sliderPosition, setSliderPosition] = useState<number>(50);
    const sliderRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef<boolean>(false);

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        isDragging.current = true;
    };

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging.current || !containerRef.current) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const rect = containerRef.current.getBoundingClientRect();
        const position = ((clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, position)));
    };

    const handleDragEnd = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        const handleMouseUp = () => handleDragEnd();
        const handleMouseMove = (e: MouseEvent) => handleDragMove(e);
        const handleTouchMove = (e: TouchEvent) => handleDragMove(e);
        const handleTouchEnd = () => handleDragEnd();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[300px] overflow-hidden group-hover:rounded-xl select-none grayscale group-hover:grayscale-0 transition-all duration-300"
        >
            {/* Before Content (left side) */}
            <div className="absolute inset-0">{beforeContent}</div>

            {/* After Content (right side, clipped) */}
            <div
                className="absolute inset-0"
                style={{
                    clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                    transition: isDragging.current ? 'none' : 'clip-path 0.3s ease',
                }}
            >
                {afterContent}
            </div>

            {/* Slider Line and Handle */}
            <div
                ref={sliderRef}
                className="absolute top-0 bottom-0 w-[2px] bg-white text-white hover:bg-accent cursor-ew-resize transition-colors duration-300"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
            >
                {/* Handle */}
                <div className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full hover:text-accent top-1/2 left-1/2">
                    <ArrowLeftRight size={20} />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
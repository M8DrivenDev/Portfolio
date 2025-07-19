import { HollowRect } from "../../ui/hollowRect";
import "./index.css";
import { useEffect, useRef } from "react";

const QuoteSection = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    const quoteElement = quoteRef.current;
    if (!quoteElement) return;

    // Create intersection observer for optimal performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when section comes into view
            entry.target.classList.add("animate-in");
            // Disconnect observer after first animation to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Trigger when 30% of the section is visible
        threshold: 0.3,
        // Start animation when element is about to enter viewport
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(quoteElement);

    // Cleanup
    return () => {
      if (quoteElement) {
        observer.unobserve(quoteElement);
      }
    };
  }, []);

  return (
    <div ref={quoteRef} className="quote-section quote-animate">
      <div className="quote-container">
        <div className="opening-quote quote-mark">“</div>
        <p className="quote-text">I can resist everything except temptation.</p>
        <div className="closing-quote quote-mark">„</div>
      </div>
      <div className="quote-rect">
        <HollowRect width={80} height={70} />
      </div>
      <div className="quote-author">
        <p>- Oscar Wilde</p>
      </div>
    </div>
  );
};

export default QuoteSection;

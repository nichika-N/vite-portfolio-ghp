// src/components/GlassCard.jsx

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/60 p-6 rounded-2xl shadow-md z-10 relative animate-fadeIn transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;

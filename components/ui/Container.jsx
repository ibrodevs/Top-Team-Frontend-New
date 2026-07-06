export default function Container({ children, className = "" }) {
  return (
    <div className={`tt-container ${className}`}>
      {children}
    </div>
  );
}

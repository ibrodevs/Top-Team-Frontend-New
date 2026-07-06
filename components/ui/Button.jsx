import Link from "next/link";

const variants = {
  primary:
    "accent-glow accent-glow-hover bg-royal text-white hover:bg-electric hover:text-navy-950",
  secondary:
    "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-electric hover:text-electric",
  ghost:
    "text-electric hover:text-electric-light",
};

const sizes = {
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  external = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold uppercase tracking-wide transition-all duration-300 ${variants[variant] || variants.primary} ${sizes[size] || sizes.lg} ${className}`;

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

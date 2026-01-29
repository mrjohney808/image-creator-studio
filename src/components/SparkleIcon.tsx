import { CSSProperties } from 'react';

interface SparkleIconProps {
  className?: string;
  size?: number;
  style?: CSSProperties;
}

const SparkleIcon = ({ className = '', size = 24, style }: SparkleIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
    </svg>
  );
};

export default SparkleIcon;

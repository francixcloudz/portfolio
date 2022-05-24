import { Container, ProgressPath } from "./Progress.styled";

interface ProgressProps {
  duration: number;
  children?: React.ReactNode;
  className?: string;
  percentage?: number;
  delay?: number;
}

const Progress = ({ children, className, percentage, duration, delay }: ProgressProps) => (
  <Container className={className}>
    <svg preserveAspectRatio="none" viewBox="0 0 36 36">
      <g>
        <path
          className="background"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <ProgressPath
          strokeDasharray="0, 100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          duration={duration}
          percentage={percentage || 100}
          delay={delay || 0}
        />
      </g>
    </svg>
    {children}
  </Container>
);

export default Progress;

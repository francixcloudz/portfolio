// Styled
import { Container, ProgressPath } from "./styled";

type Props = {
  duration: number;
  children?: React.ReactNode;
  className?: string;
  percentage?: number;
  delay?: number;
};

const Progress: React.FC<Props> = ({
  children,
  className,
  percentage,
  duration,
  delay,
}) => {
  return (
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
};

export default Progress;

// Styled
import { Container, Progress } from "./styled";

type Props = {
  duration: number;
  children?: React.ReactNode;
  className?: string;
  percentage?: number;
  delay?: number;
};

const Component: React.FC<Props> = ({
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
          <Progress
            strokeDasharray="0, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            percentage={percentage}
            duration={duration}
            delay={delay}
          />
        </g>
      </svg>
      {children}
    </Container>
  );
};

Component.defaultProps = {
  percentage: 100,
  delay: 0,
};

export default Component;

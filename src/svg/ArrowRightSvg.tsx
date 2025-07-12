interface ArrowRightSvgProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

export default function ArrowRightSvg({ className, onClick }: ArrowRightSvgProps): JSX.Element {
  return (
    <svg
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.3633 15.5303C11.0704 15.823 10.5956 15.8231 10.3027 15.5303C10.0101 15.2374 10.0101 14.7626 10.3027 14.4697L14.0225 10.75L4.16601 10.75L4.08984 10.7461C3.71172 10.7076 3.41601 10.3883 3.41601 10C3.41601 9.61174 3.71172 9.29239 4.08984 9.25392L4.16601 9.25002L14.0225 9.25002L10.3027 5.53029L10.251 5.47365C10.0108 5.17913 10.0283 4.74431 10.3027 4.46974C10.5773 4.1952 11.0121 4.17784 11.3066 4.41798L11.3633 4.46974L16.3633 9.46974C16.6562 9.76264 16.6562 10.2374 16.3633 10.5303L11.3633 15.5303Z"
        fill="white"
      />
    </svg>
  );
}

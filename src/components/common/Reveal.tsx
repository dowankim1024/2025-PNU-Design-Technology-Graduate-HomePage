import type { PropsWithChildren, CSSProperties, ReactElement } from "react";
import {
  useEffect,
  useRef,
  useState,
  isValidElement,
  cloneElement,
} from "react";
import styled from "styled-components";

type RevealProps = {
  delayMs?: number;
  durationMs?: number;
  translateYPx?: number;
  threshold?: number;
  once?: boolean;
  asChild?: boolean;
};

export const Reveal = ({
  children,
  delayMs = 200,
  durationMs = 600,
  translateYPx = 60,
  threshold = 0.1,
  once = false,
  asChild = false,
}: PropsWithChildren<RevealProps>) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetEl = asChild ? childRef.current : wrapperRef.current;
    if (!targetEl) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(targetEl);
    return () => observer.disconnect();
  }, [threshold, once, asChild]);
  if (asChild && isValidElement(children)) {
    type ChildProps = { style?: CSSProperties };
    const child = children as ReactElement<ChildProps>;
    const existingStyle = (child.props?.style || {}) as CSSProperties;
    const animatedStyle: CSSProperties = {
      transform: `translateY(${isVisible ? 0 : translateYPx}px)`,
      opacity: isVisible ? 1 : 0,
      transition: `transform ${durationMs}ms ease-out ${delayMs}ms, opacity ${durationMs}ms ease-out ${delayMs}ms`,
      willChange: "transform, opacity",
      ...existingStyle,
    };
    const setRef = (node: HTMLElement | null) => {
      childRef.current = node;
    };
    return cloneElement(child, {
      style: animatedStyle,
      ref: setRef,
    } as unknown as ChildProps);
  }

  return (
    <Wrapper
      ref={wrapperRef}
      $visible={isVisible}
      $delayMs={delayMs}
      $durationMs={durationMs}
      $translateY={translateYPx}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  $visible: boolean;
  $delayMs: number;
  $durationMs: number;
  $translateY: number;
}>`
  will-change: transform, opacity;
  transform: translateY(${p => (p.$visible ? 0 : p.$translateY)}px);
  opacity: ${p => (p.$visible ? 1 : 0)};
  transition:
    transform ${p => p.$durationMs}ms ease-out ${p => p.$delayMs}ms,
    opacity ${p => p.$durationMs}ms ease-out ${p => p.$delayMs}ms;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
    opacity: 1;
  }
`;

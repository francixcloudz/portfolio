// Assets
import type { RefSet } from "assets/hooks/useRefSet";

export type GetTimeline = (props: { refs: RefSet }) => gsap.core.Timeline;

export type HandleAnimations = (props: { refs: RefSet }) => void;

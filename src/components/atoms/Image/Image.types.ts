import { ReactElement, RefAttributes } from "react";
import { ImageProps } from "next/image";

export type ImageType = (props: ImageProps & RefAttributes<HTMLDivElement>) => ReactElement | null;

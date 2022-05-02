import { ReactElement, RefAttributes } from "react";

export type NotificationType = (props: RefAttributes<HTMLDivElement>) => ReactElement | null;

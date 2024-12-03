declare module "react-vertical-timeline-component" {
    import * as React from "react";
  
    export interface VerticalTimelineProps {
      animate?: boolean;
      className?: string;
      layout?: "1-column" | "2-columns";
      children?: React.ReactNode; // Add this property
    }
  
    export interface VerticalTimelineElementProps {
      date?: string | React.ReactNode;
      icon?: React.ReactNode;
      iconStyle?: React.CSSProperties;
      contentStyle?: React.CSSProperties;
      contentArrowStyle?: React.CSSProperties;
      position?: "left" | "right";
      className?: string;
      children?: React.ReactNode; // Add this property
    }
  
    export const VerticalTimeline: React.FC<VerticalTimelineProps>;
    export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
  }
  
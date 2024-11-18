"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from "@/app/components/timeline/timeline";
import { TimelineElement } from "@/app/data";

interface TimelineLayoutProps {
  items: TimelineElement[];
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    <Timeline className="ml-[71.62px]">
  {items.map((item) => (
    <TimelineItem key={item.id}>
      {item.id !== items[items.length - 1].id && <TimelineConnector />}
      <TimelineHeader>
        <TimelineTime>{item?.date1}</TimelineTime>
        <TimelineTime className="mt-8">{item?.date2}</TimelineTime>
        <TimelineIcon />
        <TimelineTitle>{item.title ?? 'Untitled'}</TimelineTitle>
      </TimelineHeader>
      <TimelineContent>
        <TimelineDescription>{item.description ?? 'No description available.'}</TimelineDescription>
      </TimelineContent>
    </TimelineItem>
  ))}
</Timeline>
  );
};

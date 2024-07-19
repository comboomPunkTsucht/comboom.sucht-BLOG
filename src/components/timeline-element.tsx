"use client"

import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimeLineCard from '@/components/timeline-card';
import { Badge } from '@/components/ui/badge';

interface TimeLineElementProps {
  TimeLineImage: string;
  TimeLineImageAlt: string;
  TimeLineImageFallback: string;
  TimeLineTitle: string;
  TimeLineBadges: string[];
  children: React.ReactNode;
  startdate: string;
  enddate: string;
}

const TimeLineElementBig: React.FC<TimeLineElementProps> = ({
  TimeLineImage,
  TimeLineImageAlt,
  TimeLineImageFallback,
  TimeLineTitle,
  TimeLineBadges,
  children,
  startdate,
  enddate,
}) => {
  return (
    <TimelineItem>
                <TimelineOppositeContent color="text-secondary">
                  <Badge>{startdate} - {enddate}</Badge>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <TimeLineCard
                    TimeLineTitle={TimeLineTitle}
                    TimeLineBadges={TimeLineBadges}
                    TimeLineImage={TimeLineImage}
                    TimeLineImageAlt={TimeLineImageAlt}
                    TimeLineImageFallback={TimeLineImageFallback}
                  >
                      {children}
                    </TimeLineCard>
                </TimelineContent>
              </TimelineItem>
  );
};

const TimeLineElementSmall: React.FC<TimeLineElementProps> = ({
  TimeLineImage,
  TimeLineImageAlt,
  TimeLineImageFallback,
  TimeLineTitle,
  TimeLineBadges,
  children,
  startdate,
  enddate,
}) => {
  return (
    <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <TimeLineCard
                    TimeLineTitle={TimeLineTitle}
                    TimeLineBadges={[(startdate + " - " +enddate)].concat(TimeLineBadges)}
                    TimeLineImage={TimeLineImage}
                    TimeLineImageAlt={TimeLineImageAlt}
                    TimeLineImageFallback={TimeLineImageFallback}
                  >
                      {children}
                    </TimeLineCard>
                </TimelineContent>
              </TimelineItem>
  );
};

export { TimeLineElementBig, TimeLineElementSmall };

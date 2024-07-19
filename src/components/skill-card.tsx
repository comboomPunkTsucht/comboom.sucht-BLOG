"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from './ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Progress } from "@/components/ui/progress"


interface SkillCardProps {
  SkillImage: string;
  SkillImageAlt: string;
  SkillImageFallback: string;
  SkillTitle: string;
  SkillBadges: string[];
  Skilllevel: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
    SkillImage,
    SkillImageAlt,
    SkillImageFallback,
    SkillTitle,
    SkillBadges,
    Skilllevel,
}) => {
  return (
    <Card className='backdrop-blur-sm bg-transparent'>
      <CardHeader>
        <div className='flex flex-row items-center justify-between gap-1'>
            <Avatar>
                <AvatarImage src={SkillImage} alt={SkillImageAlt} />
                <AvatarFallback>{SkillImageFallback}</AvatarFallback>
            </Avatar>
            <CardTitle>{SkillTitle}</CardTitle>
        </div>
        <CardDescription>
          <div className='flex flex-wrap gap-2'>
          {SkillBadges.map((badge, index) => (
            <Badge key={index} variant='default'>
              {badge}
            </Badge>
          ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent><Progress value={Skilllevel} /></CardContent>
    </Card>
  );
};

export default SkillCard;

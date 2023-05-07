"use client"
import React from "react";
import TimeAgo from "react-timeago"

type Props = {
    timestamp: string;
};

export default function LiveTimestamp({ timestamp }: Props) {
    return (
        <TimeAgo date={timestamp} />
    );
}
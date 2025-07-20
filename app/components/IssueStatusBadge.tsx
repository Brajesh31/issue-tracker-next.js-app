import { type Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';
import React from 'react';

interface issueStatusBadgePrps {
  status: Status;
}

const statusMap: Record<
  Status,
  {
    label: string;
    color: 'red' | 'violet' | 'green';
  }
> = {
  OPEN: { label: 'Open', color: 'red' },
  IN_PROGRESS: { label: 'In Progress', color: 'violet' },
  CLOSED: { label: 'Closed', color: 'green' },
};

const IssueStatusBadge: React.FC<issueStatusBadgePrps> = ({ status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;

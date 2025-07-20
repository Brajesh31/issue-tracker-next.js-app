import prisma from '@/prisma/client';
import IssueSummary from './IssueSummary';
import LatestIssues from './LatestIssues';
import IssueChart from './IssueChart';
import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: 'OPEN' },
  });

  const closed = await prisma.issue.count({
    where: { status: 'CLOSED' },
  });

  const inProgress = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' },
  });

  const status = {
    open,
    inProgress,
    closed,
  };

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary {...status} />
        <IssueChart {...status} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: 'Issues Tracker - Dashboard',
  description: 'View a summary of project issues',
};

import dynamic from 'next/dynamic';
import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import IssueFormSkeleton from '../../_components/IssueFormSkeleton';

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface EditIssuePageProps {
  params: {
    id: string;
  };
}

const EditIssuePage = async ({ params }: EditIssuePageProps) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;

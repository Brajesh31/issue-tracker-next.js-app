import React, { ReactNode, Suspense } from 'react';
import LoadingIssueDetailPage from './Loading';

const IssueDetailsLayout = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<LoadingIssueDetailPage />}>{children}</Suspense>;
};

export default IssueDetailsLayout;

import { ReactNode, Suspense } from 'react';
import LoadingIssuesPage from './Loading';

const IssueLayout = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<LoadingIssuesPage />}>{children}</Suspense>;
};

export default IssueLayout;

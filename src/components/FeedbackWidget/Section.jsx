import { Layout, Topic } from './FeedbackWidget.styled';

export const Section = ({ title, children }) => {
  return (
    <Layout>
      <Topic>{title}</Topic>
      <>{children}</>
    </Layout>
  );
};

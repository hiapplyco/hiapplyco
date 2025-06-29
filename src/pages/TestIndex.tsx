import { Helmet } from 'react-helmet-async';

const TestIndex = () => {
  return (
    <>
      <Helmet>
        <title>Test Page</title>
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <h1>Test Page - If you can see this, basic React is working</h1>
      </div>
    </>
  );
};

export default TestIndex;
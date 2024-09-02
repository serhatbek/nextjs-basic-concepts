const TestLayout = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <>
      <h1>Test layoutundan geliyroum.</h1>
      <div>{children}</div>
    </>
  );
};

export default TestLayout;

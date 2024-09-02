const BlogPage = ({ searchParams }) => {
  if (searchParams.error === "error") {
    throw new Error("This is an error!");
  }
  return <div>BlogPage for error test</div>;
};

export default BlogPage;

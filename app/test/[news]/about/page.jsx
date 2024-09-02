const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const AboutPage = async (props) => {
  await delay(3000);
  console.log(props);
  console.log(props.params.blog);
  return <div>AboutPage</div>;
};

export default AboutPage;

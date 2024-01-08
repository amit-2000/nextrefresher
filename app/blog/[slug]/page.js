const BlogPage = ({ params }) => {
  console.log(params);
  return <div>this is blog page no.{params.slug}</div>;
};

export default BlogPage;

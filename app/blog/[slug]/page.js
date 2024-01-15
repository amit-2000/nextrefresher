export function BlogPage({ params }) {
  console.log(params);
  return <h1>this is blog page no.{params.slug}</h1>;
}

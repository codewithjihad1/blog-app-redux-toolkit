import Aside from "../components/aside/Aside";
import BlogsGrid from "../components/grid/BlogsGrid";

export default function Home() {
  return (
    <section className="wrapper">
      <Aside />
      <BlogsGrid />
    </section>
  );
}

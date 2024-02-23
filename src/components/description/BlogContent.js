import LikeSaved from "./LikeSaved";
export default function BlogContent({ blog }) {
  const { image, title, tags, description } = blog;

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag, index) => (
            <span key={index}>{`#${tag},`}</span>
          ))}
        </div>
        <LikeSaved />
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}

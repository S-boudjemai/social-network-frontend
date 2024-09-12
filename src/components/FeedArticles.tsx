import { useEffect } from "react";

function FeedArticles() {
  const articles = [
    {
      id: 1,
      author: "Pizz'Alif Givors",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
    },
    {
      id: 2,
      author: "Article 4",
      content: "Content 2",
    },
    {
      id: 3,
      author: "Article 4",
      content: "Content 3",
    },
    {
      id: 4,
      author: "Article 4",
      content: "Content 4",
    },
    {
      id: 5,
      author: "Article 4",
      content: "Content 4",
    },
    {
      id: 6,
      title: "Article 4",
      content: "Content 4",
    },
    {
      id: 7,
      title: "Article 4",
      content: "Content 4",
    },
    {
      id: 8,
      title: "Article 4",
      content: "Content 4",
    },
  ];

  // Définir handleScroll en dehors de toute fonction pour qu'il soit accessible dans le useEffect
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("Vous avez atteint le bas de la page");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {articles.map((post) => (
        <div
          key={post.id}
          className="w-[70%] h-[350px] bg-white mt-7 p-4 shadow-lg"
        >
          <h1 className="text-2xl h-[20%]">{post.author}</h1>
          <p className="h-[70%]">{post.content}</p>
          <div className="h-[10%] flex items-end justify-between">
            <button className="mb-3 bg-slate-300 px-5 shadow-lg border rounded border-black cursor-pointer">
              Like
            </button>
            <button className="mb-3  bg-slate-300 px-5 shadow-lg border rounded border-black cursor-pointer">
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeedArticles;

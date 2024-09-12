function NewsArticles() {
  const articles = [
    {
      id: 1,
      title: "Escalope assaisonnée",
      content:
        "A partir de ce 11/09/2024, tous les restaurants de la franchise Pizz Alif proposeront une nouvelle escalope assaisonnée. A déguster sans modération !",
    },
    {
      id: 1,
      title: "Escalope assaisonnée",
      content:
        "A partir de ce 11/09/2024, tous les restaurants de la franchise Pizz Alif proposeront une nouvelle escalope assaisonnée. A déguster sans modération !",
    },
    {
      id: 1,
      title: "Escalope assaisonnée",
      content:
        "A partir de ce 11/09/2024, tous les restaurants de la franchise Pizz Alif proposeront une nouvelle escalope assaisonnée. A déguster sans modération !",
    },
    {
      id: 1,
      title: "Escalope assaisonnée",
      content:
        "A partir de ce 11/09/2024, tous les restaurants de la franchise Pizz Alif proposeront une nouvelle escalope assaisonnée. A déguster sans modération !",
    },
  ];

  return (
    <div>
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-slate-400 p-3 m-3 rounded shadow-lg"
        >
          <h3 className="text-white text-xl">{article.title}</h3>
          <p className="text-white">{article.content}</p>
          <button className="p-1  shadow-lg bg-gray-700 text-white rounded cursor-pointer">
            Lu
          </button>
        </div>
      ))}
    </div>
  );
}
export default NewsArticles;

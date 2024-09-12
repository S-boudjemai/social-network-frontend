import FeedArticles from "../components/FeedArticles";
import NewsArticles from "../components/NewsArticles";
import Profile from "../components/Profile";

function Home() {
  return (
    <div className="flex h-screen w-screen relative">
      {/* Sidebar */}
      <div className="w-[20%] bg-slate-500">
        <p className="text-white text-2xl m-3">
          Retrouvez ici les nouveautés de votre franchise...
        </p>
        <NewsArticles />
      </div>

      {/* Main content */}
      <div className="w-[80%] flex">
        {/* FeedArticles container  */}
        <div className="w-[70%] bg-green-300 overflow-y-scroll h-screen p-4 mx-auto">
          <FeedArticles />
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col w-[30%] justify-between mt-10 mb-10 items-center">
          <div className=" h-[100px] w-[300px]">
            <Profile />
          </div>
          <div>Component request</div>
          <div className="bg-slate-500 p-3 w-[270px]">Component chatbox</div>
        </div>
      </div>
    </div>
  );
}
export default Home;

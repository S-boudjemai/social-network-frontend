import logo from "../assets/logo.png";

function Profile() {
  return (
    <div className="relative flex justify-between">
      <img className="w-25 h-20" src={logo} alt="logo-pizzalif" />
      <div className="ml-4 space-x-2 flex flex-col justify-around">
        {/* Premier bouton */}
        <button className="bg-red-600 hover:bg-red-700 text-white py-[2px] px-4 rounded-full shadow-lg mb-1">
          Voir mon profil
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white py-[2px] px-4 rounded-full shadow-lg mb-1">
          Faire une requête
        </button>

        {/* Deuxième bouton */}
        <button className="bg-gray-600 hover:bg-gray-700 text-white py-[2px] px-4 rounded-full shadow-lg mb-1">
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
export default Profile;

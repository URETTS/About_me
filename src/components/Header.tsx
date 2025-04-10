import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">About Me</h1>
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>Главная</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>Про меня</NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>Опыт</NavLink>
          <NavLink to="/travels" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>Путешествия</NavLink>
        </div>
      </nav>
    </header>
  );
};
export default Header;
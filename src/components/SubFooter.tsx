// SubFooter.jsx
const SubFooter = () => {
  return (
    <div className="mt-2 pt-0 px-4 w-full">
      <div className="relative flex justify-between items-center w-full text-xs sm:text-sm text-gray-400 whitespace-nowrap">
        <span className="text-red-500 font-medium text-left">
          Все фотографии на сайте сделаны мной. Не используйте их без разрешения.
        </span>
        <span className="text-right">
          © {new Date().getFullYear()} Yuriy Bykov
        </span>
      </div>
    </div>
  );
};

export default SubFooter;

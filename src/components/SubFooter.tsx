const SubFooter = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-2 text-center sm:text-left">
        <span className="text-red-500 font-medium">
          Все фотографии на сайте сделаны мной. Не используйте их без разрешения.
        </span>
        <span>© {new Date().getFullYear()} Yuriy Bykov</span>
      </div>
    </div>
  );
};

export default SubFooter;

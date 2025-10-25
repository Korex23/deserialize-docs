const Section: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, title, children }) => (
  <div id={id} className="mb-10 sm:mb-12 scroll-mt-24">
    <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-green-400">
      {title}
    </h2>
    {children}
  </div>
);
export default Section;

export const FeaturedItems = ({ sectionTitle, itemsArray }) => {
  console.log("itemsArray", itemsArray);
  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
            {sectionTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {itemsArray.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white shadow-xl rounded-2xl p-8 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-6">{icon}</div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

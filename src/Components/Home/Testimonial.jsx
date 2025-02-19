
const Testimonial = () => {
    const quotes=["EduLink transformed my learning!", "Best platform for collaboration!", "Amazing study sessions!"]
    return (
        <section className="text-center mb-5">
        <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {quotes?.map(
            (quote, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-md  shadow ">
                <p className="text-lg italic">“{quote}”</p>
                <span className="block mt-2 font-bold"> Student {idx + 1}</span>
              </div>
            )
          )}
        </div>
      </section>
    );
};

export default Testimonial;


const Faq = () => {
    return (
        <div className="mb-5">
      <h2 className="text-3xl font-bold mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              How do I sign up?
            </div>
            <div className="collapse-content">
              <p>To sign up, visit our registration page and follow the instructions.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Are courses free?
            </div>
            <div className="collapse-content">
              <p>Not all courses are free. We offer a mix of free and paid courses. Please check the course details for more information</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              How can I access past sessions?
            </div>
            <div className="collapse-content">
              <p>You can access past sessions by logging into your account and visiting the &quot;All Sessions&quot; section.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;
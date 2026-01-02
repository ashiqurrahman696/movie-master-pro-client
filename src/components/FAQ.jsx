import { faqData } from "../data/faqData";

const FAQ = () => {
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6" data-aos="flip-right">
            <h1 className="text-center font-semibold text-4xl">Frequently Asked Questions</h1>
            <div className="space-y-3">
                {faqData.map((faq, index) => (
                    <div key={faq.id} className="collapse collapse-arrow bg-base-300 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                        <div className="collapse-title font-semibold">{faq.question}</div>
                        <div className="collapse-content text-sm">{faq.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
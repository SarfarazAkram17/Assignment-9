import React from "react";

const Faq = () => {
  return (
    <div className="my-20 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        <span className="text-primary">Frequently</span> Asked Questions
      </h2>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account on JobTrack?
        </div>
        <div className="collapse-content text-sm">
          Simply click the Register button in the top navigation bar, fill in
          your details, and you're good to go.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is JobTrack free to use for job seekers?
        </div>
        <div className="collapse-content text-sm">
          Yes, JobTrack is completely free for job seekers. You can explore
          jobs, apply, and manage your profile at no cost.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I apply for a job listed on JobTrack?
        </div>
        <div className="collapse-content text-sm">
          Once you find a job that interests you, click on the jobs details
          button and then press the Apply button.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to your Profile page by clicking profile or your avatar on the
          navbar. Then click Update to fill your name, photo URL details. Then
          click Update Information button
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Are the job listings on JobTrack verified?
        </div>
        <div className="collapse-content text-sm">
          Yes, all job listings are submitted by verified companies. Our team
          reviews each listing to ensure legitimacy and accuracy.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I reset my password if I forget it?
        </div>
        <div className="collapse-content text-sm">
          Click the Forgot Password link on the login page and click on reset
          password button to reset your password via email.
        </div>
      </div>
    </div>
  );
};

export default Faq;

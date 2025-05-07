import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  document.title = 'JobTrack || Error Page';
  return (
    <div className="h-screen flex justify-center items-center py-20 text-center">
      <div className="space-y-4 ">
        <div className="flex justify-center">
          <img
            className="w-[70%]"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
            alt=""
          />
        </div>

        <h1 className="text-red-500 font-bold text-3xl md:text-4xl">404 Page Not Found</h1>
        <Link to="/">
          <button className="btn btn-primary mt-4">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

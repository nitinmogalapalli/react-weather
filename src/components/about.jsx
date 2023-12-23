import React from 'react';
import Layout from './layout';

const About = () => {
  return (
    <>
      <Layout>
        <section
          className="prose prose-lg mx-auto mt-12 mb-32 h-auto max-w-3xl rounded-lg pt-2 shadow-lg"
          style={{ backgroundPositionY: '100%' }}
        >
          <div className="p-4 text-gray-500 dark:text-gray-400">
            <h3 className="font-sans text-xl font-medium text-gray-600 dark:text-white">
              About ReactWeather
            </h3>
            <p className="pt-4">
              ReactWeather is a beautiful weather app built on top of the{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://openweathermap.com/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenWeatherMap API
              </a>
              .
            </p>
            <p className="pt-4">
              It is a labor of ❤️ open-source project by me,{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="#"
              >
                Nitin
              </a>
            </p>
            <p className="pt-4">
              It runs on{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{' '}
              and{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
              . It uses{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://erikflowers.github.io/weather-icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Erik Flowers&apos; weather icons
              </a>{' '}
              . If you like the project, please fork it on{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nitinmogalapalli/react-weather"
              >
                GitHub
              </a>{' '}
              and leave a star!
            </p>
            <p className="pt-4">
              Thanks for swinging by. Enjoy the rest of your day!
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

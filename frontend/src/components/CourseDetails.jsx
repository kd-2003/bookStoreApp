import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courseSectionsData } from '../data/coursesData';

const CourseDetails = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Find the course section
  const courseSection = courseSectionsData.find(course => course.id === sectionId);

  if (!courseSection) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Course Not Found</h1>
          <button
            onClick={() => navigate('/courses')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            ← Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Back Button */}
        <button
          onClick={() => navigate('/courses')}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold mb-8 transition-colors"
        >
          ← Back to Courses
        </button>

        {/* Hero Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 md:p-12">
          <div className="flex items-start gap-6 md:gap-8">
            <div className="text-6xl">{courseSection.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {courseSection.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {courseSection.title}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {courseSection.fullDescription}
              </p>

              {/* Course Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Target Audience</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {courseSection.targetAudience}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {courseSection.duration}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {courseSection.difficulty}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-lg">
            🎉 Start Learning Now
          </button>
        </div>

        {/* Topics Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            📚 Topics & Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseSection.topics.map((topic, index) => (
              <div
                key={index}
                onClick={() => setSelectedTopic(selectedTopic === index ? null : index)}
                className={`
                  p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer
                  ${selectedTopic === index
                    ? 'bg-blue-50 dark:bg-slate-800 border-blue-500 dark:border-blue-500 shadow-lg'
                    : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-400'
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {index + 1}. {topic.name}
                    </h3>
                    <p className={`text-sm transition-all duration-300 ${
                      selectedTopic === index
                        ? 'text-gray-700 dark:text-gray-300 opacity-100'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {topic.description}
                    </p>
                  </div>
                  <span className={`text-2xl ml-4 transition-transform duration-300 ${
                    selectedTopic === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </div>

                {/* Expanded Content */}
                {selectedTopic === index && (
                  <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-500">
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        What You'll Learn:
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>✓ Complete understanding of topic fundamentals</li>
                        <li>✓ Hands-on coding examples and exercises</li>
                        <li>✓ Real-world use cases and applications</li>
                        <li>✓ Practice problems and solutions</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📖 What's Included?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎥</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Video Lectures</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive video content</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">💻</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Code Examples</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ready-to-run code samples</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">📝</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Study Materials</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Downloadable resources</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✏️</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Assignments</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Practice with exercises</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎯</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Projects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Real-world projects</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏆</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Certification</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Industry-recognized cert</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-lg">
            Enroll Now & Get Started! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Job from "@/models/JobOffer";

const JobOfferCart = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const JOBS_PER_PAGE = 3;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  useEffect(() => {
    fetch(`${backendUrl}/bamboo-proxy/jobs`)
      .then((response) => response.json())
      .then((data: Job[]) => {
        const sortedJobs = data.sort((a, b) => {
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        });
        setJobs(sortedJobs);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="flex flex-col lg:h-screen py-20 overflow-hidden max-container padding-container mt-10 animate-fade-in">
      <div className="bg-gray-50 py-16 px-6 md:px-10 text-center rounded-2xl">
        <h2 className="text-5xl md:text-4xl font-bold text-secondary">
          <span className="text-primary">OPEN</span> POSITIONS
        </h2>
        <div className="p-6 max-w-6xl mx-auto">
          <div className="grid gap-6 lg:max-h-[75vh] lg:overflow-y-auto overflow-hidden">
            {currentJobs.map((job) => (
              <div
                key={job.id}
                className="border p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white rounded-2xl flex flex-col items-start"
                onClick={() => setSelectedJob(job)}
              >
                <h2 className="text-xl font-bold text-secondary hover:text-primary">{job.title.label}</h2>
                <div className="grid grid-cols-4 gap-4 items-start w-full">
                  <div className="flex flex-col">
                    <p className="text-gray-600">{job.department.label}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500">📌 {job.location.label} (Hybrid)</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500">🕒 Full-Time CDI</p>
                  </div>
                  <div className="flex flex-col justify-start">
                    <a
                      href={job.postingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white py-2 px-2 rounded-2xl text-center hover:bg-red-800 transition-colors duration-300"
                    >
                      View Job Description
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={goToFirstPage}
              disabled={currentPage === 1}
              className="bg-secondary text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
            >
              Previous
            </button>
            
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
              className="bg-secondary text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOfferCart;
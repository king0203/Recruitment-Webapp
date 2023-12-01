// singlejobcard.jsx
import { BiTimeFive } from 'react-icons/bi';
const SingleJobCard = ({ jobData }) => {
	return (
	  <div className="group group/item singleJob w-[250px] p-[20px] bg-gradient-to-r from-blue-800 to-blue-600 rounded-[10px] hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 shadow-lg transition-transform duration-300">
		<span className="flex justify-between items-center gap-4">
		  <h1 className="text-[16px] font-semibold text-white">
			{jobData.jobTitle}
		  </h1>
		  <span className="flex items-center gap-1 text-[12px] text-gray-300">
			<BiTimeFive /> {jobData.jobPostingTime}
		  </span>
		</span>
  
		<h6 className="text-gray-300">{jobData.jobLocation}</h6>
  
		<p className="text-[13px] text-gray-400 pt-[20px] border-t-[2px] mt-[20px]">
		  {jobData.jobDescription}
		</p>
  
		<div className="company flex items-center gap-2">
		  <img
			src={jobData.companyLogo}
			alt={jobData.companyName}
			className="w-[10%] filter invert-[100%]"
		  />
		  <span className="text-[14px] py-[1rem] block text-white">
			{jobData.companyName}
		  </span>
		</div>
  
		<button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-white bg-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transform transition-all duration-300">
		  Apply Now
		</button>
	  </div>
	);
  };
  
  

export default SingleJobCard;

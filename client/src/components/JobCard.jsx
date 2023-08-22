import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?._id}`}>
      <div
        className="w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg 
                rounded-md px-3 py-5 "
      >
        <div className="w-full h-full flex flex-col justify-between ">
          <div className="flex items-center gap-3">
            <img src={job?.logo} alt={job?.name} className="h-10" />

            <div className="w-full h-12 flex flex-col justify-center">
              <p className="w-full flex items-center text-md font-semibold overflow-hidden leading-5">
                {job?.jobTitle}
              </p>
              <span className="flex text-sm gap-1.5">
                <GoLocation className="text-black-900 mt-0.5" />
                {job?.location}
              </span>
            </div>
          </div>

          <div className="py-3">
            <p className="text-sm">
              {job?.detail[0]?.desc?.slice(0, 100) + "..."}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm">
              {job?.jobType}
            </p>
            <span className="text-gray-500 text-sm">
              {moment(job?.createdAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;

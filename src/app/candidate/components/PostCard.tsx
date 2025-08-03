import React from "react";
import {
  MessageCircle,
  Repeat2,
  ThumbsUp,
  Share2,
  MoreHorizontal,
  MapPinIcon,
  UsersIcon,
  BriefcaseIcon,
} from "lucide-react";

type PostStats = {
  likes: number;
  comments: number;
  reposts: number;
};

type PostCardProps = {
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  hashtags?: string[];
  media?: string;
  stats: {
    likes: number;
    comments: number;
    reposts: number;
  };
  time: string;
  edited?: boolean;
  location?: string;
  vacancy?: number;
  job_type?: string;
};

export const PostCard: React.FC<PostCardProps> = ({
  user: { name, avatar, role },
  time,
  edited,
  content,
  hashtags = [],
  media,
  stats,
  location,
  vacancy,
  job_type,
}) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-2xl shadow p-4 md:p-6 space-y-4 w-full mb-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <img
            src={avatar}
            alt={name}
            className="rounded-full object-cover w-12 h-12"
          />
          <div>
            <h2 className="text-sm text-gray-900 dark:text-gray-100">{name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
            <p className="text-xs text-gray-400">
              {time} {edited && "• Edited"}
            </p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>


      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Software Engineer 5+ Years Experience
      </h3>

      {/* Content */}
      <p className="text-gray-800 dark:text-gray-200 text-sm">{content}</p>

      {/* Hashtags */}
      {hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-blue-100 dark:bg-blue-800 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}


      {/* Location & Vacancy */}
      {(location || vacancy || job_type) && (
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-gray-300 mt-2">
          {location && (
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-4 h-4 text-blue-500" />
              <span>{location ?? "Remote, On-Site"}</span>
            </div>
          )}
          {vacancy !== undefined && (
            <div className="flex items-center gap-1">
              <UsersIcon className="w-4 h-4 text-green-500" />
              <span>{vacancy ?? "2"}</span>
            </div>
          )}
          {job_type !== undefined && (
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-4 h-4 text-purple-500" />
              <span>{job_type ?? "Permanent, Contract"}</span>
            </div>
          )}
        </div>
      )}

      {/* Image */}
      {/* {media && (
        <img
          src={media}
          alt="Post media"
          className="rounded-lg w-full object-cover max-h-96"
        />
      )} */}

      {/* Stats */}
      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 text-sm">
        <span>{stats.likes} Likes</span>
        <span>{stats.comments} Comments</span>
        <span>{stats.reposts} Reposts</span>
      </div>

      {/* Actions */}
      <div className="flex justify-around border-t border-gray-200 dark:border-gray-800 pt-4 text-gray-600 dark:text-gray-400 text-sm">
        <button className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400">
          <ThumbsUp className="w-4 h-4" />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400">
          <MessageCircle className="w-4 h-4" />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400">
          <Repeat2 className="w-4 h-4" />
          <span>Repost</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400">
          <Share2 className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

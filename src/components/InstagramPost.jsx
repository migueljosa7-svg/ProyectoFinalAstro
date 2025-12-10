import { useState } from 'react';

export default function InstagramPost({ imageUrl, caption, likes: initialLikes }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <img src={imageUrl} alt="Publicación de Instagram" className="w-full h-64 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handleLike}
            className={`text-2xl transition-colors duration-200 ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
          >
            {liked ? '❤️' : '🤍'}
          </button>
          <span className="text-sm text-gray-600 font-medium">{likes} Me gusta</span>
        </div>
        <p className="text-gray-800 text-sm">
          <span className="font-semibold mr-1">@ConciertoOficial</span>
          {caption}
        </p>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";

const Video = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Video {router.query.videoId}</h1>
    </div>
  );
};

export default Video;

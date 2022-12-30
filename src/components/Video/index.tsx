import { VideoStyle } from "./styles";

const Video = () => {
  return (
    <VideoStyle autoPlay muted loop>
      <source src="/art.mp4" type="video/mp4" />
    </VideoStyle>
  );
};
export default Video;

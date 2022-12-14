const Video = () => {
  return (
    <video width={"100%"} controls autoPlay muted>
      <source src="/art.mp4" type="video/mp4" />
    </video>
  );
};
export default Video;

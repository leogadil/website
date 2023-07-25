import HeadMeta from "../components/head";

const resume = () => {
  return (
    <div className="w-screen h-screen">
      <HeadMeta title="Resume" />
      <iframe src="/cv2023.pdf" className="w-full h-full" />
    </div>
  )
}

export default resume
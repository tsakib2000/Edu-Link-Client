
import slide1 from "../../assets/slide-1.jpg";


const Banner = () => {
  return (
<div
  className="hero h-[500px]"
  style={{
    backgroundImage: `url(${slide1})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Empowering Collaboration</h1>
      <p className="mb-5">
    Discover the power of teamwork and shared learning. Join us to innovate, inspire, and achieve together in a collaborative environment designed for success.
      </p>
 
    </div>
  </div>
</div>
  );
};

export default Banner;

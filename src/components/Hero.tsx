import hero from "../assets/PortadaPrincipal.png"
const Hero = () => {
  return (
    <div>
        <img src={hero} className="w-full max-h-[550px] object-cover" />
    </div>
  )
}

export default Hero
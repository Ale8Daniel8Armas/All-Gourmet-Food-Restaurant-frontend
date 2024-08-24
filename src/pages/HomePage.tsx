import landingImage from "../assets/SucursalMain.jfif";
import sectorLocation from "../assets/El-Bosque.jpeg";
const HomePage = () => {
  return (
    <div className = "flex flex-col gap 12">
        <div className = "bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className ="text-4xl font-bold tracking-tight text-orange-600">
                Solicite una orden hoy!
            </h1>
            <span className="text-xl">Comida de calidad a un clic!</span>
        </div>
        <div className = "grid md:grid-cols-2 gap-5">
            <img src = {landingImage}/>
            <div className = "flex flex-col items-center justify-center gap-4 text-center">
                <span className = "font-bold text-3x1 tracking-tigher">
                    No dudes en visitarnos!
                </span>
                <span>
                    Nuestra sucursal se encuentra en la Av. Siempre Viva, sector oriental
                    cerca del mall El Bosque al frente de la UPC.
                </span>
                <img src = {sectorLocation}/>
            </div>
        </div>
    </div>
  )
}

export default HomePage
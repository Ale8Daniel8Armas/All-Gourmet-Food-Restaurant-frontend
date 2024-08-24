const Footer = () => {
return (
  <div className = "bg-orange-500 py-10">
    <div className = "container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className = "text-3xl text-white font-bold tracking-tight">
            All Gourtmet Food 
        </span>
        <span className = "text-white font-bold tracking-tight flex gap-4">
            <span>Politica de Privacidad</span>
            <span>Términos de Servicio</span>
        </span>
    </div>
  </div>
  );
}

export default Footer
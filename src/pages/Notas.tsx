import Header from "../components/Header"
import { useDarkMode } from "../interfaces/DarkMode"

function Notas() {

    const { isDarkMode } = useDarkMode()

    const notas = [
        {
            titulo: 'Title',
            fecha: '20 - 08 - 24',
            quote: '',
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem est dolorem deleniti ex ratione rem, temporibus ut nesciunt expedita obcaecati',
        },
    ]

    return (
        <>
            <Header />
            <div className="max-w-screen-lg mx-auto px-2">
                <div className={`md:flex md:justify-between box-border px-5 py-3 my-10 rounded-md md:items-center  `}>

                    <h1 className="text-4xl font-bold mb-10 text-center md:mb-0 md:text-start">Mis Notas 🗒️</h1>
                    <div className="relative">
                        <input
                            type="search"
                            className={` block w-full h-[40px] sm:h-[45px] rounded-md shadow-md outline-none pl-12 pr-4 text-sm sm:text-base ${isDarkMode ? 'bg-gray-800' : 'bg-white'} focus:ring-2 focus:ring-cyan-500`}
                            placeholder="Buscar Nota"
                        />
                        <svg
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                        </svg>

                    </div>
                </div>
                {notas.map((nota) => (
                    <div className={`p-5 shadow-md rounded-md box-border my-8 md:my-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>

                        <h3 className='font-bold text-2xl mb-5'>{nota.titulo}</h3>
                        <div className='flex gap-5 box-border'>

                            <div>
                                <p className='font-semibold my-5'>{nota.contenido}</p>
                                <p className="my-5">{nota.fecha}</p>
                                

                            </div>
                        </div>
                        <div className="flex gap-3 md:items-center">

                            <button className="px-3 py-2 bg-cyan-500 rounded text-white hover:bg-cyan-600 transition-colors">Descargar</button>


                            <a href="#" className="px-3 py-2 bg-cyan-500 rounded text-white hover:bg-cyan-600 transition-colors">Editar</a>
                            <a href="#" className="px-3 py-2 bg-red-500 rounded text-white hover:bg-red-600 transition-colors">Eliminar</a>

                        </div>
                    </div> 
                ))}

            </div>
        </>
    )
}

export default Notas
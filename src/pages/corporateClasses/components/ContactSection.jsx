import { Link } from "react-router-dom";

export const ContactSection = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-lg mx-auto text-center">
                <h3 className="text-3xl sm:text-4xl leading-normal font-bold tracking-tight text-gray-900">
                    Empieza hoy mismo
                </h3>
                <p className="mt-4 text-base leading-6 text-gray-700">
                    ¿Listo para comenzar? Contáctanos para más información o para agendar tu clase de prueba gratuita.
                </p>

                <div className="mt-10 text-left">
                    <ul className="space-y-4">
                        <li className="text-lg text-gray-800 break-words">
                            <strong>Teléfono:</strong> +502 4665-4564
                        </li>
                        <li className="text-lg text-gray-800 break-words">
                            <strong>Correo Electrónico:</strong> academiawindsorgt@gmail.com
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <Link to='/contacto' className="bg-dark-blue text-white px-7 py-3 rounded hover:bg-opacity-90 transition-colors duration-200">
                        Contáctanos
                    </Link>
                </div>
            </div>
        </div>
    );
}

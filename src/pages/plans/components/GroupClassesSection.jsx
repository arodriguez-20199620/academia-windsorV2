import { group } from "../../../assets/img";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const GroupClassesSection = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5  py-0 pb-12 lg:py-24  md:flex-row flex-col items-center">
                <div
                    className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-medium text-gray-900 leading-tight">
                        Clases grupales en línea
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Participa en nuestras clases grupales en línea y mejora tus habilidades junto a otros estudiantes. Ofrecemos una amplia gama de temas, adaptados a todos los niveles, con la flexibilidad que necesitas para aprender desde cualquier lugar.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/planes/clases-online" className="inline-flex text-white bg-dark-blue border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded text-lg">
                            Conoce Más
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full">
                    <LazyLoadImage
                        className="object-cover object-center rounded"
                        wrapperClassName="object-cover object-center rounded"
                        effect="blur"
                        alt="hero"
                        src={group}
                    />
                </div>
            </div>
        </section>
    );
}

import { Link } from "react-router-dom";
import { tutoring } from "../../../assets/img";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const PrivateClassesSection = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-0 pb-12 lg:py-24 md:flex-row flex-col-reverse items-center">
                <div className="lg:w-1/2 md:w-1/2 w-full mt-16 md:mt-0">
                    <LazyLoadImage
                        className="object-cover object-center rounded"
                        wrapperClassName="objket-cover object-center rounded"
                        alt="hero"
                        src={tutoring}
                        effect="blur"
                    />
                </div>
                <div
                    className="lg:w-1/2 md:w-1/2 w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center">
                    <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-medium text-gray-900 leading-tight">
                        Clases privadas personalizadas para ti
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Nuestras clases privadas están diseñadas para proporcionar una experiencia de aprendizaje intensa y personalizada.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/planes/clases-privadas" onClick={() => console.log()} className="inline-flex text-white bg-dark-blue border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded text-lg">
                            Conoce Más
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

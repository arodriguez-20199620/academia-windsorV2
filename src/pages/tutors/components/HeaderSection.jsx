import { TeamSection } from "../../onlineGroupClasses/components";

export const HeaderSection = () => {
    return (
        <section className="bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Conoce a nuestro equipo de profesores
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    En Academia Windsor, nuestro equipo de profesores está compuesto por expertos altamente capacitados y apasionados por la enseñanza de idiomas. Procedentes de diversas partes del mundo, nuestros docentes combinan su experiencia internacional con un profundo conocimiento de los idiomas que enseñan.
                </p>

            </div>
        </section>
    );
};

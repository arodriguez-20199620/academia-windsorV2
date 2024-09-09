import { Card } from 'primereact/card';

const profesoresData = [
    {
        title: 'Nuestros Profesores de Inglés',
        description: 'Nuestros profesores de inglés cuentan con una sólida formación en la enseñanza del idioma y una experiencia significativa en la formación de estudiantes de todos los niveles. Utilizan métodos dinámicos y personalizados para garantizar que cada alumno desarrolle sus habilidades lingüísticas de manera efectiva y divertida.',
        color: 'bg-blue-100',
    },
    {
        title: 'Nuestros Profesores de Francés',
        description: 'Con una experiencia extensa en la enseñanza del francés, nuestros instructores están especializados en la combinación de la gramática con la inmersión cultural. Este enfoque permite a los estudiantes no solo aprender el idioma, sino también entender y apreciar la rica cultura francófona.',
        color: 'bg-yellow-100',
    },
    {
        title: 'Nuestros Profesores de Alemán',
        description: 'Nuestros expertos en alemán están altamente calificados y cuentan con una experiencia notable en la preparación de exámenes oficiales. Ofrecen técnicas de estudio y prácticas efectivas que ayudan a los estudiantes a alcanzar sus objetivos académicos y profesionales en el idioma.',
        color: 'bg-green-100',
    },
    {
        title: 'Nuestros Profesores de Italiano',
        description: 'Los profesores de italiano de nuestra academia tienen una formación académica sólida y una profunda pasión por la literatura y la cultura italianas. Su metodología se enfoca en una enseñanza interactiva que enriquece la experiencia del aprendizaje del idioma.',
        color: 'bg-red-100',
    },
    {
        title: 'Nuestros Profesores de Portugués',
        description: 'Especializados en el portugués y la lingüística aplicada, nuestros profesores brindan una enseñanza moderna y rigurosa. Utilizan enfoques prácticos y efectivos para ayudar a los estudiantes a lograr una comunicación fluida en el idioma.',
        color: 'bg-purple-100',
    },
    {
        title: 'Nuestros Profesores de Español',
        description: 'Nuestros profesores de español poseen una amplia experiencia en la enseñanza del idioma, tanto para hablantes nativos como para estudiantes internacionales. Utilizan métodos interactivos y personalizados para facilitar el aprendizaje y la inmersión en la rica cultura hispanohablante.',
        color: 'bg-orange-100',
    },
];

export const ProfesoresSection = () => {
    return (
        <section className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6">
                {profesoresData.map((profesor, index) => (

                    <Card key={index} title={profesor.title} className='p-3 rounded-lg shadow-lg'>
                        <p className="m-0">
                            {profesor.description}
                        </p>
                    </Card>
                ))}
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Por qué elegir a nuestros profesores?</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Experiencia Internacional: Nuestros profesores han trabajado y vivido en países de habla de los idiomas que enseñan, ofreciendo una perspectiva auténtica.</li>
                    <li>Métodos Innovadores: Emplean técnicas de enseñanza actualizadas y probadas para garantizar una experiencia de aprendizaje efectiva.</li>
                    <li>Enfoque Personalizado: Adaptan las clases a las necesidades individuales para maximizar el progreso de cada estudiante.</li>
                    <li>Compromiso con el Éxito: Están dedicados a tu progreso y te apoyan en cada paso de tu camino hacia el dominio del idioma.</li>
                </ul>
            </div>
        </section>
    );
};
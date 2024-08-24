import useDocumentTitle from '../../hooks/useDocumentTitle';
import { HeaderSection, ProfesoresSection } from './components';


const TutoresPage = () => {
    useDocumentTitle('Academia Windsor | Tutores');
    return (
        <>
            <HeaderSection />
            <div className="min-h-screen bg-gray-100 p-6">
                <ProfesoresSection />
            </div>
        </>
    );

};

export default TutoresPage;

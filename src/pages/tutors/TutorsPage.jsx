import useDocumentTitle from '../../hooks/useDocumentTitle';
import { HeaderSection, ProfesoresSection } from './components';


const TutoresPage = () => {
    useDocumentTitle('Academia Windsor | Tutores');
    return (
        <>
            <HeaderSection />
            <ProfesoresSection />

        </>
    );

};

export default TutoresPage;

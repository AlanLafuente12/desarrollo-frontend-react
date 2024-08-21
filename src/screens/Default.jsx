import Logo from './_components/Logo';
import Descripcion from './_components/Description';
import OpenLink from '../components/OpenLink';

const Default = () => {
    return (
        <>
            <header className='App-header'>
                <Logo/>
                <Descripcion/>
                <OpenLink 
                    title='Learn React' 
                    url='https://reactjs.org'
                />
                <OpenLink 
                    title='Mi Proyecto (Github)' 
                    url='https://github.com/AlanLafuente12/desarrollo-frontend-react.git'
                />
            </header>
        </>
    );
}
export default Default;
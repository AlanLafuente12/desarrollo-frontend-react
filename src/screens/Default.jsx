import Logo from './Default/_components/Logo';
import Descripcion from './Default/_components/Description';
import OpenLink from '../components/OpenLink';
import Contador from './Default/_components/Contador';

const Default = () => {
    return (
        <>
            <header className='App-header'>
                <Contador/>
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
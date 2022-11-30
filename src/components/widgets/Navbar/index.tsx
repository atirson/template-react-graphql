import { useEffect, useState } from 'react';
import { Button } from '@app/components/elements/Button';
import { Heading } from '@app/components/elements/Heading';
import { Text } from '@app/components/elements/Text';
import { DownloadSimple } from 'phosphor-react';
import Logo from '@assets/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const screen = window.screen.width;

  useEffect(() => {
    if (screen > 1024) {
      setIsOpen(false);
    }
  }, [screen]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 px-1 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="flex items-center gap-4">
          <div className="h-[80px] flex justify-center ">
            <img src={Logo} alt="Logo" />
          </div>
          <Heading asChild>
            <h1 className="font-bold">Atirson Fabiano</h1>
          </Heading>
      </div>
     </div>
     <div className="block lg:hidden px-1">
      <button onClick={handleToggle} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
     </div>
     <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all ${isOpen ? 'collapse-content' : ''}`}>
      <div className="text-sm lg:flex-grow">
          <ul className="xl:flex-row xl:justify-end xl:flex gap-4 items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-2">
            {['Home', 'Skills', 'Experiences', 'Follow Me'].map((item) => (
              <li className="mb-2" key={item}>
                <Text size="lg">{item}</Text>
              </li>
            ))}
            <li className='max-w-[400px]'>
              <Button color="gray">
                Download CV
                {' '}
                <DownloadSimple weight="bold" size={20} />
              </Button>
            </li>
          </ul>
        </div>
       </div>
    </nav>
  );
}

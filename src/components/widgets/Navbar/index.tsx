import { Button } from '@app/components/elements/Button';
import { Heading } from '@app/components/elements/Heading';
import { Text } from '@app/components/elements/Text';
import Logo from '@assets/logo.png';
import { DownloadSimple } from 'phosphor-react';

export function Navbar() {
  return (
    <nav className="bg-transparent flex justify-between items-center p-4 w-full max-w-[1200px] max-h-[100px]">
      <div className="h-[80px] flex justify-center items-center gap-4">
        <div className="h-[80px] flex justify-center ">
          <img src={Logo} alt="Logo" />
        </div>
        <Heading asChild>
          <h1 className="font-bold">Atirson Fabiano</h1>
        </Heading>
      </div>
      <div>
        <ul className="flex gap-5 items-center">
          {['Home', 'Skills', 'Experiences', 'Follow Me'].map((item) => (
            <li key={item}>
              <Text size="lg">{item}</Text>
            </li>
          ))}
          <li>
            <Button color="gray">
              Download CV
              {' '}
              <DownloadSimple weight="bold" size={20} />
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

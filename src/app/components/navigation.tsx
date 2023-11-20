import Image from 'next/image';
import Link from 'next/link';
import navigationLogo from './../../assets/images/layout/nav/text-logo.png';
import hamburgerIcon from './../../assets/images/layout/nav/hamburger.png';
import { useState } from 'react';

export default function Navigation() {
  const [isSidemModalOpen, setIsSidemModalOpen] = useState(false);

  return (
    <div className='relative z-50 p-8'>
      <div className='flex justify-between items-center'>
        <Link href={'/'}>
          <Image src={navigationLogo} alt='navigationLogo' width={194} height={43} />
        </Link>
        <button className='border-none p-0' onClick={() => {setIsSidemModalOpen(!isSidemModalOpen)}}>
          <Image src={hamburgerIcon} alt='hamburgerIcon' width={24} height={24} />
        </button>
      </div>
      {isSidemModalOpen && <div>dksjfljsfljkl</div>}
    </div>
  );
}

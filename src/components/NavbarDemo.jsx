import { User } from 'lucide-react';
import { FloatingNav } from './ui/floating-navbar';
import { MdMiscellaneousServices } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
export function NavbarDemo() {
  const navItems = [
    {
      name: 'About',
      link: '/about',
      icon: <User className="h-6 w-6 mr-2 text-neutral-500 " />,
    },
    {
      name: 'Services',
      link: '/services',
      icon: (
        <MdMiscellaneousServices className="h-6 w-6 mr-2 text-neutral-500" />
      ),
    },
    {
      name: 'Products',
      link: '/products',
      icon: <AiOutlineProduct className="h-6 w-6 mr-2 text-neutral-500" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

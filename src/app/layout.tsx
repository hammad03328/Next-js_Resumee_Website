import './globals.css';
import Navbar from '@/Components/Navbar'
import C_box from '@/Components/C_box';
import { Metadata} from 'next';

export const metadata:Metadata = {
  title: 'Portfolio Hammad_Wahab',
  description: 'ACME is a...',
  icons: {icon:"/Work/Ham.png",},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className='bg-black  scrollbar-corner-pri scrollbar-thin scrollbar-thumb-pri scrollbar-thumb-rounded-lg '>
        <div className=' z-50 sticky -top-32'><C_box/></div>  
        <div className='sticky top-0 z-40'><Navbar/></div>
        {children}
      </body>
    </html>
  );
}
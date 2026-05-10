import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <header className="header mt-5!">
      <div className="auto_container">
        <div className="wrap flex items-center justify-between pb-5 gap-4 border-solid border-0 border-b border-[#9DB7BC]/40">
          <Link href="/" className="h-[30px] block">
            <Image
              width={260}
              height={30}
              src="/images/logo.png"
              className='w-full h-full object-contain'
              alt="logo"
            />
          </Link>

          <nav className="block">
            <div className="flex items-center gap-[17px]">
              <Link href="/schedule" className="text-sm font-medium block">
                Расписание
              </Link>
              <Link href="/contacts" className="text-sm font-medium block">
                Контакты
              </Link>
              <Link href="/registration" className="text-sm font-medium block">
                Регистрация
              </Link>
            </div>
          </nav>

          <Link href="#" className="text-sm font-medium text-center block border-solid border border-[#9DB7BC] py-3 w-[220px] rounded-lg">
            Забронировать место
          </Link>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";


export default function Contacts() {
  return (
    <main className="relative block mt-[80px]">
      <section className="block pb-[60px]">
        <div className="auto_container">
          <div className="wrap">
            <h1 className="text-2xl md:text-[36px] font-semibold leading-tight w-full text-center max-w-[690px] mx-auto uppercase">
              Остались вопросы? <span className="text-[#FF6A00]"> Свяжитесь с нами удобным способом </span>
            </h1>

            <div className="grid grid-cols-12 mt-10 gap-5">
              <div className="block col-span-7 rounded-xl overflow-hidden">
                <Image
                  width={670}
                  height={400}
                  src="/images/contact.png"
                  className='w-full h-full object-cover'
                  alt="logo"
                />
              </div>

              <div className="block col-span-5">
                <form action="#">
                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="name">
                      Имя
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="name" placeholder="Имя" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="email">
                      Email
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="email" id="email" placeholder="Email" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="message">
                      Сообщение
                    </label>
                    <textarea className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[120px]" name="message" id="message"></textarea>
                  </div>

                  <button type="submit" className="bg-[#FF6A00] text-lg font-semibold leading-tight text-center text-white py-[18px] px-3 rounded-lg cursor-pointer w-full mt-5">
                    Задать вопрос
                  </button>
                </form>
              </div>
            </div>

            <div className="flex mt-8">
              <div className="block">
                <h5 className="text-2xl font-semibold leading-tight text-[#FF6A00] mb-5">
                  Контакты
                </h5>

                <Link href="tel:952-393-3724" className="flex items-center gap-[14px] mb-[14px]">
                  <span className="block min-w-8">
                    <svg className="w-full h-full object-contain" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4487 15.0669C16.5871 14.9747 16.7464 14.9186 16.9121 14.9035C17.0778 14.8885 17.2446 14.915 17.3974 14.9806L23.2924 17.6219C23.4911 17.7068 23.6569 17.8538 23.7651 18.0408C23.8732 18.2278 23.9179 18.4448 23.8924 18.6594C23.6982 20.1107 22.9835 21.4421 21.8812 22.4059C20.779 23.3698 19.3641 23.9005 17.8999 23.8994C13.3912 23.8994 9.06721 22.1083 5.87909 18.9202C2.69097 15.7321 0.899904 11.4081 0.899904 6.89939C0.898784 5.43514 1.4295 4.02032 2.39336 2.91805C3.35721 1.81578 4.68859 1.10109 6.1399 0.906886C6.35445 0.881399 6.57147 0.926079 6.7585 1.03424C6.94552 1.1424 7.09249 1.30822 7.1774 1.50689L9.81865 7.40689C9.88355 7.55842 9.90998 7.72365 9.89558 7.88787C9.88119 8.05209 9.82642 8.2102 9.73615 8.34814L7.0649 11.5244C6.97015 11.6674 6.91412 11.8325 6.90229 12.0036C6.89045 12.1747 6.92323 12.346 6.9974 12.5006C8.03115 14.6169 10.2187 16.7781 12.3412 17.8019C12.4966 17.8757 12.6687 17.9078 12.8403 17.8948C13.012 17.8819 13.1773 17.8245 13.3199 17.7281L16.4487 15.0669Z" stroke="#FF6A00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>

                  <p className="text-2xl font-semibold leading-tight">
                    952-393-3724
                  </p>
                </Link>
                <Link href="mailto:oasiscampmn@gmail.com" className="flex items-center gap-[14px]">
                  <span className="block min-w-8">
                    <svg className="w-full h-full object-contain" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_3306)">
                        <path d="M25 1L13 12L1 1" stroke="#FF6A00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 1H25V18C25 18.2652 24.8946 18.5196 24.7071 18.7071C24.5196 18.8946 24.2652 19 24 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V1Z" stroke="#FF6A00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.8186 10L1.30859 18.7175" stroke="#FF6A00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.6912 18.7175L15.1812 10" stroke="#FF6A00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_3306">
                          <rect width="26" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>

                  <p className="text-2xl font-semibold leading-tight">
                    oasiscampmn@gmail.com
                  </p>
                </Link>

                <p className="text-sm font-normal leading-tight mt-5">
                  Контактное лицо — Иван Пискун
                </p>
              </div>

              <div className="block ml-[100px]">
                <h5 className="text-2xl font-semibold leading-tight text-[#FF6A00] mb-5">
                  Соцсети
                </h5>

                <div className="flex items-center gap-[6px]">
                  <Link href="#" className="w-[42px] block">
                    <svg className="w-full h-full object-contain" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="42" height="42" rx="8" fill="#9CB7BB" />
                      <g clip-path="url(#clip0_1_3335)">
                        <path d="M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27 9H15C11.6863 9 9 11.6863 9 15V27C9 30.3137 11.6863 33 15 33H27C30.3137 33 33 30.3137 33 27V15C33 11.6863 30.3137 9 27 9Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.5 15.75C28.1904 15.75 28.75 15.1904 28.75 14.5C28.75 13.8096 28.1904 13.25 27.5 13.25C26.8096 13.25 26.25 13.8096 26.25 14.5C26.25 15.1904 26.8096 15.75 27.5 15.75Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_3335">
                          <rect x="5" y="5" width="32" height="32" rx="4" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>

                  <Link href="#" className="w-[42px] block">
                    <svg className="w-full h-full object-contain" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="42" height="42" rx="8" fill="#9CB7BB" />
                      <g clip-path="url(#clip0_1_3341)">
                        <path d="M21 33C27.6274 33 33 27.6274 33 21C33 14.3726 27.6274 9 21 9C14.3726 9 9 14.3726 9 21C9 27.6274 14.3726 33 21 33Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26 16H24C23.2044 16 22.4413 16.3161 21.8787 16.8787C21.3161 17.4413 21 18.2044 21 19V33" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 23H25" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_3341">
                          <rect width="32" height="32" fill="white" transform="translate(5 5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="map relative h-[400px] bg-[#D9D9D9] rounded-xl overflow-hidden mt-[60px]">
              <div className="block w-full max-w-[440px] absolute left-10 bottom-9 bg-white/95 rounded-lg p-[26px]">
                <h6 className="text-2xl font-semibold leading-tight text-[#FF6A00] mb-5">
                  Локация
                </h6>
                <p className="text-base font-normal leading-tight">
                  Eagle Lake Camp and Retreat Center <br />
                  17040 Co. Rd 102, Brainerd, MN 56401
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

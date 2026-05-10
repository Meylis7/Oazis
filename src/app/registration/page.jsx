"use client";

import Image from "next/image";
import { useState } from "react";

export default function Registration() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className="relative mt-[80px]">
      <section>
        <div className="auto_container">
          <div className="wrap">
            <h1 className="text-[36px] font-semibold leading-tight w-full text-center max-w-[690px] mx-auto uppercase">
              <span className="text-[#FF6A00]">3 шага </span> регистрации
            </h1>

            <div className="steps flex items-end gap-5 mt-[-80px]">
              <div 
                onClick={() => setActiveStep(1)}
                className={`flex flex-col rounded-lg cursor-pointer p-[26px] w-full max-w-[307px] h-[160px] transition-all duration-300 ${activeStep === 1 ? 'active bg-[#FF6A00]/15 shadow-[4px_4px_10px_rgba(55,23,0,0.05)]' : 'bg-[#FAF2ED]'}`}
              >
                <div className="flex items-center justify-between">
                  <h6 className="bg-[#FF6A00] rounded-full py-[6px] px-[16px] text-xs font-semibold leading-tight text-white">
                    Шаг 1
                  </h6>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7071 8.07112C15.0976 7.6806 15.0976 7.04743 14.7071 6.65691L8.34315 0.292947C7.95262 -0.0975778 7.31946 -0.0975779 6.92893 0.292946C6.53841 0.683471 6.53841 1.31664 6.92893 1.70716L12.5858 7.36401L6.92893 13.0209C6.53841 13.4114 6.53841 14.0446 6.92893 14.4351C7.31946 14.8256 7.95262 14.8256 8.34314 14.4351L14.7071 8.07112ZM0 7.36401L-8.74228e-08 8.36401L14 8.36401L14 7.36401L14 6.36401L8.74228e-08 6.36401L0 7.36401Z" fill="#FF6A00" />
                    </svg>
                  </span>
                </div>

                <p className="text-sm font-normal leading-tight mt-auto">
                  Заполните форму регистрации
                </p>
              </div>

              <div 
                onClick={() => setActiveStep(2)}
                className={`flex flex-col rounded-lg cursor-pointer p-[26px] w-full max-w-[307px] h-[160px] transition-all duration-300 ${activeStep === 2 ? 'active bg-[#FF6A00]/15 shadow-[4px_4px_10px_rgba(55,23,0,0.05)]' : 'bg-[#FAF2ED]'}`}
              >
                <div className="flex items-center justify-between">
                  <h6 className="bg-[#FF6A00] rounded-full py-[6px] px-[16px] text-xs font-semibold leading-tight text-white">
                    Шаг 2
                  </h6>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7071 8.07112C15.0976 7.6806 15.0976 7.04743 14.7071 6.65691L8.34315 0.292947C7.95262 -0.0975778 7.31946 -0.0975779 6.92893 0.292946C6.53841 0.683471 6.53841 1.31664 6.92893 1.70716L12.5858 7.36401L6.92893 13.0209C6.53841 13.4114 6.53841 14.0446 6.92893 14.4351C7.31946 14.8256 7.95262 14.8256 8.34314 14.4351L14.7071 8.07112ZM0 7.36401L-8.74228e-08 8.36401L14 8.36401L14 7.36401L14 6.36401L8.74228e-08 6.36401L0 7.36401Z" fill="#FF6A00" />
                    </svg>
                  </span>
                </div>

                <p className="text-sm font-normal leading-tight mt-auto">
                  Подпишите Release and Waiver of Liability
                </p>
              </div>

              <div 
                onClick={() => setActiveStep(3)}
                className={`flex flex-col rounded-lg cursor-pointer p-[26px] w-full max-w-[307px] h-[160px] transition-all duration-300 ${activeStep === 3 ? 'active bg-[#FF6A00]/15 shadow-[4px_4px_10px_rgba(55,23,0,0.05)]' : 'bg-[#FAF2ED]'}`}
              >
                <div className="flex items-center justify-between">
                  <h6 className="bg-[#FF6A00] rounded-full py-[6px] px-[16px] text-xs font-semibold leading-tight text-white">
                    Шаг 3
                  </h6>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7071 8.07112C15.0976 7.6806 15.0976 7.04743 14.7071 6.65691L8.34315 0.292947C7.95262 -0.0975778 7.31946 -0.0975779 6.92893 0.292946C6.53841 0.683471 6.53841 1.31664 6.92893 1.70716L12.5858 7.36401L6.92893 13.0209C6.53841 13.4114 6.53841 14.0446 6.92893 14.4351C7.31946 14.8256 7.95262 14.8256 8.34314 14.4351L14.7071 8.07112ZM0 7.36401L-8.74228e-08 8.36401L14 8.36401L14 7.36401L14 6.36401L8.74228e-08 6.36401L0 7.36401Z" fill="#FF6A00" />
                    </svg>
                  </span>
                </div>

                <p className="text-sm font-normal leading-tight mt-auto">
                  Оплатите участие или введите код спонсорской регистрации
                </p>
              </div>

              <div className="block">
                <Image
                  width={670}
                  height={400}
                  src="/images/oazis.png"
                  className='w-full h-full object-cover'
                  alt="logo"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 w-full mt-5">
              <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
              <p className="text-base font-normal leading-tight">
                После этого: вас добавят в Viber-группу лагеря
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[120px]">
        <div className="auto_container">
          <div className="wrap">
            <h1 className="text-[36px] font-semibold leading-tight w-full uppercase">
              <span className="text-[#FF6A00]">Заполните регистрацию </span> для участия ребёнка в лагере
            </h1>
            <p className="text-base font-normal leading-6 mt-4 w-full max-w-[915px]">
              После регистрации вы будете включены в Viber группу лагеря, где будет выставляться подробная информация каждого дня. Видео, фото и короткие сообщения. Скачайте и оформитесь на Viber если у вас нет аккаунта
            </p>


            <form action="#" className="form grid grid-cols-12 gap-8 mt-[56px]">
              <div className="grid grid-cols-12 col-span-12">
                <div className="block col-span-6">
                  <h4 className="text-xl font-medium leading-tight mb-5">
                    1. Information about child / Информация о ребёнке
                  </h4>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="name">
                      Имя
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="name" placeholder="Имя" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="surename">
                      Last / Фамилия
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="surename" placeholder="Фамилия" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="brithDate">
                      DOB / Дата рождения
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="brithDate" placeholder="XX.XX.XXXX" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="email">
                      Email
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="email" id="email" placeholder="Email" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 gap-5">
                <h4 className="text-xl font-medium leading-tight mb-5 col-span-12">
                  2. Parents information / Контактная информация родителей
                </h4>

                <div className="block col-span-6">
                  <h6 className="text-base font-medium leading-tight mb-4">
                    Mother / Мать:
                  </h6>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="M-name">
                      Имя
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="M-name" placeholder="Имя" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="M-surename">
                      Last / Фамилия
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="M-surename" placeholder="Фамилия" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="M-cellPhone">
                      Cell / Телефон
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="M-cellPhone" placeholder="+" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="address">
                      Address / Адрес проживания
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="address" id="email" placeholder="Адрес проживания" />
                  </div>
                </div>

                <div className="block col-span-6">
                  <h6 className="text-base font-medium leading-tight mb-4">
                    Father / Отец:
                  </h6>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="F-name">
                      Имя
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="F-name" placeholder="Имя" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="F-surename">
                      Last / Фамилия
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="F-surename" placeholder="Фамилия" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="F-cellPhone">
                      Cell / Телефон
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="F-cellPhone" placeholder="+" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12">
                <div className="block col-span-6">
                  <h4 className="text-xl font-medium leading-tight mb-5 col-span-12">
                    3. Medical info / Медицинская информация
                  </h4>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="physicianName">
                      Primary Physician’s name / Имя лечащего врача
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="physicianName" placeholder="Имя лечащего врача" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="clinicPhone">
                      Primary clinic phone / Телефон клиники
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="clinicPhone" placeholder="+" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12">
                <div className="block col-span-6">
                  <h4 className="text-xl font-medium leading-tight mb-5 col-span-12">
                    4. Health insurance / Медицинская страховка
                  </h4>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="companyName">
                      Company / Страховая компания
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="companyName" placeholder="Имя лечащего врача" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="police">
                      Policy #
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="police" placeholder="+" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="group">
                      Group #
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="group" placeholder="+" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12">
                <div className="block col-span-6">
                  <h4 className="text-xl font-medium leading-tight mb-5 col-span-12">
                    5. Дополнительно
                  </h4>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="emergency">
                      Контакт на случай ЧС
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="emergency" placeholder="+" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="alergic">
                      Аллергии
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="alergic" placeholder="" />
                  </div>

                  <div className="block mb-3">
                    <label className="text-base font-normal leading-tight mb-1 block" htmlFor="importantMessage">
                      Любая важная информация
                    </label>
                    <textarea className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[140px]" name="importantMessage" id="importantMessage"></textarea>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12">
                <div className="block col-span-6">
                  <h4 className="text-xl font-medium leading-tight mb-5 col-span-12">
                    6. Был ли ребёнок раньше в лагерях?
                  </h4>

                  <div className="block mb-3 check">
                    <input type="radio" name="lagers" id="lagers-yes" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="lagers-yes">
                      Да, уже ездил
                    </label>
                  </div>

                  <div className="block mb-3 check">
                    <input type="radio" name="lagers" id="lagers-no" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="lagers-no">
                      Нет, будет впервые
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12">
                <div className="block col-span-6">
                  <h4 className="text-xl font-medium leading-tight mb-5 col-span-12">
                    7. Что для вас важнее всего?
                  </h4>

                  <div className="block mb-3 check">
                    <input type="radio" name="important" id="control" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="control">
                      Безопасность и контроль
                    </label>
                  </div>

                  <div className="block mb-3 check">
                    <input type="radio" name="important" id="friends" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="friends">
                      Новые друзья и общение
                    </label>
                  </div>

                  <div className="block mb-3 check">
                    <input type="radio" name="important" id="rest" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="rest">
                      Активный отдых
                    </label>
                  </div>

                  <div className="block mb-3 check">
                    <input type="radio" name="important" id="learn" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="learn">
                      Развитие и программа
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12">
                <div className="block col-span-6">
                  <h4 className="text-xl font-medium leading-tight mb-5 col-span-12">
                    8. Насколько ребёнок зависит от телефона?
                  </h4>

                  <div className="block mb-3 check">
                    <input type="radio" name="addictPhone" id="always" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="always">
                      Почти постоянно в телефоне
                    </label>
                  </div>

                  <div className="block mb-3 check">
                    <input type="radio" name="addictPhone" id="sometimes" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="sometimes">
                      Иногда пользуется
                    </label>
                  </div>

                  <div className="block mb-3 check">
                    <input type="radio" name="addictPhone" id="noUse" />
                    <label className="text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="noUse">
                      Спокойно обходится
                    </label>
                  </div>
                </div>
              </div>

              <div className="block mt-2 col-span-6">
                <button type="submit" className="bg-[#FF6A00] text-lg font-semibold leading-tight text-center text-white py-[18px] px-3 rounded-lg cursor-pointer w-full">
                  Задать вопрос
                </button>

                <p className="text-sm font-normal leading-tight mt-2 text-center">
                  Проверим данные и свяжемся с вами для подтверждения участия
                </p>

                <div className="flex items-start mt-10">
                  <p className="text-[#FF6A00] text-lg font-normal leading-tight mr-4">
                    ВАЖНО:
                  </p>
                  <p className="text-base font-normal leading-tight">
                    Скачайте и установите Viber. После регистрации вы получите приглашение в информационную группу лагеря
                  </p>
                </div>
              </div>

            </form>
          </div>
        </div>
      </section>




      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </main>

  );
}

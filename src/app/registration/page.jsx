"use client";

import Image from "next/image";
import { useState } from "react";

export default function Registration() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className="relative mt-[80px]">
      <section className="block">
        <div className="auto_container">
          <div className="wrap">
            <h1 className="text-2xl md:text-[36px] font-semibold leading-tight uppercase">
              <span className="text-[#FF6A00]">3 шага </span> регистрации
            </h1>

            <div className="steps flex flex-col lg:flex-row items-start gap-5 mt-10 relative! lg:pr-[180px]">
              <div
                onClick={() => setActiveStep(1)}
                className={`flex flex-col rounded-lg cursor-pointer p-[26px] w-full max-w-[260px] md:max-w-[307px] min-h-[140px] md:min-h-[160px] transition-all duration-300 relative z-10 ${activeStep === 1 ? 'active bg-[#FF6A00]/15 shadow-[4px_4px_10px_rgba(55,23,0,0.05)]' : 'bg-[#FAF2ED]'}`}
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
                className={`flex flex-col rounded-lg cursor-pointer p-[26px] w-full max-w-[260px] md:max-w-[307px] min-h-[140px] md:min-h-[160px] transition-all duration-300 relative z-10 ${activeStep === 2 ? 'active bg-[#FF6A00]/15 shadow-[4px_4px_10px_rgba(55,23,0,0.05)]' : 'bg-[#FAF2ED]'}`}
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
                className={`flex flex-col rounded-lg cursor-pointer p-[26px] w-full max-w-[260px] md:max-w-[307px] min-h-[140px] md:min-h-[160px] transition-all duration-300 relative z-10 ${activeStep === 3 ? 'active bg-[#FF6A00]/15 shadow-[4px_4px_10px_rgba(55,23,0,0.05)]' : 'bg-[#FAF2ED]'}`}
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

              <div className="oazisImg ">
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
              <p className="text-sm md:text-base font-normal leading-tight">
                После этого: вас добавят в Viber-группу лагеря
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full mt-[80px] md:mt-[120px] mb-[60px] sm:mb-[100px]">
        <section className={`step-1 transition-all duration-500 ease-in-out ${activeStep === 1 ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="auto_container">
            <div className="wrap">
              <h1 className="text-2xl md:text-[36px] font-semibold leading-tight w-full uppercase">
                <span className="text-[#FF6A00]">Заполните регистрацию </span> для участия ребёнка в лагере
              </h1>
              <p className="text-sm md:text-base font-normal leading-6 mt-4 w-full max-w-[915px]">
                После регистрации вы будете включены в Viber группу лагеря, где будет выставляться подробная информация каждого дня. Видео, фото и короткие сообщения. Скачайте и оформитесь на Viber если у вас нет аккаунта
              </p>


              <form action="#" className="form grid grid-cols-12 gap-6 md:gap-8 mt-10 md:mt-[56px]">
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20x] md:text-xl font-medium leading-tight mb-5">
                      1. Information about child / Информация о ребёнке
                    </h4>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="name">
                        Имя
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="name" placeholder="Имя" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="surename">
                        Last / Фамилия
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="surename" placeholder="Фамилия" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="brithDate">
                        DOB / Дата рождения
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="brithDate" placeholder="XX.XX.XXXX" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="email">
                        Email
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="email" id="email" placeholder="Email" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12 gap-5">
                  <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                    2. Parents information / Контактная информация родителей
                  </h4>

                  <div className="block col-span-12 md:col-span-6">
                    <h6 className="text-base font-medium leading-tight mb-4">
                      Mother / Мать:
                    </h6>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="M-name">
                        Имя
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="M-name" placeholder="Имя" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="M-surename">
                        Last / Фамилия
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="M-surename" placeholder="Фамилия" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="M-cellPhone">
                        Cell / Телефон
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="M-cellPhone" placeholder="+" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="address">
                        Address / Адрес проживания
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="address" id="email" placeholder="Адрес проживания" />
                    </div>
                  </div>

                  <div className="block col-span-12 md:col-span-6">
                    <h6 className="text-base font-medium leading-tight mb-4">
                      Father / Отец:
                    </h6>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="F-name">
                        Имя
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="F-name" placeholder="Имя" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="F-surename">
                        Last / Фамилия
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="F-surename" placeholder="Фамилия" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="F-cellPhone">
                        Cell / Телефон
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="F-cellPhone" placeholder="+" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      3. Medical info / Медицинская информация
                    </h4>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="physicianName">
                        Primary Physician’s name / Имя лечащего врача
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="physicianName" placeholder="Имя лечащего врача" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="clinicPhone">
                        Primary clinic phone / Телефон клиники
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="clinicPhone" placeholder="+" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      4. Health insurance / Медицинская страховка
                    </h4>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="companyName">
                        Company / Страховая компания
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="companyName" placeholder="Имя лечащего врача" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="police">
                        Policy #
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="police" placeholder="+" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="group">
                        Group #
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="group" placeholder="+" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      5. Дополнительно
                    </h4>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="emergency">
                        Контакт на случай ЧС
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="emergency" placeholder="+" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="alergic">
                        Аллергии
                      </label>
                      <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="alergic" placeholder="" />
                    </div>

                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="importantMessage">
                        Любая важная информация
                      </label>
                      <textarea className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[140px]" name="importantMessage" id="importantMessage"></textarea>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      6. Был ли ребёнок раньше в лагерях?
                    </h4>

                    <div className="block mb-3 check">
                      <input type="radio" name="lagers" id="lagers-yes" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="lagers-yes">
                        Да, уже ездил
                      </label>
                    </div>

                    <div className="block mb-3 check">
                      <input type="radio" name="lagers" id="lagers-no" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="lagers-no">
                        Нет, будет впервые
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      7. Что для вас важнее всего?
                    </h4>

                    <div className="block mb-3 check">
                      <input type="radio" name="important" id="control" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="control">
                        Безопасность и контроль
                      </label>
                    </div>

                    <div className="block mb-3 check">
                      <input type="radio" name="important" id="friends" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="friends">
                        Новые друзья и общение
                      </label>
                    </div>

                    <div className="block mb-3 check">
                      <input type="radio" name="important" id="rest" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="rest">
                        Активный отдых
                      </label>
                    </div>

                    <div className="block mb-3 check">
                      <input type="radio" name="important" id="learn" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="learn">
                        Развитие и программа
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      8. Насколько ребёнок зависит от телефона?
                    </h4>

                    <div className="block mb-3 check">
                      <input type="radio" name="addictPhone" id="always" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="always">
                        Почти постоянно в телефоне
                      </label>
                    </div>

                    <div className="block mb-3 check">
                      <input type="radio" name="addictPhone" id="sometimes" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="sometimes">
                        Иногда пользуется
                      </label>
                    </div>

                    <div className="block mb-3 check">
                      <input type="radio" name="addictPhone" id="noUse" />
                      <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor="noUse">
                        Спокойно обходится
                      </label>
                    </div>
                  </div>
                </div>

                <div className="block mt-2 col-span-12 md:col-span-6">
                  <button type="submit" className="bg-[#FF6A00] text-sm md:text-lg font-semibold leading-tight text-center text-white py-[18px] px-3 rounded-lg cursor-pointer w-full">
                    Задать вопрос
                  </button>

                  <p className="text-sm font-normal leading-tight mt-2 w-full max-w-[235px] md:max-w-full mx-auto text-center">
                    Проверим данные и свяжемся с вами для подтверждения участия
                  </p>

                  <div className="flex flex-col sm:flex-row items-start mt-10">
                    <p className="text-[#FF6A00] text-lg font-normal leading-tight mb-2 sm:mb-0 sm:mr-4">
                      ВАЖНО:
                    </p>
                    <p className="text-sm md:text-base font-normal leading-tight">
                      Скачайте и установите Viber. После регистрации вы получите приглашение в информационную группу лагеря
                    </p>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </section>

        <section className={`step-2 transition-all duration-500 ease-in-out ${activeStep === 2 ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="auto_container z-10">
            <div className="wrap">
              <h1 className="text-2xl md:text-[36px] font-semibold leading-tight w-full max-w-[650px] mx-auto uppercase text-center">
                PLEASE READ CAREFULLY. <span className="text-[#FF6A00]"> THIS DOCUMENT CONTAINS A RELEASE AND WAIVER OF LIABILITY </span>
              </h1>
              <p className="text-sm md:text-base font-normal leading-6 mt-3 md:mt-4 w-full max-w-[690px] mx-auto text-center">
                Пожалуйста, внимательно прочитайте документ ниже. Для завершения регистрации необходимо подтвердить согласие родителя и ребёнка
              </p>

              <div className="block w-full mt-6 md:mt-10">
                <Image
                  width={1160}
                  height={600}
                  src="/images/liability.png"
                  className='w-full h-full object-cover'
                  alt="logo"
                />
              </div>

              <div className="flex flex-col gap-5 mt-10">
                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      AGE GUIDELINES:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    The Oasis Camp is for children ages 9 to 12 years old. The participants will be divided into small groups dependent on age and gender.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      MEDICAL TREATMENT:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    I hereby give permission to the physicians and nurses selected by Oasis Camp Directors to assess and give medical treatment, including prescriptions, when necessary to my son/daughter. If
                    my son or daughter is arriving to camp with prescription medicine that I provide to camp staff, I authorize a designated camp staff person to dispense this prescribed medicine. In the
                    event that a guest requires special medication, transportation, X-ray or treatment beyond that which is possible at the resort, the parents will be charged with the additional expense. In case of surgical emergency, I hereby give permission to the physician selected by the Director of Oasis Camp to hospitalize, secure proper treatment for and to order injection, anesthesia or surgery for my child as named above and will be responsible for any additional expense that may result from such services.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      ALLERGIES:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    While I understand that Oasis Camp does its best to protect against exposure to nut products where there are allergies of which I have given written notice, I recognize that Oasis Camp does not accept responsibility or liability and I hereby release Oasis Camp for any illness or injury which may occur as a result of exposure by my child to any such food or other item to which my child has an allergy.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      CONSENT FOR TRANSPORTATION:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    I give permission for my child to be transported in a motor vehicle driven by designated Oasis Camp Staff to an off-site location to receive medical treatment in the event of an
                    emergency or if medical treatment is required. I recognize that by participating in this activity, as with any activity involving motor vehicle transportation, my child may risk personal injury or permanent loss. I hereby attest and verify that I have been advised of the potential risks, that I have full knowledge of the risks involved in this activity, and that I assume any expenses that may be incurred in the event of an accident, illness, or other incapacity, regardless of whether I have authorized such expenses.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      DRESS CODE:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    Children should dress appropriately for the activities scheduled. Oasis Camp recommends shorts and a light weight shirt or top, and some type of athletic shoe or sneaker in order to participate in recreational or athletic activities. Sandals, flip-flops, rubber "crocs"- style shoes, and other open-toed shoes are not recommended as acceptable attire for active recreation activities. Shirts should have a minimum of 1" wide shoulder straps. Clothing that displays drugs, alcohol, tobacco, offensive language, excessive bagginess, or is excessively revealing will not be permitted.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      PERSONAL BELONGINGS:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    Please put the child's name on all articles of clothing, bags, etc. Children should not bring toys, fireworks, jewelry, money, or any possession of value with them. Children will be responsible for their belongings. Oasis Camp is not responsible for any lost, stolen or damaged articles. No weapons of any kind, or items that may be used or mistaken as weapons. No cell phones, radios, MP3 players, iPods, tablets, laptops or other electronic equipment.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      SUNSCREEN/INSECT REPELLENT:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    Please provide sunscreen and insect repellent. Spray or mist sunscreen and/or insect repellent are recommended. Sunscreen and/or insect repellent must be labeled with child's name. Children may not share these items with others.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      CAMP RULES:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    No roughhousing or physical force; all campers must keep their hands to themselves and are not allowed to kick, hit, or hurt each other in any way. Campers will respect other people's property and camp property. No swearing or foul language; no name calling. Campers will clean up after themselves and be responsible for their personal belongings. No camper may leave their assigned group at any time without permission from their counselor.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      DISMISSAL AND BEHAVIOR:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    The Director reserves the right to dismiss a camper without a refund who, in his opinion, is a hazard to the safety or rights of others or who appears to him to have rejected the reasonable controls of the resort. I certify that I have no knowledge of any physical or mental impairment that would be affected by the named guest's participation in the Oasis Camp Program. I also give permission to the Directors of Oasis Camp to search my child's belongings for items prohibited by camp, if suspected. I agree to reimburse Oasis Camp for any intentional damage or defacement of camp property caused by my child.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      DISMISSAL AND BEHAVIOR:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    The Director reserves the right to dismiss a camper without a refund who, in his opinion, is a hazard to the safety or rights of others or who appears to him to have rejected the reasonable controls of the resort. I certify that I have no knowledge of any physical or mental impairment that would be affected by the named guest's participation in the Oasis Camp Program. I also give permission to the Directors of Oasis Camp to search my child's belongings for items prohibited by camp, if suspected. I agree to reimburse Oasis Camp for any intentional damage or defacement of camp property caused by my child.
                  </p>

                  <div className="flex items-start mt-5">
                    <p className="text-[#FF6A00] text-xl font-medium leading-tight mr-4">
                      NOTE:
                    </p>
                    <p className="text-sm md:text-base font-normal leading-tight">
                      Immediate dismissal from the camp can occur at any time given severe circumstances. Refunds due to a discipline dismissal will not be granted.
                    </p>
                  </div>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      NUTRITION/SNACKS:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    Children not allowed to bring a snack. Provide non-glass container for drink with label and the child's name. Please do not send gum or candy.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      SWIMMING:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    Children will need to bring a swimsuit or wear a swimsuit under their clothing for swim schedule time. Provide towels. Lycra swim shirts or rash guards are permissible. Cotton t-shirts, denim, or cotton shorts may not be worn in the water.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      MEDIA AND PHOTOGRAPHY RELEASE:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    I/We, named above grant permission to Oasis Camp, it's leadership team and volunteers the irrevocable and unrestricted right to produce photographs and video taken of my child, while at Oasis Camp Summer Camp for any lawful purpose including publication, promotion, illustration, advertising, trade, or historical archive in any manner or in any medium. I hereby release Oasis Camp and its legal representatives from liability for any violation or claims relating to said images or video. I waive my right, my child's rights, and my family's rights to any and all compensation stemming from the use of these materials.
                  </p>
                </div>

                <div className="block ">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                    <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                      LIABILITY:
                    </h6>
                  </div>

                  <p className="text-sm md:text-base font-normal leading-tight">
                    While every precaution is taken for the safety and good health of our guests, some sports and activities carry with them the inherent risk of personal injury beyond the risks associated with
                    many of the recreational activities at Oasis Camp. I understand and accept these risks and agree that by allowing my child to participate in those activities, he/she may be taking part in a recreational activity that presents the potential for personal injury. I understand that Oasis Camp assumes no responsibility for injuries or illnesses that participant may sustain, a.) as a result of participant's physical condition, b.) resulting from participant's participation in the activity, c.) as a result of another participant's or third person's actions, or d.) as a result of participant's use of Oasis Camp's facilities, surroundings, and/or equipment in connection with this activity. The participant releases and agrees to hold harmless, defend and indemnify Oasis Camp and its directors, staff volunteers,
                    and supporters (the "Releasees") from and against any and all claims for personal injury (including loss of life) and all other losses or damages that the participant may suffer as a result of his or her participation and/or enrollment in Oasis Camp's activities, notwithstanding that any such loss, injury or damage may have arisen by reason of negligence of the ["Releasees"].
                  </p>
                </div>
              </div>

              <form action="#" className="grid grid-cols-12 gap-5 mt-[60px]">
                <div className="block col-span-12 md:col-span-6">
                  <h6 className="mb-5 md:mb-10 text-sm md:text-base font-normal leading-tight">
                    This release constitutes a waiver of legal rights and by signing below, you are also indicating that you have read carefully and understand the contents of this waiver and release.
                  </h6>

                  <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-[6px]">
                    PARENT/GUARDIAN
                  </h4>
                  <p className="text-xs font-normal leading-tight text-[#242424]/80 mb-5">
                    (родитель или законный представитель)
                  </p>

                  <div className="block mb-[14px]">
                    <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="parentName">
                      Full name
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="parentName" placeholder="" />
                  </div>

                  <div className="block mb-[14px]">
                    <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="parentDate">
                      Date
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="parentDate" placeholder="" />
                  </div>

                  <div className="block">
                    <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="parentSignature">
                      Signature
                    </label>
                    <textarea className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[120px]" name="parentSignature" id="parentSignature"></textarea>
                  </div>
                </div>

                <div className="block col-span-12 md:col-span-6">
                  <h6 className="mb-5 md:mb-10 text-sm md:text-base font-normal leading-tight">
                    I have read the camp rules, understand them, and agree to follow them. I understand that if I break these rules, I will be asked to leave, and my parent/guardian will pick me up from camp.
                  </h6>

                  <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-[6px]">
                    CAMPER
                  </h4>
                  <p className="text-xs font-normal leading-tight text-[#242424]/80 mb-5">
                    (участник лагеря — ребёнок)
                  </p>

                  <div className="block mb-[14px]">
                    <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="camperName">
                      Full name
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="camperName" placeholder="" />
                  </div>

                  <div className="block mb-[14px]">
                    <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="camperDate">
                      Date
                    </label>
                    <input className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" type="text" id="camperDate" placeholder="" />
                  </div>

                  <div className="block">
                    <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor="camperSignature">
                      Signature
                    </label>
                    <textarea className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[120px]" name="camperSignature" id="camperSignature"></textarea>
                  </div>
                </div>

                <div className="col-span-12 mt-3">
                  <div className="flex flex-col sm:flex-row items-start mb-[22px]">
                    <p className="text-[#FF6A00] text-lg md:text-xl font-medium leading-tight mb-2 sm:mb-0 sm:mr-4">
                      ВАЖНО:
                    </p>
                    <p className="text-sm md:text-base font-normal leading-tight">
                      Скачайте и установите Viber. После регистрации вы получите приглашение в информационную группу лагеря
                    </p>
                  </div>

                  <div className="block mb-[22px] ruleCheck">
                    <input type="checkbox" id="campRule" />
                    <label htmlFor="campRule" className="cursor-pointer block text-sm md:text-base font-normal leading-tight">
                      Я ознакомился с условиями и согласен с правилами лагеря
                    </label>
                  </div>

                  <button type="submit" className="bg-[#FF6A00] text-sm md:text-lg font-semibold leading-tight text-center text-white py-[18px] px-3 mb-3 rounded-lg cursor-pointer w-full">
                    Зарегистрироваться и Оплатить
                  </button>

                  <p className="text-xs md:text-sm font-normal leading-tight text-center">
                    После подписания вы перейдёте к оплате или вводу регистрационного кода
                  </p>
                </div>
              </form>



            </div>
          </div>

          <span className="block absolute top-[-70px] left-0 w-full">
            <svg className="w-full" width="1440" height="4118" viewBox="0 0 1440 4118" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M299.841 3177.71C298.204 3172.09 297.286 3148.35 295.594 3138.25C306.435 3148.64 305.782 3198.16 299.841 3177.71ZM-492.595 2189.65C-492.409 2190.31 -492.222 2190.96 -492.036 2191.61C-489.463 2200.12 -486.851 2208.73 -484.201 2217.44C-484.187 2209.24 -484.482 2200.32 -484.84 2191.28C-485.735 2169.16 -486.895 2146.08 -485.768 2127.83C-485.492 2123.64 -478.507 2134.33 -478.429 2124.44C-478.33 2114.4 -487.536 2116.17 -488.706 2101.14C-490.33 2084.81 -482.992 2003.63 -478.976 1966.28C-476.324 1937.87 -473.4 1906.54 -462.675 1861.37C-456.774 1838.05 -449.684 1811.41 -431.399 1772.53C-412.19 1735.7 -384.338 1675.77 -293.4 1615.9C-200.904 1553.32 -68.6333 1554.01 -10.2485 1572.51C53.23 1589.61 83.6499 1609.33 107.916 1623.71C154.138 1653.23 174.118 1672.33 191.933 1687.73C202.333 1697.03 212.682 1706.69 222.819 1716.64C205.239 1702.47 194.317 1694.91 188.555 1691.63C181.53 1687.62 181.689 1689.66 185.814 1694.8C195.131 1706.31 225.28 1735.49 238.726 1746.26C243.366 1750.58 258.011 1737 328.267 1818.63C370.42 1870.13 313.312 1840.77 391.408 1914.53C351.659 1840.5 404.14 1903.59 442.867 1952.19C449.937 1960.61 500.023 2030.25 521.94 2059.3C529.692 2069.41 548.267 2079.69 558.057 2092.91C560.576 2096.31 562.321 2099.83 564.041 2103.63C566.857 2109.93 569.571 2116.98 575.918 2125.64C622.115 2188.86 664.825 2250.56 706.035 2314.29C662.116 2290.59 717.41 2348.59 718.423 2352.12C723.337 2370.55 676.183 2304.01 691.017 2332.92C716.891 2369.86 742.505 2406.7 767.962 2443.42C749.909 2411.38 811.108 2472.97 813.483 2490.14C826.779 2473.32 910.939 2668.19 933.998 2690.19C938.834 2694.77 923.351 2653.82 974.849 2738.55C980.443 2747.75 973.072 2747.81 976.684 2752.13C978.826 2754.69 1006.36 2760.54 1009.54 2784.38C1010.64 2792.69 974.288 2761.34 1032.19 2838.73C1034.05 2841.2 1036 2843.77 1038.02 2846.41C1029.8 2800.21 1132.31 2962.49 1148.15 2989.68C1146.36 2982.88 1144.35 2975.76 1142.6 2968.94C1156.56 2999.63 1165.47 2999.87 1169.55 3005.79C1186.04 3029.65 1204.51 3062.93 1218.47 3077.31C1230.31 3089.55 1237.45 3086.9 1244.14 3091.07C1245.29 3091.74 1246.24 3092.43 1246.56 3092.86C1246.82 3093.24 1246.66 3093.47 1243.92 3092.06C1249 3093.17 1249.17 3090.33 1248.57 3086.42C1248.46 3085.84 1248.34 3085.25 1248.21 3084.65C1248.56 3085.02 1248.9 3085.39 1249.22 3085.74C1250.8 3087.44 1251.75 3088.45 1250.79 3087.81C1249.62 3087.06 1247.34 3084.97 1237.26 3078.08C1225.21 3071.76 1214.68 3057.18 1143.3 3037.24C1107.85 3028.09 1042.66 3021.61 977.119 3041.89C911.56 3061.68 871.003 3096.28 853.658 3112.37C835.082 3129.76 823.422 3144.52 814.854 3156.39C824.683 3143.86 837.706 3129.04 854.948 3113.76C877.369 3092.72 934.575 3055.32 989.883 3043.21C1045.1 3030.06 1083.3 3034.35 1104.86 3037.06C1147.24 3044.04 1149.22 3047.51 1140.22 3044.78C1129.29 3043.23 1100.14 3031.47 1031.35 3037.86C961.16 3042.38 878.236 3093.58 857.07 3116.05C811.072 3159.39 802.487 3181.56 794.364 3193.66C787.367 3205.82 785.396 3209.91 784.663 3211.41C783.396 3214.22 783.443 3215.03 783.819 3215.53C784.212 3216 785.031 3215.96 785.773 3216.11C786.518 3216.26 787.172 3216.62 787.289 3217.76C787.426 3218.84 786.965 3220.9 786.105 3222.88C785.91 3223.26 784.374 3222.76 782.409 3223.41C780.508 3223.8 778.081 3226.05 778.012 3224.92C778.011 3223.41 779.021 3219.6 780.059 3216.9C781.123 3214.1 782.35 3211.95 783.54 3210.25C785.92 3206.78 788.162 3205.24 789.078 3198.65C789.198 3197.12 783.029 3201.9 784.878 3176.34C789.974 3087.71 789.335 3178.48 789.547 3180.52C789.807 3182.65 796.696 3177.4 801.404 3180.22C806.157 3181.94 808.506 3197.9 799.922 3221.82C805.47 3206.23 816.299 3203.14 816.891 3201.19C817.498 3199.99 821.073 3157.3 820.872 3154.15C819.548 3131.4 810.447 3150.41 809.599 3145.91C809.027 3142.85 823.246 3086.2 802.564 3070.45C805.391 3066.99 807.769 3064.67 809.767 3063.41C812.441 3062.9 814.484 3063.07 816.052 3063.85C821.829 3071.22 819.4 3103.03 818.619 3134.38C822.149 3141.62 830.432 3091.41 830.545 3088.35C831.282 3078.55 831.467 3070.94 831.253 3064.91C828.276 3050.6 814.516 3060.52 805.758 3055.33C800.402 3052.57 811.392 3040.61 796.808 3051.42C795.955 3039 797.099 3034.02 799.305 3034.82C801.445 3035.36 804.119 3039.55 804.692 3038.49C806.458 3035.52 801.252 3023.17 801.581 3021.24C802.156 3018.61 808.104 3027.02 808.873 3016.69C808.958 3014.93 798.399 2999.14 796.566 3021.02C794.649 2992.13 786.907 2994 800.179 2980.6C768.182 2961.08 813.825 2960.04 813.604 2949.51C812.657 2921.25 792.066 2933.27 790.76 2932.09C782.465 2924.07 772.31 2841.18 763.777 2820.21C781.563 2825.03 779.164 2886.49 784.606 2897.91C803.709 2937.77 779.595 2836.68 805.961 2862.94C797.661 2851.18 789.191 2839.03 780.698 2827.07C787.513 2799.4 801.597 2833.46 780.828 2767.75C767.29 2759.44 793.956 2814.55 782.524 2804.92C775.847 2799.1 765.436 2761.02 762.516 2760.72C759.178 2760.84 771.474 2794.86 765.197 2790.52C756.41 2784.27 744.183 2726.67 744.835 2713.63C745.033 2710.93 745.87 2710.36 747.523 2712.95C749.925 2716.92 753.895 2726.9 760.048 2746.64C756.451 2732.56 759.317 2721.01 761.17 2709.5C763.119 2699.08 764.09 2688.59 757.935 2678.03C749.632 2663.76 743.133 2757.46 714.609 2626.79C723.866 2621.51 731.165 2677.74 732.258 2679.02C733.877 2680.74 753.746 2665.05 754.393 2663C756.774 2656.34 708.941 2525.77 712.124 2493.91C702.386 2508.9 681.671 2392.2 674.215 2380.68C672.208 2377.65 667.747 2392.29 665.925 2388.96C654.859 2368.32 652.367 2304.5 645.011 2276.5C636.794 2245.19 631.051 2250.99 630.585 2249.26C627.176 2235.44 634.834 2245.12 632.501 2236.73C628.952 2224.04 605.823 2136.32 603.672 2132.17C603.018 2130.97 599.137 2147.43 592.415 2128.7C591.254 2125.43 601.064 2125.09 581.616 2069.43C558.224 2002.31 583.009 2120.04 565.594 2094.26C567.449 2046.61 554.165 2051.69 552.009 2039.48C551.281 2035.24 554.599 2001.34 544.911 1968.03C553.227 1991.57 561.574 2015.06 569.948 2038.52C565.601 2014.41 550.774 1969.26 547.898 1949.13C546.491 1939.32 558.14 1944.62 552.4 1924.02C551.139 1919.65 523.168 1908.45 548.039 1959.81C540.868 1966.36 539.422 1939.16 533.902 1927.81C533.056 1926.1 517.248 1922.64 521.86 1905.05C523.053 1900.77 574.045 1930.26 517.707 1834.59C515.894 1831.5 513.813 1844.43 511.913 1841.44C510.613 1839.39 505.836 1812.39 504.369 1809.66C502.824 1806.86 500.555 1821.08 498.545 1817.8C488.205 1800.98 504.111 1771.3 512.098 1809.43C511.588 1796.16 511.084 1782.83 510.611 1769.55C497.419 1787.29 500.876 1750.89 495.994 1733.56C491.808 1718.73 488.352 1707.26 485.462 1698.47C466.603 1640.84 471.231 1697.51 462.235 1681.9C445.621 1652.99 479.883 1669.72 460.14 1625.58C458.373 1621.53 459.48 1680.39 440.35 1569.39C444.608 1585.38 448.927 1601.48 453.258 1617.47C467.141 1604.33 438.333 1559.52 437.236 1555.73C425.041 1513.28 437.509 1540.98 414.61 1479.01C412.569 1473.47 413.763 1460.17 409.03 1448.37C389.476 1399.6 419.068 1516.35 413.386 1520.98C410.385 1523.35 382.774 1396.66 383.533 1392.01C386.241 1372.1 399.139 1448.69 404.367 1432.39C405.87 1426.56 361.041 1247.53 357.386 1210.67C352.736 1168.08 371.161 1144.96 346.284 1149.53C368.28 1132.83 349.661 1125.84 348.774 1120.4C338.469 1055.17 338.754 1055.12 326.062 999.933C323.302 987.841 328.793 976.001 326.755 971.916C325.542 969.541 318.465 975.663 313.783 963.813C307.195 947.281 297.16 842.044 300.362 833.625C303.423 825.188 309.798 877.179 315.422 866.628C310.738 836.049 304.656 806.743 299.66 776.463C298.516 769.53 297.443 762.638 296.47 755.767C294.287 740.113 300.629 747.227 299.625 740.335C299.14 737.282 286.205 683.343 284.683 685.552C282.813 688.984 290.113 738.443 295.473 777.155C300.09 810.937 302.939 836.933 295.301 817.092C292.141 808.854 298.834 777.085 285.459 784.196C285.207 782.434 284.956 780.679 284.706 778.932C274.248 705.667 264.471 631.517 256.757 553.63C252.896 513.979 249.518 474.36 247.605 428.621C246.731 405.656 246.044 381.289 247.128 349.98C247.813 333.614 248.571 316.221 252.397 288.833C254.572 274.624 256.908 258.62 264.832 231.134C268.918 217.688 274.181 200.643 286.774 174.807C299.938 150.776 316.796 111.151 380.944 59.9404C419.904 29.7774 468.946 8.75465 510.103 7.95423e-06C469.248 9.16578 420.475 30.4768 381.739 60.9815C307.724 122.109 297.263 160.426 283.157 187.849C272.357 213.122 267.849 230.336 264.322 244.749C258 272.23 256.64 287.77 255.209 302.687C252.942 330.44 253.099 349.026 253.203 366.603C253.648 400.901 255.084 428.135 256.57 455.071C259.671 508.299 263.441 556.098 269.963 601.886C271.775 615.08 276.53 658.368 282.979 652.029C273.724 571.193 256.022 478.497 259.269 370.849C259.416 367.262 265.972 380.391 266.979 366.988C267.795 357.098 266.598 340.619 267.676 312.106C268.421 297.677 269.174 280.642 275.097 252.059C278.256 237.723 282.714 219.357 293.675 193.393C307.161 165.864 320.806 125.866 388.92 70.3787C477.03 4.41163 551.706 6.03126 573.253 4.86158C577.502 5.23585 557.485 4.8733 521.443 12.8728C485.59 20.1958 429.903 43.7285 392.787 75.4404C323.797 134.275 319.42 165.217 312.371 177.122C307.629 189.823 308.113 190.21 322.804 166.667C337.573 144.168 358.535 114.682 399.222 83.8623C524.865 1.83765 600.456 22.4587 641.472 19.9705C684.758 22.2629 714.469 27.2424 742.508 40.7544C814.037 72.4656 903.684 177.141 929.981 190.419C945.233 198.343 930.385 181.385 911.17 161.726C892.41 142.289 866.46 118.924 873.216 119.285C947.406 173.195 990.534 229.665 1036.44 279.882C1042.93 287.027 1049.25 294.153 1055.22 300.943C1056.38 302.275 1051.32 286.369 1066.54 302.798C1092.09 330.975 1089.66 343.624 1098.7 357.891C1108.9 373.5 1143.63 421.238 1144.69 429.267C1144.87 430.314 1130.81 425.737 1129.62 424.448C1112.43 405.859 1116.47 391.359 1115.28 389.373C1110.38 381.723 1101.52 377.232 1096.69 370.247C1088.75 358.833 1087.4 350.012 1075.6 334.493C1067.24 323.617 1069.25 338.958 1061.25 328.497C1059.24 325.73 1047.74 296.468 1032.7 283.312C1028.76 280.134 1024.51 279.009 1020.11 281.673C1019.58 282 1021.45 284.951 1025.31 290.089C1090.06 359.452 1223.44 594.175 1239.13 614.824C1227.35 590.075 1215.21 564.985 1202.5 539.551C1227.62 591.766 1273.19 641.286 1256.28 656.342C1275.94 691.294 1295.03 725.669 1313.99 759.724C1393.8 903.123 1467.83 1045.98 1540.89 1184.44C1555.66 1215.61 1534.31 1206.46 1564.53 1252.82C1561.72 1238.36 1558.72 1223.41 1555.81 1208.55C1559.08 1216.55 1566.41 1232.58 1574.98 1250.45C1584.69 1270.74 1596.95 1294.85 1604.55 1308.38C1606.37 1311.65 1607.83 1314.14 1608.17 1314.82C1608.4 1315.41 1607.98 1314.54 1603.02 1308.39C1600.45 1305.28 1596.67 1300.65 1589.03 1292.94C1581.17 1285.46 1570.34 1273.68 1541.27 1255.8C1515.18 1239.31 1447.15 1209.23 1367.97 1221.75C1291.16 1234.95 1260.62 1264.07 1249.17 1271.06C1243.67 1275.13 1239.03 1278.89 1235.07 1282.26C1223.92 1291.81 1204.35 1305.77 1184.72 1329.95C1165.33 1353.56 1154.93 1376.25 1153.71 1379.27C1153.08 1380.78 1153.86 1379.42 1154.91 1378.18C1155.98 1376.86 1157.45 1375.32 1158.98 1373.86C1162.06 1370.82 1165.39 1368.21 1167.07 1363C1169.87 1354.28 1168.81 1341.74 1169.7 1338.65C1170.41 1336.18 1176.39 1335.98 1178.1 1329.86C1183.38 1310.34 1165.13 1324.98 1186.19 1306.6C1186.42 1311.73 1186.65 1316.71 1186.87 1321.63C1189.29 1310.7 1193.06 1297.46 1196.53 1289.86C1199.49 1285.67 1202.4 1284.41 1204.07 1290.56C1204.42 1293.22 1204.66 1296.62 1204.73 1300.98C1204.85 1307.49 1199.69 1301.44 1199.24 1306.18C1190.73 1394.22 1191.73 1386.08 1195.35 1379.98C1199.01 1371.25 1205.33 1326.9 1205.37 1290.68C1205.23 1288.07 1205.01 1285.26 1204.71 1282.46C1214.62 1275.07 1211.4 1177.14 1213.05 1172.39C1215.55 1167.66 1222.01 1185.47 1228.26 1162.36C1228.91 1159.48 1229.52 1010.66 1238.74 1064.8C1240.34 1076.49 1236.06 1146.11 1236.25 1161.69C1252.46 1129.21 1236.74 1051.51 1234.72 1024.22C1234.71 1022.74 1235.27 1018.32 1235.31 1016.84C1235.06 1013.65 1234.99 1011.38 1235.18 1010.23C1238.01 993.364 1239.94 1005.35 1242.05 1017.49C1242.02 1018.92 1241.47 1023.2 1241.48 1024.64C1244.19 1039.54 1247.22 1054.16 1250.76 1025.22C1250.74 1023.85 1251.27 1019.75 1251.3 1018.37C1252.13 1013.37 1253.03 1006.96 1254 998.864C1262.17 930.697 1244.06 993.666 1241.5 966.919C1240.05 951.923 1260.7 875.862 1243.47 876.365C1244.24 849.619 1251.74 866.068 1252.71 862.844C1253.59 859.658 1253.58 807.077 1258.84 790.495C1259.49 788.486 1267.7 795.82 1268.63 793.767C1270.27 789.824 1273.45 739.35 1272.9 737.256C1272.51 735.913 1263.57 747.17 1262.18 742.068C1260.58 736.061 1267.16 687.971 1265.22 685.062C1262.23 681.053 1258.56 740.843 1250.88 730.051C1255.77 702.695 1254.4 657.507 1249.22 638.636C1250.77 643.361 1248.44 669.858 1246.82 679.11C1234.56 673.486 1240.36 616.394 1248.48 636.906C1244.32 623.921 1240.62 632.112 1236.21 624.697C1235.11 622.601 1236.56 605.207 1234.7 601.502C1234.31 601.003 1227.73 618.708 1225.51 614.828C1223.54 611.276 1224.07 596.555 1225.28 582.27C1225.42 576.044 1229.15 557.861 1229.99 551.691C1232.83 538.658 1236.16 523.451 1245.61 498.733C1256.17 474.873 1268.12 436.897 1324.74 384.196C1381.35 327.941 1490.16 306.883 1529.02 313.021C1572.71 316.344 1583.57 321.925 1589.56 323.139C1602.15 327.008 1603.68 328.15 1604.47 328.775C1604.81 329.317 1603.48 329.264 1597.59 327.918C1591.38 326.691 1581.03 323.26 1553.67 319.559C1527.79 316.41 1473.35 312.342 1410 338.171C1346.62 363.749 1305.22 409.827 1286.35 438.098C1266.34 467.94 1259.36 487.28 1253.86 502.252C1243.99 531.505 1242.92 544.965 1241.89 554.218C1241.08 560.115 1237.52 577.496 1237.38 583.447C1237.86 584.906 1238.4 585.988 1239.01 586.487C1239.15 586.595 1239.72 585.523 1240.56 583.756C1240.69 577.877 1244.22 560.707 1245.01 554.881C1247.41 547.635 1250.48 537.24 1258.14 517.721C1267.84 498.313 1272.07 468.506 1329.29 409.386C1357.59 380.793 1411.26 349.645 1459.42 341.135C1507.79 331.779 1540.16 337.349 1558.6 340.627C1594.97 348.616 1595.63 351.605 1597.23 351.86C1597.79 353.195 1596.77 353.775 1592.82 353.303C1588.63 352.857 1581.66 350.901 1563.48 347.677C1545.72 345.108 1512.58 338.634 1460.2 349.647C1407.57 359.872 1352.83 396.865 1327.65 426.483C1277.15 486.784 1277.07 512.046 1270.1 529.51C1265.3 546.607 1264.43 554.924 1264.72 559.066C1263.98 564.441 1260.73 580.282 1260.61 585.706C1261.22 586.401 1262.07 586.601 1263.23 586.147C1263.25 586.087 1263.27 586.027 1263.29 585.967C1263.41 580.604 1266.63 564.94 1267.35 559.626C1272.57 543.289 1274.48 526.729 1298.49 482.009C1311.7 460.561 1332.73 422.01 1394.24 386.074C1457.43 348.697 1535.74 353.423 1562.53 360.783C1538.29 356.103 1476.57 349.174 1412.97 379.589C1350.21 409.973 1322.16 452.541 1307.94 476.375C1281.34 525.646 1281.41 544.034 1277.16 561.708C1276.46 566.799 1273.39 581.801 1273.26 586.937C1272.92 625.595 1267.2 672.934 1273.77 688.25C1275.54 649.705 1278.93 609.855 1287.57 588.329C1287.69 583.518 1290.57 569.464 1291.22 564.695C1296.44 548.459 1304.1 528.343 1317.69 506.303C1330.65 484.56 1351.85 463.707 1354.54 466.928C1355.95 469.374 1334.63 504.012 1329.82 524.85C1323.36 546.937 1322.36 561.541 1321.82 571.194C1321.27 575.262 1318.81 587.252 1318.71 591.357C1319.89 594.77 1320.79 597.328 1321.62 597.084C1323.47 596.51 1324.71 594.596 1325.49 592.017C1325.58 588.065 1327.95 576.525 1328.48 572.609C1330.55 565.726 1332.47 556.384 1337.78 540.485C1344.69 524.711 1347.69 499.506 1393.02 456.399C1415.31 435.724 1454.57 416.975 1485.72 412.767C1517.19 407.928 1537.42 411.305 1549.59 413.152C1573.51 417.691 1575.01 419.092 1576.37 419.372C1579.16 420.867 1578.89 421.346 1578.83 421.87C1578.83 421.87 1578.83 421.87 1578.83 421.87C1578.14 422.579 1578.97 423.46 1567.12 420.711C1560.88 419.446 1551.09 416.678 1531.2 415.019C1512.07 413.457 1477.56 414.253 1442.19 430.01C1367.92 466.151 1354.71 513.081 1345.92 531.227C1337.97 552.294 1336.28 564.039 1334.59 573.905C1334.07 577.682 1331.79 588.811 1331.7 592.621C1332.08 601.103 1332.42 608.167 1333.19 609.104C1336.35 612.966 1350.4 599.393 1357.24 595.105C1357.32 591.875 1359.25 582.438 1359.69 579.237C1361.47 577.117 1362.83 575.875 1363.47 576.035C1363.51 576.273 1363.32 577.709 1363.04 579.949C1362.61 583.074 1360.72 592.284 1360.65 595.437C1361.36 602.485 1362.69 628.982 1369.62 619.052C1373.11 614.007 1375.67 605.336 1377.51 597.077C1377.58 594.306 1379.24 586.214 1379.61 583.468C1382.81 572.318 1386.25 558.528 1396.42 539.067C1405 519.93 1432.09 494.34 1435.97 492.925C1454.93 481.284 1419.37 503.876 1405.85 529.831C1391.36 555.257 1389.27 572.083 1387.05 585.049C1386.7 587.624 1385.14 595.214 1385.08 597.813C1385.58 611.006 1385.7 625.63 1386.84 626.512C1387.87 627.454 1396.59 603.673 1399.75 599.24C1399.8 596.974 1401.16 590.355 1401.47 588.11C1401.89 587.311 1402.22 586.829 1402.43 586.73C1402.74 586.608 1402.93 587.236 1403.04 588.445C1402.74 590.654 1401.41 597.166 1401.35 599.396C1403.41 603.49 1405.98 621.796 1411.13 629.926C1415.53 636.95 1421.25 618.357 1421.71 621.758C1422 624.196 1416.86 675.516 1417.49 678.14C1418.43 682.004 1425.62 670.667 1426.96 672.518C1428.88 675.185 1425.07 691.582 1427.51 689.627C1429.33 688.14 1456.39 625.969 1461.89 626.876C1471.26 628.583 1442.83 694.518 1486.34 634.787C1486.62 634.454 1485.49 618.677 1485.76 618.273C1493.07 609.976 1498.57 653.899 1502.56 609.24L1502.51 609.571C1503.08 606.782 1503.78 603.608 1504.85 600.281C1504.08 603.513 1503.66 606.743 1503.38 609.755L1503.45 609.326C1504.96 706.974 1516.61 615.287 1530.44 632.859C1535.92 639.973 1534.15 683.731 1535.04 684.111C1543.23 680.533 1538.57 666.154 1542.84 661.755C1545.22 659.409 1549.57 699.199 1555.77 690.944C1558.96 686.67 1562.07 645.138 1562.77 643.46C1569.42 627.575 1572.89 648.194 1576.83 644.951C1579.46 642.909 1582.12 617.664 1582.6 617.177C1583.62 616.117 1589.99 651.198 1592.71 658.591C1594.81 664.239 1600.91 644.415 1601.69 648.275C1606.31 671.608 1584.09 718.022 1613.14 674.033C1614.92 671.379 1616.05 653.673 1616.39 653.284C1624.4 643.073 1621.82 675.522 1626.93 681.814C1635.74 692.696 1634.87 645.659 1637.94 685.031C1645.5 661.817 1647.76 646.894 1649.17 623.5L1646.6 640.173C1646.29 641.082 1645.87 642.719 1644.37 646.982C1642.5 651.491 1641.29 657.797 1630.09 675.215C1640.86 658.544 1642.4 651.924 1644.36 647.294C1645.98 642.91 1646.52 641.175 1646.97 640.252L1649.55 623.536C1648.56 704.784 1668.49 729.885 1677.5 632.015C1673.84 665.334 1688.51 662.943 1687.78 672.875C1687.32 679.01 1668.35 725.804 1702.43 706.806C1706.68 704.552 1704.51 674.726 1711.76 684.697C1702.77 754.578 1716.81 686.688 1717.89 686.724C1736.57 689.662 1704.34 858.845 1703.65 888.398C1702.82 922.578 1714.69 954.358 1713.99 961.696C1711.64 986.087 1706.08 965.12 1702.79 970.309C1699.51 975.522 1707.24 1046.09 1706.13 1049.47C1701.66 1062.56 1694.06 1048.1 1693.47 1049.45C1692.48 1051.72 1691.59 1055.53 1690.77 1060.5L1691.38 1052.77C1687.44 1078.11 1690.56 1145.06 1688.49 1167.58C1694.28 1166.6 1695.83 1116.65 1704.47 1148.03C1714.62 1184.95 1689.03 1187.36 1687.87 1188.2C1686.98 1231.84 1687.23 1275.66 1682.15 1335.06C1679.2 1366.73 1676.16 1398.58 1670.92 1435.89C1668.14 1454.9 1665.19 1474.6 1658.75 1501.83C1655.32 1515.69 1651.41 1531.24 1642.37 1554.5C1630.06 1577.89 1628.41 1611.3 1552.93 1674.73C1539.26 1684.76 1496.54 1716.53 1428.6 1722.79C1361.15 1728.44 1313.82 1706.42 1289.82 1693.37C1243.18 1665.75 1235.28 1652.03 1224.37 1641.62C1206.19 1621.49 1200.53 1612.49 1193.89 1603.28C1181.94 1586.01 1174.72 1574.05 1167.45 1562.07C1153.31 1538.55 1141.8 1518.08 1130.14 1497.17C1115.83 1471.43 1102.15 1446.29 1088.7 1421.47C1081.7 1426.88 1105.51 1468.78 1124.61 1500.23C1135.37 1518 1144.53 1532.2 1144.57 1533.56C1144.37 1539.89 1133.46 1525.56 1119.42 1503.11C1088.97 1454.52 1044.64 1369.21 1039.83 1353.36C1045.79 1370.67 1051.71 1387.9 1057.78 1405.37C1029.19 1385.33 1014.97 1315.79 987.915 1280.18C979.174 1268.69 986.828 1295.62 986.22 1295.37C973.257 1284.12 965.18 1259.3 981.477 1272.3C956.025 1241.63 966.335 1242.55 952.641 1215.94C951.928 1214.57 952.504 1228.87 938.909 1209.34C932.558 1200.15 904.308 1148.55 895.672 1144.39C892.086 1142.69 884.917 1180.53 905.179 1173.64C926.818 1234.69 923.425 1186.98 934.909 1209.07C936.636 1212.51 922.092 1210.25 956.94 1263.02C932.556 1262.48 912.023 1191.41 903.823 1181.87C886.988 1162.02 927.639 1259.47 951.392 1268.79C932.513 1268.71 952.99 1276.43 963.612 1297.58C975.254 1320.75 965.519 1313.08 972.169 1325.49C990.266 1359.4 993.009 1339.82 998.774 1372.82C1012.81 1329.98 1028.34 1418.78 1032.93 1445.24C1011.92 1409.8 991.299 1374.84 970.696 1340.03C970.284 1342.88 969.876 1345.74 969.461 1348.59C964.619 1339.07 959.799 1329.6 955.01 1320.19C957.261 1320.9 959.51 1321.62 961.757 1322.33C926.434 1279.24 930.736 1262.05 928.72 1258.03C902.803 1207.21 871.318 1149.82 843.734 1100.36C839.604 1093.04 833.2 1102.95 810.43 1046.13C810.342 1045.92 810.253 1045.7 810.165 1045.49C802.358 1026.37 819.126 1039.05 806.615 1019.57C772.741 1005.68 788.721 997.359 784.508 989.901C772.441 968.724 760.274 958.748 759.119 956.85C743.583 931.459 722.885 893.801 706.283 867.539C705.91 867.078 708.216 884.549 699.647 866.105C696.757 859.834 689.193 789.042 653.55 753.552C659.004 765.245 664.554 777.419 670.133 789.905C667.039 782.388 648.923 756.42 633.429 738.878C617.865 721.093 605.331 711.603 608.466 722.131C612.117 734.577 648.768 754.004 635.975 768.114C629.913 754.4 601.351 713.752 583.388 695.726C537.002 645.951 492.7 605.791 489.931 600.457C488.972 598.736 501.233 601.949 499.91 599.693C499.408 598.827 491.563 591.809 484.75 585.885C477.747 579.761 472.699 575.517 472.453 573.883C472.258 572.874 474.386 572.927 477.085 573.364C479.733 573.756 483.008 574.601 483.274 573.426C483.585 572.648 476.123 565.276 473.883 563.912C472.797 563.198 473.493 564.212 476.789 567.004C479.821 569.691 485.753 573.939 486.332 576.226C480.757 572.854 476.105 569.825 473.786 568.344C471.416 566.832 470.996 566.771 471.043 567.463C471.084 568.139 471.497 569.461 471.065 570.491C470.701 571.572 469.357 572.239 467.675 572.969C467.273 573.159 467.386 572.018 468.395 571.512C469.323 570.957 471.423 571.139 472.117 572.115C473.524 574.272 475.002 576.157 474.963 577.062C475 578.004 473.411 577.92 471.58 577.511C467.541 576.519 464.11 574.845 465.501 576.176C467.817 578.295 484.165 591.46 487.982 595.104C476.637 588.585 464.403 580.051 462.81 579.295C462.923 579.136 463.696 581.185 485.037 590.575C496.727 595.034 513.296 603.024 554.275 608.007C590.914 613.218 681.62 608.985 755.899 550.661C816.141 502.3 830.027 467.127 841.122 447.072C851.495 425.511 855.109 412.948 857.869 403.718C863.048 385.085 863.65 377.955 864.44 372.695C865.57 363.114 865.153 363.536 865.254 365.023C865.265 368.719 866.007 379.682 867.857 390.162C865.389 401.237 862.495 393.193 859.902 385.789C857.338 378.629 855.053 372.477 852.87 383.547C845.374 437.063 862.203 396.711 863.046 398.125C869.756 409.783 841.624 465.986 867.253 463.778C866.082 487.35 861.908 480.162 869.518 513.46C870.685 508.702 871.876 504.05 873.09 499.505C892.138 534.302 867.646 622.076 863.95 616.295C853.777 600.767 859.351 556.476 858.601 552.858C857.556 547.804 829.18 535.463 845.467 475.873C825.109 454.183 845.332 568.539 826.802 517.566C831.341 543.231 838.055 631.43 846.904 686.115C850.052 706.028 853.275 721.323 856.301 726.96C857.745 729.459 872.7 714.158 870.492 753.605C869.439 772.32 861.8 728.944 859.319 737.83C850.4 765.427 922.636 1108.91 938.368 1173.62C939.277 1177.85 933.684 1177.4 934.611 1181.57C937.411 1194.26 955.21 1239.22 957.772 1262.46C957.23 1213.12 977.938 1304.71 982.19 1328.17C988.508 1363.82 978.845 1363.88 980.347 1379.51C985.817 1436.09 1024.1 1514.31 1022.02 1565.54C1021.86 1569.26 1021.49 1572.84 1020.87 1576.27C1040.43 1568.69 1030.7 1657.56 1040.23 1694.79C1047.6 1723.9 1072.03 1762.57 1069.9 1721.22C1082.05 1771.6 1099.89 1823.44 1113.84 1870.27C1116.15 1878.02 1107.29 1868.88 1111.43 1882.05C1111.84 1883.23 1118.13 1883.33 1121.83 1894.58C1152.55 1987.56 1127.71 1945.05 1128.87 1963.7C1129.52 1974.12 1130.52 1981.75 1131.66 1987.2C1115.39 1932.37 1095.96 1869.55 1091.26 1852.66C1082.18 1870.57 1126.74 1973.93 1132 2006.44C1132.17 2007.57 1124.04 2005.71 1124.29 2006.84C1124.3 2006.86 1124.3 2006.88 1124.31 2006.91C1127 2018.92 1150.39 2093.51 1154.58 2075.69C1155.7 2070.92 1146.1 2036.21 1134.06 1995.32C1138.69 2005.99 1144.37 1995.51 1145.24 1997.38C1155.69 2020.11 1164.03 2080.62 1168.73 2101.64C1169.8 2106.41 1174.8 2104.69 1175.03 2105.46C1179.11 2124.7 1162.43 2120.99 1182.76 2136.14C1174.12 2175.37 1162.36 2072.88 1152.52 2083.05C1144.85 2090.7 1210.32 2308.09 1224.43 2303.83C1223.11 2305.01 1222.06 2308.58 1221.61 2315.38C1220.61 2330.42 1238.89 2391.36 1244.44 2401.49C1245.45 2403.15 1259.12 2398.67 1259.86 2400.86C1261.69 2406.21 1271.24 2485.02 1286.9 2511.61C1284.77 2495.51 1282.68 2479.76 1280.5 2463.75C1305.26 2556.84 1305.5 2541.83 1301.54 2509.33C1301.17 2507.76 1301.3 2506.11 1300.97 2504.61C1297.69 2479.53 1292.45 2448.12 1293.42 2447.36C1296.17 2444.87 1321.88 2533.33 1325.29 2566.8C1326.47 2577.92 1325.24 2582.63 1320.08 2575.78C1319.6 2575.13 1318.84 2572.49 1317.9 2568.67C1313.27 2549.8 1303.94 2502.84 1304.19 2535.36C1304.18 2539.06 1308.97 2555.85 1312.92 2569.93C1316.06 2581.11 1318.7 2590.58 1318.53 2591.77C1317.47 2598.87 1311.53 2587.87 1304.09 2572.16C1292.74 2548.26 1278.02 2514.74 1274.23 2523.98C1283.94 2538.09 1288.99 2556.34 1293.63 2574.81C1296.55 2586.41 1299.18 2597.48 1302.87 2608.48C1307.19 2621.29 1314.96 2622.77 1315.51 2624.41C1323.32 2648.33 1312.61 2636.39 1314.78 2644.46C1316.05 2648.92 1343.16 2693.38 1319.43 2689.43C1371.97 2848.98 1346.2 2728.77 1321.18 2632.41C1336.57 2660.96 1347.11 2722.91 1355.08 2751.01C1357.95 2761.01 1363.85 2753.22 1369.02 2770.35C1380.3 2801.67 1405.39 2990.07 1397.67 3062.95C1395.1 3024.61 1387.22 3036.02 1387.52 3065.23C1387.26 3095 1398.73 3070.36 1399.71 3076.2C1399.96 3077.81 1399.56 3088.8 1398.15 3104.49C1395.29 3134.62 1387.81 3192.33 1387.42 3205.32C1390.5 3128.7 1381.14 3145.07 1374.13 3209.85C1372.8 3200.03 1371.39 3190.46 1369.93 3181.01C1370.25 3218.18 1347.75 3300.7 1344.58 3331.5C1344.31 3336.01 1353.98 3321.51 1353.81 3324.09C1352.82 3336.58 1347.33 3362.48 1335.25 3397.6C1329.1 3415.2 1320.82 3436.04 1308.97 3458.21C1297.72 3480.01 1280.17 3503.48 1277.14 3507.87C1273.09 3514.93 1299.81 3483.45 1310.21 3466.85C1321.8 3449.61 1328.42 3438.96 1322.79 3454.49C1321.88 3456.59 1318.63 3462.63 1310.09 3475.86C1301.02 3488.67 1290.33 3508.52 1253.19 3542.87C1240.02 3554.23 1218.91 3572.43 1181.89 3589.59C1145.58 3607.03 1093.45 3616.55 1054.48 3613.49C974.253 3606.2 946.318 3583.72 924.063 3572.97C907.967 3563.69 905.939 3563.99 904.532 3565.25C903.404 3566.6 904.611 3569.46 901.415 3567.51C877.07 3552.21 877.121 3548.99 871.907 3542.31C867.54 3536.03 860.167 3527.01 843.293 3511.63C842.264 3510.69 841.176 3509.71 840.025 3508.67C813.126 3484.29 788.106 3472.72 763.166 3438.31C852.158 3556.76 768.177 3458.79 731.558 3418.93C725.56 3412.44 720.533 3425.35 693.073 3381.17C778.281 3454.89 681.435 3349.32 666.506 3327.61C665.666 3326.36 671.485 3321.4 663.496 3310.42C662.808 3309.5 659.68 3313.98 651.886 3304.07C579.751 3211.05 628.697 3268.49 619.808 3247.52C615.876 3238.4 577.722 3196.94 568.956 3184.51C566.983 3181.69 572.339 3180.01 564.525 3169.09C563.318 3167.4 562.084 3165.74 560.83 3164.12C548.007 3147.52 533.379 3134.64 525.121 3123.26C524.116 3121.82 530.979 3116.9 512.388 3094.41C507.163 3088.07 499.467 3082.07 504.014 3093.13C512.702 3114.29 534.429 3141.28 554.89 3168.22C569.558 3187.55 583.527 3206.75 591.442 3223.75C604.23 3250.95 568.738 3203.99 547.091 3173.6C538.874 3162.12 532.305 3152.64 531.344 3151.27C529.915 3149.23 547.432 3167.32 533.904 3146.13C522.284 3127.97 488.327 3104.06 473.34 3076.15C472.166 3073.99 468.452 3046.27 469.674 3046.79C470.725 3047.42 494.531 3077.89 494.391 3071.26C494.321 3070.43 480.559 3050.18 480.98 3046.01C481.463 3040.91 502.085 3014.35 499.852 3009.59C494.022 2997.37 492.844 3008.67 488.413 3001.17C478.945 2985.18 451.132 2926.61 440.752 2930.99C446.129 2940.22 451.422 2949.32 456.788 2958.52C423.056 2910.12 433.148 2933.68 426.775 2927.89C419.932 2921.68 429.387 2918.32 419.16 2901.36C416.905 2897.62 369.283 2829.91 366.739 2833.46C397.528 2867.89 378.108 2860.45 379.103 2862.33C382.882 2869.4 394.215 2874.24 400.06 2883.24C441.238 2946.83 389.981 2889.22 397.629 2905.61C400.29 2911.25 411.859 2918.21 413.09 2920.59C417.031 2928.21 410.835 2932.5 414.492 2936.88C423.006 2947.08 423.312 2928.33 424.354 2928.89C436.454 2934.99 455.342 2978.17 429.659 2960.66C435.786 2977.34 448.73 2971.31 451.667 2985.84C457.661 3014.85 437.201 2979.16 429.442 2970.89C401.731 2941.48 399.7 2928.68 366.975 2882.98C355.22 2866.54 336.248 2850.46 330.745 2842.89C327.265 2838.1 316.235 2778.67 284.311 2798.08C275.323 2778.14 276.975 2736.43 263.676 2718.66C251.757 2702.77 244.316 2715.36 242.86 2714.11C240.589 2712.17 228.101 2691.77 221.993 2686.06C214.855 2679.43 213.325 2686.16 203.22 2674.88C178.037 2646.77 189.729 2640.05 188.297 2636.38C171.639 2593.91 166.75 2620.81 159.943 2613.56C153.634 2606.53 87.219 2497.47 68.0367 2479.39C76.4872 2486.61 84.8097 2493.71 93.2697 2501.04C88.9646 2480.3 66.0523 2471.78 78.1144 2462.74C72.3787 2465.6 67.4854 2464.91 63.2933 2462.23C51.1449 2454.27 44.4333 2430.04 38.9481 2423.34C35.9879 2419.73 32.8535 2422.47 29.3055 2417.94C15.4355 2400.12 -12.1087 2358.18 -21.0262 2350.24C-59.4955 2315.02 8.49195 2428.48 13.865 2438.4C1.57761 2420.28 -73.7061 2331.29 -50.3751 2380.8C-46.8073 2388.38 -29.2605 2393.48 -26.0529 2397.03C-4.71341 2420.75 -27.5507 2406.6 -26.7819 2409.17C-25.4432 2413.42 -5.35098 2424.6 -2.86886 2429.88C-2.05627 2431.62 -16.2875 2427.11 1.74448 2452.02C-14.1183 2444.39 -59.5086 2372.58 -67.8387 2365.69C-70.7941 2363.3 -70.2349 2392.74 -99.8494 2327.58C-100.661 2329.28 -101.472 2330.97 -102.283 2332.67C-126.975 2303.47 -151.292 2276.42 -175.089 2252.26C-169.685 2252.26 -150.78 2260.98 -168.607 2244.4C-178.843 2235.06 -178.082 2248.5 -179.137 2247.75C-183.539 2244.62 -208.424 2218.23 -242.137 2188.96C-248.544 2183.34 -253.329 2179.45 -252.849 2179.81C-251.516 2180.21 -248.476 2185.08 -217.461 2199.59C-201.84 2206.27 -176.585 2216.95 -132.83 2221.7C-89.9493 2227.06 -21.009 2219.25 33.2524 2190.71C144.62 2128.08 156.072 2070.56 167.726 2051.43C176.945 2029.13 177.277 2023.18 178.203 2019.81C178.77 2016.95 178.475 2018.02 178.233 2020.04C177.67 2024.3 177.124 2031.85 176.993 2036.59C176.422 2046.04 183.017 2085.64 183.334 2089.31C183.787 2100.71 182.879 2132.22 183.208 2160C183.325 2176.21 183.818 2192.03 184.519 2197.43C185.726 2206.93 192.451 2197.39 192.636 2206C192.812 2214.08 185.257 2206.16 185.112 2208.58C183.137 2227.56 205.184 2383.01 202.653 2421.57C202.168 2397.97 178.343 2285.92 173.783 2288.7C173.144 2289.43 170.001 2316.96 173.113 2322.57C167.836 2332.79 189.128 2363.08 187.16 2381.34C186.943 2383.42 175.788 2376.29 176.883 2408.17C177.295 2419.42 188.093 2446.9 181.971 2476.81C190.062 2517.83 201.539 2741.32 214.755 2755.42C215.396 2755.84 215.547 2723.99 222.593 2744.66C231.966 2772.06 208.552 2749.19 210.673 2782.2C210.955 2787.2 224.054 2878.26 225.724 2881.12C240.566 2907.38 235.458 2826.99 236.953 2827.96C240.624 2830.33 250.745 2896.38 250.305 2899.17C249.798 2901.85 227.951 2849.6 241.724 2913.93C242.616 2906.25 243.509 2898.56 244.409 2890.9C251.709 2921.05 241.582 2925.28 241.858 2932.76C242.692 2956.04 261.755 2978.94 246.752 3018.44C242.767 3028.88 234.9 3013.38 234.272 3014.7C228.732 3027.39 249.439 3039.83 237.674 3059.37C236.797 3060.8 223.108 3020.78 232.316 3092.66C233.026 3087.56 233.737 3082.45 234.448 3077.33C238.725 3086.99 249.946 3159.54 250.548 3169.54C252.215 3198.4 239.278 3174.64 244.215 3203.31C255.015 3183.15 268.288 3270.41 256.251 3266.92C272.121 3276.9 271.083 3353.22 275.462 3388.12C278.221 3410.13 290.57 3454.3 290.805 3461.48C291.086 3470.24 280.985 3469.03 280.903 3484.67C280.826 3488.4 292.4 3527.89 290.455 3566.35C290.316 3569.6 290.085 3572.82 289.749 3576C288.899 3584.26 274.565 3602.67 268.461 3588.86C266.163 3583.64 264.688 3577.11 263.669 3570.02C260.233 3546.16 262.711 3516.24 255.163 3517.89C248.254 3519.16 252.588 3547.77 256.443 3571.01C258.48 3583.41 260.354 3594.16 260.662 3599.8C265.167 3679.56 247.832 3635.74 244.703 3637.96C237.296 3644.71 243.457 3687.68 242.943 3689.38C240.699 3697.26 230.053 3667.79 224.965 3667.77C218.434 3668.43 212.374 3711.26 208.902 3702.24C203.945 3689.26 208.487 3649.81 207.663 3647.27C197.019 3616.5 187.999 3662.26 182.19 3674.67C180.403 3678.5 174.745 3664.96 174.48 3667.97C170.679 3715.2 196.893 3674.64 198.995 3705.37C200.878 3732.79 186.206 3699.23 185.78 3700.16C185.409 3701.89 189.299 3734.12 186.527 3739.81C185.087 3742.34 154.299 3660.66 146.226 3665.67C151.803 3692.22 157.381 3718.74 163.003 3745.48C152.077 3749.16 155.035 3709.56 153.275 3705.32C149.838 3697.53 147.302 3721.14 143.609 3720.57C141.302 3720.51 129.535 3694.61 129.562 3719.38C129.538 3727.68 139.737 3743.56 135.836 3774.58C111.315 3672.65 114.82 3744.65 111.336 3748.76C107.783 3752.36 91.5481 3703.73 101.524 3763.84C80.0579 3769.5 94.4407 3763.49 88.2619 3747.03C80.6238 3726.47 80.1197 3776.05 75.0611 3698.89C65.4044 3704.43 74.6334 3766.1 74.2552 3769.34C73.9057 3772.26 66.9768 3759.18 65.9443 3764.28C54.1914 3824.88 57.7285 3783.97 47.4254 3802.4C46.4594 3803.76 49.4009 3859.22 41.7961 3817.96C27.911 3742.32 38.2053 3709.61 5.41593 3700.66C-0.334516 3758.63 29.0248 3823.58 31.7367 3840.51C35.8587 3866.51 25.7484 3840.16 24.4509 3843.79C24.0035 3844.78 27.6742 3867.26 27.2345 3867.75C5.83037 3887.06 12.9155 3767.74 3.85282 3732.07C1.69002 3742.54 -0.564527 3752.34 -2.71202 3762.91C-4.74803 3749.19 -6.63452 3736.53 -8.62823 3723.09C-7.04193 3787.24 -11.0672 3725.32 -32.2945 3712.64C-37.0721 3709.73 -23.9907 3750.27 -42.4802 3704.29C-40.3914 3739.93 -45.8383 3729.28 -36.1159 3759.98C-43.8734 3760.4 -62.3268 3690.3 -70.0948 3662.84C-65.1368 3762.89 -44.747 3702.84 -47.8185 3790.52C-36.1297 3805.12 -43.6336 3764.42 -41.6007 3767.57C-34.3777 3778.32 -39.3867 3808.1 -14.9612 3839.11C-10.9527 3844.17 -4.22928 3819.45 0.0991223 3854.06C0.575807 3858 -4.87074 3881.15 -5.55035 3880.78C-12.6015 3879.05 -13.1565 3856.85 -16.0789 3856.24C-18.8231 3855.86 -13.833 3879.98 -14.5724 3880C-22.8055 3882.1 -20.6091 3860.16 -22.7858 3863.67C-27.5671 3871.03 -33.3071 3960.91 -44.002 3846.15C-21.3018 3939.55 -33.1108 3856.99 -41.8573 3820.48C-44.013 3811.62 -49.4346 3809.23 -52.9651 3796.47C-57.6293 3779.28 -58.0219 3758.7 -60.1183 3750.26C-62.4511 3740.78 -66.7692 3796.86 -74.0827 3717.6C-80.3173 3759.35 -58.017 3828.52 -60.7441 3869.12C-66.2196 3951.31 -88.7961 3816.1 -92.263 3802.56C-93.206 3798.96 -98.2596 3812.14 -99.0104 3809.75C-100.156 3806.2 -107.675 3728.57 -114.251 3722.07C-120.849 3715.42 -110.166 3749.88 -115.62 3753.31C-119.388 3754.98 -138.925 3664.26 -134.786 3714.26C-131.932 3748.69 -107.349 3810.61 -122.787 3823.6C-131.225 3772.96 -139.589 3722.47 -147.937 3671.99C-150.63 3700.2 -153.177 3729.42 -155.813 3757.92C-163.724 3712.5 -164.97 3671.51 -173.592 3629.87C-175.735 3619.63 -178.395 3609.06 -181.799 3598.08C-182.062 3612.94 -182.597 3623.59 -183.29 3631.2C-185.401 3657.4 -189.249 3650.46 -193.276 3632.57C-199.088 3607.22 -205.349 3557.21 -206.791 3556.59C-208.392 3556.09 -218.155 3609.52 -220.052 3618.45C-232.745 3573.85 -254.615 3436.15 -264.325 3519.86C-261.635 3504.67 -277.983 3470.58 -278.78 3471.23C-287.343 3476.79 -270.902 3553.48 -280.849 3542.09C-292.451 3528.49 -282.201 3506.54 -286.299 3484.05C-307.277 3369.19 -350.766 3407.25 -358.595 3289.99C-359.988 3292.53 -361.382 3295.08 -362.776 3297.62C-376.73 3170.8 -390.235 3043.72 -402.939 2916.19C-423.634 2868.24 -448.091 2736.4 -453.577 2670.42C-454.758 2657.08 -454.034 2591.18 -453.162 2586.18C-451.548 2576.8 -445.292 2626.73 -442.847 2603.59C-442.445 2598.97 -450.43 2487.77 -457.737 2496.5C-457.497 2509 -449.481 2547.54 -450.753 2554.01C-460.767 2601.22 -481.626 2255.56 -486.149 2234.59C-488.351 2242.64 -490.524 2250.79 -492.669 2259.06C-492.815 2236.88 -492.844 2213.98 -492.609 2191.64C-492.604 2190.98 -492.6 2190.31 -492.595 2189.65ZM265.774 3096.51C275.587 3108.1 273.444 3139.77 278.183 3158.15C284.716 3183.18 321.947 3222.48 287.909 3207.94C280.471 3170.7 273.12 3133.79 265.774 3096.51ZM212.791 2550.35C211.04 2575.59 191.288 2558.35 196.473 2537.07C197.075 2534.74 215.146 2516.02 212.791 2550.35ZM234.198 2812.61C233.836 2811.58 231.718 2789.92 231.906 2789.13C236.679 2768.9 243.027 2834.22 234.198 2812.61ZM-116.755 2294.03C-132.558 2276.78 -133.863 2299.99 -119.341 2306.89C-118.436 2307.31 -115.673 2295.24 -116.755 2294.03ZM-127.307 2281.09C-128.379 2257.62 -173.654 2251.74 -152.811 2270.23C-150.826 2271.91 -127.313 2282.1 -127.307 2281.09ZM215.463 2639.7C209.625 2637.48 209.431 2611.53 209.557 2600.47C214.627 2600.26 213.624 2628.92 215.463 2639.7ZM170.163 2033.32C168.014 2032.76 166.059 2045.54 166.006 2062.69C165.896 2079.62 167.71 2099.77 170.634 2102.34C169.303 2096.34 169.644 2076.96 170.386 2061.11C171.075 2045.27 172.103 2033.68 170.163 2033.32ZM-233.813 2178.17C-234.24 2177.3 -239.11 2173.24 -242.098 2171.65C-245.351 2169.85 -246.122 2170.89 -247.256 2172.43C-248.402 2173.87 -247.058 2175.41 -244.271 2177.21C-241.499 2179 -237.564 2180.79 -235.237 2180.99C-233.768 2181.1 -233.02 2180.49 -233.488 2178.97C-233.566 2178.73 -233.675 2178.46 -233.813 2178.17ZM19.4046 2475.42C20.9325 2476.12 26.2101 2451.71 39.254 2479.44C41.1972 2483.63 43.3307 2489.07 45.7106 2496.12C48.1327 2503.31 29.7705 2487.35 28.0216 2487.49C27.9388 2487.49 27.8902 2487.52 27.8793 2487.59C27.8718 2487.63 27.8791 2487.69 27.9022 2487.76C29.8094 2493.37 31.8048 2497.54 33.8248 2500.63C30.7417 2496.97 27.6991 2493.31 24.8037 2489.79C12.3947 2474.62 2.20757 2461.31 2.03078 2459.03C0.939837 2445.59 18.7382 2475.13 19.4046 2475.42ZM169.093 2658.74C175.381 2660.87 192.567 2690.06 195.499 2697.35C195.985 2698.63 184.045 2699.71 193.241 2711.93C200.641 2721.74 199.321 2700.54 211.226 2721.29C223.293 2742.31 198.897 2719.79 199.631 2721.87C200.606 2724.59 225.483 2752.92 219.642 2755.45C215.311 2757.3 195.564 2722.33 189.232 2714.72C181.101 2704.94 183.273 2721.95 172.843 2703.54C166.295 2692.01 181.638 2690.46 180.64 2687.76C179.76 2685.45 147.339 2651.59 169.098 2658.82C169.097 2658.79 169.095 2658.76 169.093 2658.74ZM38.213 2505.76C36.7494 2504.49 35.275 2502.84 33.8248 2500.63C35.277 2502.35 36.7542 2504.06 38.213 2505.76ZM250.588 3024.83C253.088 3011.31 263.313 3049.16 259.774 3064.64C255.412 3065.43 250.199 3026.98 250.588 3024.83ZM60.528 2518.17C79.021 2550.44 59.5424 2530.68 38.213 2505.76C46.2798 2512.72 54.2321 2507.27 60.528 2518.17ZM173.113 2322.57C173.99 2320.92 175.48 2319.79 178.054 2319.45C175.573 2323.8 174.087 2324.3 173.113 2322.57ZM171.128 2236.8C161.262 2208.56 165.668 2267.47 171.348 2266.61C173.461 2266.5 171.487 2237.74 171.128 2236.8ZM-97.6707 2318.07C-98.6751 2315.69 -55.9867 2329.87 -104.96 2298.77C-88.441 2322.98 -110.087 2301.02 -111.442 2302.71C-115.327 2307.19 -79.4621 2341.85 -74.4835 2352.59C-60.6362 2352.7 -94.5146 2325.75 -97.6312 2318.12C-97.6444 2318.11 -97.6576 2318.09 -97.6707 2318.07ZM408.787 3026.83C399.162 3023.78 386.996 3001.97 378.043 2987.91C387.603 2990.88 399.737 3012.67 408.787 3026.83ZM687.917 850.448C629.614 766.714 644.501 743.803 684.653 826.438C685.433 828.059 693.413 854.503 687.917 850.448ZM896.911 671.194C887.567 683.24 880.202 649.609 881.384 627.187C881.603 621.904 889.938 601.787 895.4 622.532C881.895 623.924 881.919 657.212 896.911 671.194ZM78.4345 2531.22C90.7596 2535.8 105.579 2566.4 114.771 2581.73C103.569 2576.26 85.4216 2545.23 78.4345 2531.22ZM516.572 609.321C510.263 602.036 499.309 605.128 499.86 606.748C502.236 614.024 520.411 620.773 516.572 609.321ZM17.6553 2444.02C19.9554 2440.65 41.5335 2464.09 43.1202 2476.67C43.3476 2478.69 43.0412 2480.4 42.0231 2481.65C41.5569 2480.86 40.9313 2479.89 40.1862 2478.77C33.2088 2468.31 16.1515 2446.21 17.6553 2444.02ZM393.947 2998.66C391.837 2991.44 415.92 3020.14 420.396 3030.83C415.938 3032.7 395.369 3003.44 393.947 2998.66ZM838.449 432.007C856.081 388.042 854.65 372.674 856.16 367.547C856.603 364.879 856.935 364.121 857.467 363.927C857.993 363.749 858.698 364.075 859.678 364.181C860.9 364.361 861.729 364.04 862.167 364.09C862.593 364.188 862.67 364.735 862.054 367.98C861.36 371.443 860.17 377.441 856.347 389.994C854.623 395.455 851.683 404.145 848.594 411.353C845.183 419.678 841.111 427.824 838.449 432.007ZM1751.35 1011.19C1753.12 1010.02 1760.85 1047.37 1757.74 1066.92L1758.52 1056.97C1758.37 1058.04 1758.17 1059.06 1757.91 1060C1754.89 1071.05 1752.73 1066.4 1751.35 1056.52L1750.58 1066.24C1749.22 1047.17 1750.51 1011.94 1751.35 1011.19ZM588.124 675.935C590.832 681.503 592.448 684.905 593.186 686.733C593.285 688.181 592.96 688.117 592.31 687.537C589.401 684.642 582.83 677.048 579.394 681.263C581.817 683.97 584.925 687.434 588.343 691.178C595.47 698.894 609.539 714.84 603.462 694.971C602.566 691.939 598.585 687.542 595.684 684.44C592.768 681.282 590.067 678.334 588.124 675.935ZM571.319 653.202C566.849 653.038 544.772 644.34 558.148 657.311C564.19 663.154 582.041 666.024 571.319 653.202ZM1745.73 1248.98C1736.61 1279.63 1743.88 1135.38 1745.52 1135.08C1746.37 1133.13 1747.15 1131.87 1747.8 1131.15C1745.17 1126.26 1745.41 1102.46 1752.44 1100.14C1751.6 1107 1751.63 1126.54 1750.82 1128.89C1750.47 1129.87 1750.14 1130.6 1749.82 1131.1C1755.46 1138.08 1747.8 1240.08 1745.73 1248.98ZM1686.21 1578.97C1696.42 1545.13 1698.28 1530.73 1701.81 1518.83C1704.92 1507.53 1707.9 1500.8 1710.84 1496.34C1716.67 1487.46 1722.28 1487.51 1722.16 1490C1719.93 1523.6 1713.81 1536.07 1712.24 1531.17C1710.3 1527.19 1709.41 1513.57 1708.69 1514.85C1707.44 1517.27 1705.36 1532.87 1700.01 1551.42C1695.02 1569.55 1684.75 1592.44 1686.38 1578.55C1686.33 1578.69 1686.27 1578.83 1686.21 1578.97ZM1739.87 1305.38C1739.84 1302.98 1742.07 1267.47 1742.36 1266.48C1746.42 1252.97 1747.34 1269.32 1746.22 1286.95C1745.12 1304.45 1741.79 1323.41 1739.87 1305.38ZM283.471 2801.6C293.253 2820.09 275.296 2807.54 269.986 2794.46C269.59 2793.37 274.845 2785.29 283.471 2801.6ZM559.616 644.024C558.83 642.114 540.261 620.141 522.898 603.234C505.087 585.758 490.183 575.119 488.092 581.242C490.951 579.5 570.459 668.34 559.616 644.024ZM924.946 921.18C921.104 900.14 936.525 921.019 934.485 932.948C933.722 937.362 925.935 926.553 924.946 921.18ZM-8.40806 2391.54C-26.0145 2378.55 -6.7556 2369.39 -1.49513 2388.26C-1.29348 2388.99 -7.72628 2392.04 -8.40806 2391.54ZM901.164 752.22C920.591 823.505 881.976 812.574 877.852 716.14C879.929 718.84 882.017 721.601 884.083 724.219C881.362 701.449 879.879 687.766 879.254 680.775C878.408 671.407 878.997 673.254 880.344 680.595C882.897 694.542 888.387 728.855 891.833 742.683C894.306 752.594 898.766 743.138 901.194 752.143C901.184 752.169 901.174 752.195 901.164 752.22ZM945.519 1031.63C934.321 1106.18 924.173 969.97 913.941 932.441C931.255 967.486 939.01 1015.96 937.022 948.412C957.446 1043.66 939.915 1005.8 939.788 1009.81C939.731 1014.46 945.997 1028.42 945.519 1031.63ZM910.553 847.791C909.076 843.858 908.738 812.586 905.984 801.792C917.204 815.481 920.403 873.808 910.553 847.791ZM1037.76 1443.73C1045.05 1442.86 1052.54 1446.2 1062.51 1469.93C1055.72 1464.61 1045.3 1451.56 1037.76 1443.73ZM233.236 3124.85C234.931 3141.76 236.809 3175.98 242.565 3164.67C243.011 3163.39 237.232 3124.39 233.236 3124.85ZM842.852 396.455C841.431 397.118 848.696 477.879 853.456 449.221C854.184 438.621 848.732 373.129 842.852 396.455ZM626.158 712.285C622.679 707.354 608.945 692.244 607.618 693.328C602.315 695.458 620.133 712.912 626.158 712.285ZM237.485 3211.28C237.077 3213.66 245.157 3265.2 247.697 3259.14C252.43 3247.26 238.904 3203.4 237.485 3211.28ZM338.893 2855.8C341.529 2859.29 338.598 2868.25 339.371 2869.56C341.237 2872.54 388.31 2937.95 363.305 2917.62C359.101 2914.19 298.007 2816.05 290.501 2803.17C295.739 2792.69 315.027 2838.98 322.569 2848.4C323.908 2850.04 331.741 2846.45 338.837 2855.79C338.856 2855.79 338.875 2855.79 338.893 2855.8ZM1110.75 1561.13C1114.21 1561.57 1125.52 1576.99 1141.6 1600.51C1150.2 1612.79 1158.03 1625.48 1177.2 1650.08C1189.23 1663.38 1195.26 1678.04 1246.48 1715.66C1271.9 1732.49 1329.49 1769.42 1422.59 1765.5C1516.81 1759.03 1564.22 1718.13 1578.65 1708.91C1623.83 1673.99 1631.54 1658.92 1632.7 1660.87C1620.77 1675.48 1603.94 1693.52 1580.44 1711.29C1568.06 1720.31 1544.15 1738.58 1500.31 1754.02C1457.31 1770.01 1395.05 1773.67 1353.03 1764.51C1264.96 1744.15 1243.02 1717.23 1222.72 1703.31C1188.59 1674.37 1181.52 1662.7 1172.32 1652.1C1156.64 1632.38 1149.8 1621.82 1142.75 1611.48C1129.43 1591.53 1120.11 1576.41 1110.75 1561.13ZM1085.67 1514.4C1082.58 1504.28 1086.9 1509.06 1092.67 1517.95C1099.18 1528.04 1107.98 1543.85 1111.22 1551.62C1108.17 1553.19 1094.53 1531.09 1088.59 1520.2C1086.98 1517.26 1085.88 1515.07 1085.67 1514.4ZM550.345 593.46C543.601 588.983 554.342 612.998 549.13 610.403C545.74 608.575 535.743 593.714 529.842 592.174C528.114 591.778 534.409 610.291 538.367 613.752C544.01 618.677 543.883 608.657 549.631 614.374C569.076 633.813 582.988 655.826 601.774 676.075C603.417 677.823 594.702 661.661 606.744 674.288C607.007 674.556 607.29 674.857 607.595 675.197C608.766 676.518 610.361 689.008 622.747 703.223C667.065 723.8 670.713 769.534 714.502 825.686C714.915 821.994 692.049 774.246 690.635 771.936C672.011 737.636 638.379 687.328 617.374 664.531C600.286 645.648 584.284 628.661 571.352 615.345C560.779 604.484 562.43 613.073 557.765 608.584C554.113 605.101 564.653 602.983 550.345 593.46ZM227.182 3116.47C219.406 3125.75 228.65 3153.19 230.581 3171.49C237.702 3164.03 227.514 3134.43 227.182 3116.47ZM889.37 1137.66C884.726 1129.93 873.57 1104.28 870.111 1103.6C865.618 1102.69 883.159 1138.89 889.37 1137.66ZM595.453 3238.86C596.095 3239.36 609.356 3258.81 609.575 3259.58C615.791 3280.63 576.567 3222.98 595.453 3238.86ZM1389.79 3265.24C1391.35 3244.85 1390.61 3225.44 1398.48 3219.68C1396.24 3231.44 1394.57 3268.06 1389.79 3265.24ZM1289.14 2440.16C1280.9 2445.87 1273.48 2394.83 1271.73 2385.22C1276.75 2387.61 1295.05 2435.81 1289.14 2440.16ZM1062.12 1426.35C1076.56 1454.27 1086.03 1441.64 1089.9 1462.36C1090.58 1465.89 1069.27 1489.2 1062.57 1453.4C1061.38 1446.97 1079.18 1465.02 1062.12 1426.35ZM875.58 700.773C872.07 697.646 869.74 690.64 868.075 682.62C866.159 673.346 865.11 662.89 864.049 654.616C867.285 656.409 869.982 669.253 872.246 681.932C873.558 689.277 874.695 696.491 875.58 700.773ZM242.802 3305.84C235.934 3321.23 251.322 3386.52 254.905 3369.35C255.362 3367.08 243.695 3315.1 242.802 3305.84ZM145.292 2577.55C166.329 2595.88 136.398 2548.51 120.915 2538.21C125.73 2544.32 143.878 2576.28 145.292 2577.55ZM1329.45 2616.68C1328.89 2615.55 1322.19 2585.87 1322.22 2584.64C1323.28 2558.86 1342.13 2642.28 1329.45 2616.68ZM893.249 3568.04C901.281 3571.45 910.603 3580.14 953.477 3599.65C976.007 3608.26 1011.51 3625.96 1083.99 3623.47C1159.04 3622.3 1236.93 3572.13 1258.77 3548.89C1334.61 3470.58 1332.22 3441.64 1345.6 3417.18C1355.04 3393.84 1359.74 3380.39 1363.26 3373.19C1363.5 3380.12 1361.56 3393.85 1353.8 3418.06C1341.67 3443.7 1346.38 3473.19 1265.95 3556.62C1247.98 3573.07 1212.86 3601.71 1160.14 3619.24C1107.71 3637.21 1052.48 3635.8 1018.8 3629.19C950.914 3614.73 932.5 3597.96 916.173 3588.94C888.094 3570.12 884.973 3564.02 893.249 3568.04ZM998.136 1315.97C1008.79 1335.16 1017.12 1354.39 1024.54 1373.43C1018.28 1371.96 996.018 1319.62 998.136 1315.97ZM1301.54 2509.33C1301.17 2507.76 1301.3 2506.11 1300.97 2504.61C1301.18 2506.21 1301.35 2507.79 1301.54 2509.33ZM765.28 890.594C757.975 874.257 752.229 881.963 752.535 883.016C756.787 895.963 773.515 909.075 765.28 890.594ZM216.877 3138.95C209.771 3146.13 219.935 3176.29 220.345 3193.97C225.932 3188.2 219.524 3152.87 216.877 3138.95ZM944.488 1109.36C940.531 1133.36 912.311 1044.76 914.116 1024.51C919.017 1022.15 944.928 1106.01 944.488 1109.36ZM107.717 2502.45C111.828 2497.39 83.6591 2470.57 85.9426 2478.92C87.3171 2484.08 105.169 2505.55 107.717 2502.45ZM908.824 978.196C905.3 969.991 907.584 949.028 912.604 955.318C919.035 963.371 909.779 980.279 908.824 978.196ZM492.647 534.66C493.15 534.194 491.286 535.69 504.423 544.182C510.76 548.277 521.858 553.414 527.588 556.408C530.442 557.936 531.286 558.923 528.989 559.149C526.678 559.357 521.528 558.836 514.926 557.461C497.654 553.739 495.879 550.852 493.847 548.088C492.376 545.431 492.704 543.016 491.858 542.537C480.359 535.088 498.411 561.397 492.647 534.66ZM1054.16 1614.43C1047.97 1598.55 1044.93 1578.6 1040.92 1560.85C1040.36 1558.38 1039.78 1555.96 1039.17 1553.58C1040.18 1554.82 1041.39 1557.23 1042.68 1560.42C1048.67 1575.19 1056.6 1606.85 1054.16 1614.43ZM193.812 2624.37C193.257 2618.82 122.368 2513.06 156.97 2577.07C158.94 2580.63 195.55 2640.48 193.812 2624.37ZM1062.12 1426.35C1060.28 1422.79 1058.44 1418.76 1056.46 1413.78C1058.76 1418.55 1060.48 1422.65 1062.12 1426.35ZM897.026 1119.53C904.375 1123.41 888.463 1092.16 881.323 1084.37C874.94 1084.29 896.01 1118.97 897.026 1119.53ZM1032.65 1553.62C1027.34 1542.97 1025.03 1521.89 1021.36 1508C1026.03 1509.37 1035.59 1547.71 1032.65 1553.62ZM1242.96 2353.86C1239.14 2330.35 1230.25 2302.44 1225.15 2303.37C1225.8 2302.68 1226.32 2301.33 1226.64 2299.25C1226.92 2297.07 1217.9 2273.41 1216.64 2262.22C1209.26 2195.54 1290.22 2507.26 1226.83 2330.97C1232.23 2338.66 1237.61 2346.29 1242.96 2353.86ZM790.774 3455.64C783.839 3438.73 749.627 3410.01 755.083 3420.39C758.148 3427.24 797.054 3472.41 790.774 3455.64ZM1374.25 2957.86C1373.93 2962.58 1382.02 3011.61 1385.09 3013.26C1387.5 2982.78 1376.87 2933.99 1374.25 2957.86ZM720.172 3358.58C715.108 3350.52 700.102 3347.6 700.344 3348.65C703.077 3358.37 725.258 3374.31 720.172 3358.58ZM1055.64 1356.63C1052.29 1344.25 1026.98 1312.66 1017 1308.25C1017.38 1306.23 1016.8 1301.59 1014.83 1293.64C1014.84 1293.66 1014.85 1293.69 1014.86 1293.71C1012.24 1282.12 862.816 1002.79 953.479 1195.41C956.298 1201.47 957.238 1190.58 969.268 1214.96C970.054 1216.57 966.171 1219.71 968.607 1224.71C974.24 1236.14 1003.93 1297.69 1013.94 1308C1013.2 1308.54 1012.86 1309.73 1013.05 1311.77C1014.81 1329.99 1058.23 1366.18 1055.64 1356.63ZM1361.13 2870.41C1360.81 2878.99 1366.77 2906.11 1371.43 2908.5C1371.66 2893.98 1361.96 2850.03 1361.13 2870.41ZM206.283 2611.09C200.889 2596.81 174.328 2569.81 177.773 2581.11C179.937 2588.08 212.459 2627.43 206.283 2611.09ZM1374.19 3165.39C1386.61 3073.89 1375.56 3143.39 1370.34 3128.82C1371.69 3140.9 1372.98 3153.09 1374.19 3165.39ZM1689.15 1414.34C1685.58 1430.61 1675.75 1409.45 1684.4 1393.25C1687.16 1388.13 1691.1 1405.28 1689.15 1414.34ZM1729.59 789.83C1717.38 800.407 1729.48 744.228 1734.89 767.059C1735.05 768.106 1730.1 789.038 1729.59 789.83ZM1694.71 1201.46C1702.1 1211.2 1702.96 1216.98 1700.39 1245.32C1699.22 1203.8 1691.71 1241.53 1694.71 1201.46ZM1224.43 2303.83C1224.69 2303.6 1224.87 2303.42 1225.15 2303.37C1224.92 2303.61 1224.69 2303.75 1224.43 2303.83ZM665.894 3289.85C664.351 3276.97 645.211 3251.31 645.569 3262.82C645.627 3263.95 659.353 3288.99 665.894 3289.85ZM1017 1308.25C1016.66 1310.05 1015.66 1309.76 1013.94 1308C1014.64 1307.5 1015.65 1307.66 1017 1308.25ZM781.208 3428.56C776.171 3430.46 813.102 3474.69 816.054 3476.43C846.409 3496.26 794.885 3445.08 781.208 3428.56ZM42.7221 2367.67C41.0238 2366.23 39.6266 2385 48.8028 2389.29C55.8985 2392.57 49.2703 2373.23 42.7221 2367.67ZM1693.42 1115.28C1693.81 1101.81 1694.56 1083.5 1700.59 1080.47C1699.26 1088.9 1697.69 1115.59 1693.42 1115.28ZM1719.39 811.274C1724.57 829.075 1720.73 868.058 1717.17 892.832C1708.08 892.371 1719.93 827.558 1719.39 811.274ZM1071.44 1393.17C1071.16 1391.87 1056.22 1358.36 1053.24 1365.65C1048.8 1376.22 1073.45 1403.87 1071.44 1393.17ZM77.1394 2425.61C89.5644 2435.66 79.1563 2399.25 61.362 2391.88C52.3285 2388.13 74.97 2423.72 77.1394 2425.61ZM614.957 3204.53C599.213 3188.3 626.104 3237.32 635.896 3239.96C630.309 3231.3 620.569 3210.36 614.957 3204.53ZM1362.82 3040.82C1342.69 3138.19 1376.94 3086.8 1374.86 3068.26C1374.63 3065.51 1363.31 3038.34 1362.82 3040.82ZM228.917 3476.97C232.737 3486.16 237.042 3449.36 230.425 3445.74C226.281 3443.48 226.449 3470.88 228.917 3476.97ZM1131.66 1987.2C1132.46 1989.93 1133.27 1992.64 1134.06 1995.32C1133.22 1993.38 1132.39 1990.74 1131.66 1987.2ZM522.025 3025.65C527.604 3080.2 541.354 3064.84 543.616 3068.39C548.477 3076.06 554.607 3097.54 565.315 3111.16C551.737 3096.46 538.305 3081.88 524.811 3067.14C529.046 3075.36 554.073 3118.95 575.697 3153.85C591.058 3178.67 604.556 3198.94 606.702 3198.97C613.931 3198.92 587.497 3164.34 587.357 3163.15C586.947 3161.24 596.764 3146.24 594.977 3142.54C594.838 3142.25 594.562 3141.77 594.159 3141.11C585.909 3127.8 528.207 3042.03 522.025 3025.65ZM1354.98 3209.24C1358.19 3197.25 1365.02 3194.72 1363.99 3188.9C1363.63 3186.98 1357.41 3186.12 1356.38 3179.57C1355.98 3189.32 1355.53 3199.13 1354.98 3209.24ZM454.644 2967.03C453.449 2951.46 484.973 3003.75 485.381 3005.88C486.878 3017.44 455.573 2979.7 454.644 2967.03ZM768.095 3404.34C766.453 3401.93 735.538 3359.53 732.714 3362.6C737.996 3375.16 782.963 3431.13 768.095 3404.34ZM1356.66 3171.65C1358.99 3154.06 1367.77 3121.8 1358.05 3124.88C1358.05 3124.91 1358.05 3124.94 1358.04 3124.96C1357.69 3140.39 1357.25 3155.83 1356.66 3171.65ZM124.446 2457.45C119.823 2424.93 112.38 2447.24 123.315 2471.15C133.411 2473.74 125.192 2462.74 124.446 2457.45ZM79.2561 2375.57C76.7358 2367.17 24.9357 2303.74 26.2089 2318.73C26.6136 2323.77 60.5996 2356.83 61.532 2359.13C62.8301 2362.25 46.8373 2355.49 63.1757 2374.57C64.694 2371.59 80.1707 2378.34 79.2561 2375.57ZM118.31 2432.18C117.6 2429.3 116.774 2426.77 115.871 2424.57C106.988 2403.34 91.0761 2410.84 102.457 2426.74C103.63 2428.39 105.208 2429.82 106.919 2430.98C112.308 2434.57 119.11 2435.47 118.31 2432.18ZM185.436 2531.15C181.073 2521.28 167.326 2496.3 150.538 2484.57C164.842 2506.07 179.191 2527.85 193.514 2549.76C198.512 2550 189.224 2539.73 185.396 2531.09C185.409 2531.11 185.423 2531.13 185.436 2531.15ZM1679.85 648.041C1679.82 647.729 1679.78 647.455 1679.74 647.211L1682.89 626.779C1680.14 633.971 1678.73 631.962 1678.13 626.316L1675.06 646.218C1674.14 647.753 1673.41 650.123 1670.18 658.576C1665.59 666.93 1664.98 683.087 1628.75 719.695C1610.56 737.58 1576.57 756.396 1546.91 761.605C1517.11 767.332 1497.56 764.251 1486.7 762.617C1465.3 758.474 1466.67 757.746 1465.52 757.904C1464.97 758.045 1464.88 758.333 1464.78 758.618C1464.7 758.908 1464.62 759.197 1464.51 759.469C1464.35 760.034 1463.8 760.47 1465.79 761.664C1467.96 762.792 1472.27 765.172 1487.25 768.205C1501.31 770.804 1532.78 775.038 1572.66 761.339C1612.71 747.806 1641.33 719.614 1653.67 702.955C1666.82 685.463 1671.17 674.813 1674.33 667.656C1679.97 653.631 1679.84 650.477 1679.85 648.041ZM64.1142 3687.83C62.6327 3694.59 55.5164 3700.51 61.5373 3714.08C65.3117 3698.97 69.0324 3683.44 72.7736 3668.06C58.0259 3658.31 65.7854 3680.65 64.1142 3687.83ZM23.6805 3750.11C23.088 3748.17 4.36177 3761.94 14.2553 3733.81C20.8971 3714.56 43.2794 3811.22 36.739 3829.82C29.8405 3810.8 28.7411 3767.64 23.6805 3750.11ZM-39.9139 3934.05C-41.3975 3935.31 -49.0861 3898.29 -48.5356 3893.86C-45.7455 3870.26 -32.2116 3926.61 -39.9139 3934.05ZM-52.7501 3814.6C-54.2921 3832.39 -62.1135 3794.55 -61.4977 3782.29C-57.859 3780.85 -52.5716 3811.69 -52.7501 3814.6ZM1365.07 838.151C1349.4 855.72 1377.49 875.612 1374.35 845.84C1374.2 844.419 1365.82 837.433 1365.07 838.151ZM-65.5486 3900.25C-64.0445 3882.49 -56.1206 3920.46 -56.641 3932.73C-60.2854 3934.17 -65.7224 3903.25 -65.5486 3900.25ZM1330.84 848.264C1318.44 872.446 1352.68 866.892 1354.33 863.84C1360.91 851.388 1352.16 805.727 1349.8 796.283C1348.29 863.278 1336.69 836.838 1330.84 848.264ZM1339.6 966.382C1340.9 990.148 1353.49 931.024 1345.29 918.766C1344.61 930.348 1339.21 959.656 1339.6 966.382ZM1319.11 1116.76C1317.52 1129.89 1313.93 1168.08 1319.11 1174.38C1318.37 1160.64 1324.34 1122.5 1319.11 1116.76ZM1302.63 1145.82C1295.07 1165.79 1315.87 1170.96 1310.09 1147.72C1309.86 1146.81 1303.04 1145.09 1302.63 1145.82ZM1292.78 1253.91C1284.05 1265.23 1303.63 1279.06 1305 1260.47C1305.35 1254.82 1293.77 1252.7 1292.78 1253.91ZM1291.86 876.293C1286.52 894.371 1298.62 919.615 1304.04 880.356C1304.9 894.334 1305.75 908.482 1306.62 922.488C1319.71 871.659 1299.35 873.543 1301.62 858.77C1304.81 838.243 1321.16 841.395 1325.93 846.091C1317.48 828.119 1324.39 756.053 1326.58 714.176C1318.72 750.37 1305.53 809.064 1299.31 844.962C1297.52 855.192 1301.07 865.692 1299.71 874.409C1297.49 888.526 1292.2 875.272 1291.87 876.22C1291.87 876.244 1291.86 876.269 1291.86 876.293ZM1280.58 1381.58C1266.74 1408.35 1289.71 1395.15 1288.66 1376.45C1288.49 1375.69 1280.92 1380.9 1280.58 1381.58ZM-119.317 3960.13C-118.451 3906.91 -102.068 3942.49 -133.73 3839.21C-115.567 3882.02 -124.8 3840.27 -118.744 3848.39C-113.935 3854.96 -113.476 3881.4 -107.909 3865.01C-110.665 3875.88 -108.542 3902.23 -105.631 3927.21C-104.193 3939.58 -102.524 3951.84 -101.175 3961.46C-100.454 3966.56 -99.8833 3970.65 -99.0977 3975.73C-98.9928 3976.39 -98.8891 3977.05 -98.7845 3977.69C-98.6569 3978.47 -98.4868 3979.46 -98.3213 3980.39C-98.1379 3981.4 -98.0264 3982.07 -97.6309 3984.03C-97.4548 3984.9 -97.2574 3985.84 -97.0251 3986.89C-96.9089 3987.42 -96.7839 3987.97 -96.6474 3988.56C-96.5792 3988.86 -96.5081 3989.16 -96.4337 3989.47C-96.4111 3989.57 -96.3224 3989.94 -96.2526 3990.22C-96.179 3990.52 -96.1021 3990.83 -96.0213 3991.15C-95.3621 3993.74 -94.5355 3996.91 -92.9221 4001.87C-92.5137 4003.12 -92.0492 4004.49 -91.5001 4006.02C-91.2255 4006.79 -90.9294 4007.59 -90.6067 4008.45C-90.5663 4008.56 -90.5256 4008.67 -90.4844 4008.77C-90.4638 4008.83 -90.4431 4008.88 -90.4222 4008.94C-90.4118 4008.96 -90.4014 4008.99 -90.3909 4009.02C-90.3617 4009.1 -90.3291 4009.18 -90.2978 4009.26C-90.0451 4009.92 -89.7759 4010.61 -89.4869 4011.33C-88.9085 4012.78 -88.2521 4014.36 -87.4794 4016.12C-84.0875 4023.29 -80.5743 4032.68 -66.5209 4050.96C-53.3175 4065.48 -20.1444 4111.77 65.858 4110.8C111.726 4109.22 152.362 4083.23 170.049 4064.29C189.179 4044.61 196.195 4029.98 201.359 4019.42C210.72 3998.45 211.701 3989.6 213.325 3982.5C213.491 3981.64 213.64 3980.83 213.776 3980.06C213.844 3979.68 213.909 3979.3 213.971 3978.94C214.01 3978.71 214.011 3978.71 214.026 3978.61C214.039 3978.54 214.051 3978.46 214.064 3978.39C214.164 3977.79 214.256 3977.22 214.341 3976.67C214.511 3975.58 214.655 3974.59 214.78 3973.67C215.03 3971.83 215.209 3970.3 215.353 3968.97C215.903 3963.7 216.011 3961.04 216.119 3959.03C216.365 3953.57 216.337 3952.91 216.398 3952.23C216.397 3952.4 216.396 3952.6 216.395 3952.83C216.507 3951.12 216.888 3951.21 217.483 3951.12C218.077 3951.14 218.879 3950.99 219.807 3951.89C220.268 3952.4 220.775 3953.05 221.246 3955.46C221.363 3956.06 221.476 3956.78 221.577 3957.69C221.628 3958.15 221.675 3958.65 221.717 3959.22C221.755 3959.91 221.775 3960.89 221.778 3961.96C221.776 3964.16 221.738 3966.94 221.33 3971.65C221.224 3972.83 221.091 3974.15 220.911 3975.66C220.82 3976.42 220.718 3977.22 220.6 3978.08C220.454 3979.08 220.46 3979.28 219.936 3982.28C219.012 3987.28 217.845 3993.6 214.448 4004.18C210.453 4014.86 206.807 4029.93 185.358 4057.29C174.316 4070.64 157.09 4088.05 128.529 4101.78C100.109 4116.04 60.9497 4120.56 34.5091 4116.16C-23.777 4106.71 -50.4315 4078.43 -64.6738 4063.77C-91.5538 4032.07 -92.1172 4021.55 -96.5602 4012.78C-96.6642 4012.52 -96.7658 4012.26 -96.865 4012.01C-96.9146 4011.88 -96.9636 4011.76 -97.0121 4011.64C-97.0682 4011.49 -97.0583 4011.52 -97.0813 4011.46C-97.1488 4011.3 -97.2152 4011.14 -97.2807 4010.98C-97.4118 4010.66 -97.5391 4010.34 -97.6631 4010.03C-97.911 4009.41 -98.1452 4008.82 -98.3679 4008.25C-98.8132 4007.11 -99.2124 4006.06 -99.5775 4005.09C-100.307 4003.13 -100.903 4001.46 -101.421 3999.98C-103.462 3994.12 -104.49 3990.75 -105.053 3989.63C-106.368 3986.51 -107.468 3983.87 -108.237 3982.88C-111.598 3977.35 -114.094 3975.2 -116.104 3971.67C-118.107 3968.1 -119.306 3964.77 -119.317 3960.13ZM1265.99 1115.56C1241.01 1128.25 1279.98 1134.47 1259.08 1159.5C1288 1194.57 1261 1064.37 1287.69 1047.56C1280.8 1160.9 1301.72 1040 1292.41 1027.83C1292.4 1026.73 1292.82 1023.45 1292.85 1022.36C1292 1021.37 1290.87 1021.19 1289.39 1022.03C1289.37 1023.15 1288.94 1026.49 1288.95 1027.61C1285.81 1029.72 1281.14 1037.21 1274.74 1052.44C1276.94 1042.01 1278.63 1033.65 1279.84 1027.04C1279.82 1025.86 1280.28 1022.34 1280.3 1021.15C1289.99 979.146 1271.79 1016.53 1268.63 1005.64C1264.8 992.295 1274.55 948.853 1265.19 950.222C1265.19 950.247 1265.18 950.271 1265.18 950.295C1263.51 973.265 1261.85 996.241 1260.2 1019.23C1260.17 1020.54 1259.66 1024.46 1259.68 1025.78C1259.5 1030.25 1259.33 1034.7 1259.18 1039.13C1280.6 1011.12 1271.2 1071.5 1254.64 1090.73C1258.39 1099.1 1262.18 1107.36 1265.99 1115.56ZM1295.5 951.948C1294.79 954.519 1291.91 1013.36 1296.24 1009.9C1299.51 1002.32 1304.5 919.055 1295.5 951.948ZM1316.36 694.294C1314.24 715.223 1307.19 747.367 1313.5 759.484C1315.63 738.437 1322.67 706.458 1316.36 694.294ZM1410.67 1152.17C1392.57 1131.43 1430.06 1205.02 1425.14 1180.54C1424.84 1179.27 1411.56 1153.21 1410.67 1152.17ZM1268.44 1178.36C1260.43 1205.36 1284.63 1193.07 1278.73 1172.69C1278.38 1171.51 1268.8 1177.09 1268.44 1178.36ZM-128.252 3918.61C-134.36 3917.59 -140.539 3843.53 -142.352 3830.68C-135.943 3837.3 -121.337 3919.66 -128.252 3918.61ZM1298.12 655.249C1272.99 694.819 1291.68 753.927 1290.54 760.079C1289.4 766.147 1281.15 755.658 1280.77 757.005C1279.94 760.126 1274.25 826.035 1274.58 829.299C1274.86 831.629 1288.94 820.957 1291.68 834.95C1286.91 807.757 1303.36 687.871 1302.55 681.555C1301.87 676.661 1284.72 711.727 1298.12 655.321C1298.12 655.297 1298.12 655.273 1298.12 655.249ZM1286.2 775.316C1293.23 759.457 1289.38 805.56 1286.29 816.564C1279.4 840.825 1285.34 777.45 1286.2 775.316ZM1270.37 885.732C1268.63 890.943 1262.92 938.314 1268.56 942.964C1278.55 921.192 1274.36 874.059 1270.37 885.732ZM1236.33 1394.72C1236.2 1397.74 1233.75 1402.91 1234.53 1398.85C1234.95 1396.89 1236.53 1392.13 1240.08 1385.58C1243.46 1379.21 1249.21 1371.34 1251.28 1370.67C1244.55 1380.55 1240.48 1389.8 1238.84 1394.61C1237.13 1399.62 1237.17 1401.17 1237.37 1401.14C1237.89 1400.93 1238.88 1395.57 1236.33 1394.72ZM-208.556 3675.24C-210.108 3695.78 -217.993 3651.7 -218.226 3635.98C-218.228 3635.64 -218.227 3635.31 -218.22 3634.99C-217.866 3634.87 -217.48 3635.17 -217.074 3635.82C-213.49 3642.15 -208.497 3673.17 -208.556 3675.24ZM1217.76 1182.11C1216.48 1186.42 1217.36 1260.66 1216.11 1291.68C1214.87 1314.54 1213.92 1332.18 1214.05 1338.06C1215.98 1332.49 1218.79 1314.96 1221.47 1292.18C1225.76 1261.29 1226.11 1188.52 1224.96 1184.62C1224.41 1182.66 1218.03 1181.19 1217.76 1182.11ZM1238.1 840.495C1231.68 826.034 1241.86 818.014 1242.14 816.315C1244.98 799.525 1246.68 764.273 1253.39 772.711C1247.44 802.273 1250.84 869.204 1238.1 840.495ZM1201.08 1390.98C1201.17 1392.15 1201.82 1391.33 1202.49 1390.81C1203.16 1390.24 1203.76 1390.1 1204.14 1390.65C1204.53 1391.17 1204.81 1392.09 1205.2 1392.47C1205.59 1392.86 1206.11 1392.63 1206.69 1391.64C1209.11 1387.76 1211.67 1371.29 1206.9 1375.39C1206.62 1375.63 1205.05 1380.44 1203.61 1384.34C1202.15 1388.4 1201 1390.65 1201.08 1390.98ZM1215.78 1165.25C1211.73 1157.83 1213.66 1083.89 1218.73 1023.22C1218.72 1021.63 1219.32 1016.9 1219.36 1015.31C1222.3 990.462 1224.87 969.72 1225.61 962.067C1233.42 980.654 1227.72 995.072 1224.25 1015.78C1224.21 1017.33 1223.62 1021.97 1223.63 1023.52C1223 1028.6 1222.49 1033.97 1222.29 1039.72C1221.99 1048.51 1226.95 1046.4 1226.91 1047.34C1226.39 1062.41 1221.36 1050.88 1220.85 1060.14C1219.96 1067.41 1224.19 1182.45 1215.78 1165.25ZM1233.49 832.142C1229.85 823.428 1237.11 729.981 1238.66 726.455C1250.21 699.211 1235.73 825.088 1233.49 832.142ZM1205.22 1178.92C1191.89 1163.27 1202.73 1084.67 1208.24 1138.5C1208.73 1143.62 1202.49 1164.79 1205.22 1178.92ZM1188.8 1386.98C1188.69 1387.09 1188.32 1387.9 1188.05 1388.16C1187.82 1388.35 1187.58 1388.04 1188.64 1384.2C1189.86 1380.34 1191.86 1372.72 1200.96 1356.05C1209.37 1340.37 1230.66 1310.28 1261.83 1287.89C1272.79 1279.56 1297.19 1264.53 1320.74 1256.16C1344.43 1247.39 1363.11 1244.88 1366.17 1244.62C1333.98 1248.2 1278.52 1275.3 1263.02 1289.46C1219.3 1323.03 1202.43 1359.79 1197.03 1372.37C1191.22 1386.69 1191.52 1388.79 1191.27 1389.03C1191.23 1389.04 1191.51 1386.73 1191.23 1385.78C1191.1 1385.29 1190.84 1385.1 1190.44 1385.32C1190.04 1385.52 1189.47 1386.24 1188.8 1386.98ZM1176.82 1371.45C1176.8 1371.87 1179.15 1370.4 1181.06 1370.8C1182.98 1371.06 1184.4 1374.04 1182.77 1380.3C1182.63 1380.76 1180.17 1381.22 1177.92 1382.75C1176.8 1383.46 1175.73 1384.47 1175.22 1384.9C1174.98 1385.1 1174.87 1385.14 1175.09 1384.57C1175.33 1383.98 1175.86 1382.81 1177.29 1379.8C1178.46 1377.35 1181.79 1372.98 1186.2 1367.14C1190.5 1361.43 1195.97 1354.77 1195.53 1356C1185.81 1383 1187.26 1389.4 1186.79 1387.7C1186.72 1386.04 1186.27 1377.64 1184.99 1370.68C1183.76 1363.56 1181.92 1357.55 1180.28 1356.84C1178.64 1355.97 1177.2 1361.04 1176.82 1371.45ZM1226.15 829.709C1221.75 834.351 1211.34 821.064 1218.28 810.774C1221.27 806.387 1227.39 815.703 1226.15 829.709ZM1564.77 1275.07C1573.99 1284.68 1569.93 1273.41 1562.3 1257.48C1553.71 1239.5 1540.24 1214.86 1538.17 1213.06C1536.53 1216.31 1548.74 1243.57 1557.02 1260.41C1561.04 1268.58 1564.13 1274.38 1564.77 1275.07ZM-269.178 3634.88C-269.175 3634.91 -269.172 3634.93 -269.169 3634.95C-271.078 3609.18 -263.086 3624.2 -263.063 3623C-261.992 3567.05 -273.209 3583.33 -275.951 3574.87C-281.819 3557 -265.333 3558.01 -276.242 3527.63C-259.398 3577.87 -269.904 3531.49 -264.401 3529.17C-241.845 3520.5 -266.021 3598.94 -257.614 3623.95C-256.437 3627.52 -252.647 3599.82 -249.263 3608.81C-246.428 3616.38 -245.886 3628.36 -246.821 3639.9C-249.195 3673.4 -262.598 3705.72 -268.518 3642.87C-268.749 3640.38 -268.969 3637.72 -269.178 3634.88ZM1218.08 802.221C1212.37 789.61 1227.98 699.424 1231.28 724.059C1231.79 728.017 1226.37 820.819 1218.08 802.221ZM721.499 2433.75C709.97 2414.42 716.58 2464.87 723.527 2472.63C726.974 2476.42 726.615 2442.42 721.499 2433.75ZM785.276 2775.86C792.283 2799.54 822.512 2819.19 811.642 2790.15C810.467 2787.02 787.983 2772.33 785.276 2775.86ZM379.283 1103.13C375.876 1132.24 391.802 1127.36 387.657 1107.35C386.198 1100.28 379.394 1102.21 379.283 1103.13ZM627.093 2131.88C627.252 2134.66 636.655 2164.9 640.018 2162.77C639.11 2150.88 626.238 2113.76 627.093 2131.88ZM375.293 1094.92C381.356 1110.52 387.694 1080.37 372.448 1062.86C375.279 1072.6 374.687 1093.41 375.293 1094.92ZM1167.56 1231.77C1174.11 1244.31 1170.77 1276.72 1170.79 1287.21C1166.33 1287.43 1165.99 1280.22 1166.47 1267.7C1166.96 1255.47 1168.18 1238.83 1167.56 1231.77ZM769.188 2670.55C781.139 2691.95 773.278 2641.35 766.501 2647.98C766.231 2648.68 768.709 2669.72 769.188 2670.55ZM863.398 137.545C851.915 131.251 860.703 142.624 870.002 152.52C879.141 162.252 889.157 170.75 884.89 160.606C884.558 159.679 864.803 138.234 863.398 137.545ZM1073.92 361.805C1066.28 347.257 1009.69 283.009 1027.77 311.569C1031.65 316.375 1069.96 363.902 1073.92 361.805ZM-282.446 3574.18C-290.449 3582.46 -293.986 3540.55 -293.297 3533.86C-292.961 3531.45 -272.041 3563.36 -282.446 3574.18ZM413.649 1280.5C417.712 1294.45 423.372 1331.39 429.394 1336.76C424.719 1319.79 421.92 1273.93 413.649 1280.5ZM741.134 2564.83C737.108 2587.59 747.263 2621.99 757.399 2610.14C746.385 2572.22 747.567 2617.9 741.134 2564.83ZM347.624 1005.77C349 1017.3 362.745 1023.65 363.08 1022.28C366.225 1009.05 350.241 993.553 347.624 1005.77ZM546.198 1849.35C541.255 1851.33 552.884 1886.3 554.926 1880.69C555.614 1878.85 550.186 1847.76 546.198 1849.35ZM1547.61 1170.48C1544.11 1153.86 1571.89 1195.42 1573.76 1210.52C1570.12 1220.8 1548.1 1172.6 1547.61 1170.48ZM296.365 687.446C288.318 686.976 301.816 744.696 304.632 720.766C305.302 714.688 299.056 687.836 296.365 687.446ZM945.328 191.673C908.924 167.389 1030.25 302.024 1005.56 259.869C1004.44 257.009 949.579 194.2 945.328 191.673ZM1146.98 442.319C1143.52 435.289 1167.95 424.218 1176.42 456.052C1177.54 460.201 1161.31 447.88 1161.79 451.553C1162.52 453.949 1194.61 511.916 1196.35 513.922C1198.63 516.305 1203.83 508.674 1206.34 510.963C1209.22 513.552 1223.3 551.142 1233.36 568.438C1252.48 601.166 1260.36 600.972 1261.95 603.617C1266.46 611.284 1269.65 626.739 1278.51 642.145C1296.26 672.987 1317.91 709.171 1338.86 745.583C1372.29 803.699 1403.33 862.981 1415.88 904.667C1392.36 849.902 1359.99 802.501 1328.42 751.518C1326.66 748.686 1324.91 745.847 1323.17 742.999C1344.85 751.504 1268.6 669.904 1314.74 716.821C1299.09 695.146 1163.5 468.254 1147.03 442.391C1147.02 442.367 1147 442.343 1146.98 442.319ZM799.861 2871.08C788.198 2859.17 805.402 2930.35 816.263 2933.56C816.23 2924.68 801.385 2872.71 799.861 2871.08ZM689.617 2524.84C686.136 2517.98 667.378 2515.82 665.473 2475.29C665.463 2475.25 665.454 2475.22 665.444 2475.18C664.895 2463.38 672.499 2474.91 673.408 2472.47C673.826 2471.63 672.621 2434.37 681.956 2463C696.133 2506.47 670.507 2470.58 676.78 2494.14C677.554 2496.98 698.823 2538.81 700.108 2535.64C700.258 2535.26 694.729 2522.61 694.955 2520.15C695.824 2510.96 702.215 2513.57 702.146 2512.32C701.771 2508.33 673.426 2440.39 678.458 2428.04C680.098 2423.95 717.676 2537.93 717.455 2542.61C717.392 2545.67 702.39 2548.46 701.738 2551.77C701.425 2553.4 719.345 2597.95 719.566 2604.28C719.635 2606.11 719.565 2607.53 719.474 2608.58C722.175 2600.41 732.875 2642 727.344 2641.92C725.19 2641.9 718.759 2612.93 718.856 2611.92C718.887 2611.44 718.99 2611 719.036 2610.6C715.196 2618.16 689.204 2520.97 686.612 2544.13C674.418 2517.14 699.771 2544.79 689.617 2524.84ZM642.957 2390.62C645.32 2393.16 647.681 2395.7 650.04 2398.23C632.423 2349.21 623.805 2289.37 607.693 2231.24C603.608 2216.46 598.864 2236.04 596.117 2216.03C593.911 2199.98 597.927 2180.38 602.198 2188.27C603.262 2190.24 606.232 2223.26 611.197 2238.94C625.775 2284.94 630.626 2270.98 631.592 2273.63C632.64 2276.53 635.069 2307.41 639.708 2323.17C651.445 2363.02 661.508 2379.99 670.026 2436.14C656.005 2406.13 649.231 2426.72 642.957 2390.62ZM242.34 423.481C236.817 421.547 239.474 374.646 239.583 350.781C244.338 356.488 240.386 408.393 242.34 423.481ZM-478.512 1985.98C-474.661 1993.78 -470.613 1969.98 -466.815 1944.39C-463.14 1918.29 -458.43 1887.85 -465.794 1908.14C-469.715 1918.18 -478.054 1973.66 -478.512 1985.98ZM293.137 1798.7C303.952 1806.41 271.929 1764.35 266.984 1769.17C265.664 1770.75 291.824 1797.62 293.137 1798.7ZM474.447 1730.78C473.845 1729.27 470.416 1710.77 469.114 1702.52C468.758 1700.29 468.555 1698.8 468.598 1698.59C469.691 1693.02 471.745 1695.45 473.895 1701.34C479.947 1717.93 486.902 1762.23 474.447 1730.78ZM596.834 2166.1C570.413 2138.16 633.767 2233.35 619.775 2200.59C619.157 2199.05 598.212 2167.54 596.834 2166.1ZM687.546 2294.99C682.327 2287.82 662.18 2253.31 659.649 2254.32C655.746 2256.14 679.015 2295.41 687.546 2294.99ZM314.009 1004.03C305.185 1010.11 302.909 956.776 298.516 939.038C307.328 932.932 309.441 986.304 314.009 1004.03ZM371.956 1332.07C319.173 1115.79 349.224 1159.66 379.375 1344.02C373.305 1345.58 375.369 1345.74 371.956 1332.07ZM316.931 1052.52C324.576 1059.32 327.465 1084.42 330.231 1101.33C325.368 1099.15 320.312 1064.44 316.931 1052.52ZM-494.808 2106.82C-503.413 2092.35 -492.131 2014.01 -489.024 2028.15C-489.002 2032.17 -490.724 2113.67 -494.808 2106.82ZM461.825 1714.71C459.55 1716.8 456.912 1712.92 454.334 1706.19C447.839 1689.22 441.845 1654.47 442.454 1650.55C445.191 1632.66 453.898 1682.79 459.037 1705.02C460.218 1710.17 461.194 1713.81 461.825 1714.71ZM252.35 691.814C243.156 680.891 241.857 645.77 238.924 623.389C246.544 632.486 249.651 673.366 252.35 691.814ZM271.948 848.718C271.416 847.362 267.056 817.644 267.164 816.167C270.2 790.623 282.627 874.94 271.948 848.718ZM-335.073 3680.13C-335.424 3679.34 -337.966 3657.28 -337.812 3656.34C-333.428 3635.72 -325.858 3701.75 -335.073 3680.13Z" fill="#FAF2ED" />
            </svg>
          </span>
        </section>

        <section className={`step-3 transition-all duration-500 ease-in-out ${activeStep === 3 ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="auto_container">
            <div className="wrap">
              {/* <h1 className="text-2xl md:text-[36px] font-semibold leading-tight w-full uppercase">
                <span className="text-[#FF6A00]">Шаг 3</span>
              </h1> */}
            </div>
          </div>
        </section>
      </div>


    </main>

  );
}

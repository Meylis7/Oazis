"use client";

import Image from "next/image";
import { useState } from "react";
import {
  registrationHeader,
  registrationSteps,
  step1Data,
  step2Data,
} from "@/data/registration";

export default function Registration() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className="relative mt-[80px]">
      <section className="block">
        <div className="auto_container">
          <div className="wrap">
            <h1 className="text-2xl md:text-[36px] font-semibold leading-tight uppercase">
              <span className="text-[#FF6A00]">{registrationHeader.titleHighlight}</span> {registrationHeader.titleSuffix}
            </h1>

            <div className="steps flex flex-col lg:flex-row items-start gap-5 mt-10 relative! lg:pr-[180px]">
              {registrationSteps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index + 1)}
                  className={`flex flex-col rounded-lg cursor-pointer p-[26px] w-full max-w-[260px] md:max-w-[307px] min-h-[140px] md:min-h-[160px] transition-all duration-300 relative z-10 ${activeStep === index + 1 ? 'active bg-[#FF6A00]/15 shadow-[4px_4px_10px_rgba(55,23,0,0.05)]' : 'bg-[#FAF2ED]'}`}
                >
                  <div className="flex items-center justify-between">
                    <h6 className="bg-[#FF6A00] rounded-full py-[6px] px-[16px] text-xs font-semibold leading-tight text-white">
                      {step.label}
                    </h6>

                    <span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7071 8.07112C15.0976 7.6806 15.0976 7.04743 14.7071 6.65691L8.34315 0.292947C7.95262 -0.0975778 7.31946 -0.0975779 6.92893 0.292946C6.53841 0.683471 6.53841 1.31664 6.92893 1.70716L12.5858 7.36401L6.92893 13.0209C6.53841 13.4114 6.53841 14.0446 6.92893 14.4351C7.31946 14.8256 7.95262 14.8256 8.34314 14.4351L14.7071 8.07112ZM0 7.36401L-8.74228e-08 8.36401L14 8.36401L14 7.36401L14 6.36401L8.74228e-08 6.36401L0 7.36401Z" fill="#FF6A00" />
                      </svg>
                    </span>
                  </div>

                  <p className="text-sm font-normal leading-tight mt-auto">
                    {step.description}
                  </p>
                </div>
              ))}

              <div className="oazisImg ">
                <Image
                  width={registrationHeader.stepOneImage.width}
                  height={registrationHeader.stepOneImage.height}
                  src={registrationHeader.stepOneImage.src}
                  className='w-full h-full object-cover'
                  alt={registrationHeader.stepOneImage.alt}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 w-full mt-5">
              <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
              <p className="text-sm md:text-base font-normal leading-tight">
                {registrationHeader.afterRegistrationNote}
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
                <span className="text-[#FF6A00]">{step1Data.titleHighlight}</span> {step1Data.titleSuffix}
              </h1>
              <p className="text-sm md:text-base font-normal leading-6 mt-4 w-full max-w-[915px]">
                {step1Data.subtitle}
              </p>

              <form action="#" className="form grid grid-cols-12 gap-6 md:gap-8 mt-10 md:mt-[56px]">
                {/* Child info */}
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20x] md:text-xl font-medium leading-tight mb-5">
                      {step1Data.childSection.title}
                    </h4>
                    {step1Data.childSection.fields.map((field) => (
                      <div key={field.id} className="block mb-3">
                        <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                          {field.label}
                        </label>
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parents info */}
                <div className="grid grid-cols-12 col-span-12 gap-5">
                  <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                    {step1Data.parentsSection.title}
                  </h4>

                  <div className="block col-span-12 md:col-span-6">
                    <h6 className="text-base font-medium leading-tight mb-4">
                      {step1Data.parentsSection.mother.label}
                    </h6>
                    {step1Data.parentsSection.mother.fields.map((field) => (
                      <div key={field.id} className="block mb-3">
                        <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                          {field.label}
                        </label>
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="block col-span-12 md:col-span-6">
                    <h6 className="text-base font-medium leading-tight mb-4">
                      {step1Data.parentsSection.father.label}
                    </h6>
                    {step1Data.parentsSection.father.fields.map((field) => (
                      <div key={field.id} className="block mb-3">
                        <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                          {field.label}
                        </label>
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Medical info */}
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      {step1Data.medicalSection.title}
                    </h4>
                    {step1Data.medicalSection.fields.map((field) => (
                      <div key={field.id} className="block mb-3">
                        <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                          {field.label}
                        </label>
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insurance */}
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      {step1Data.insuranceSection.title}
                    </h4>
                    {step1Data.insuranceSection.fields.map((field) => (
                      <div key={field.id} className="block mb-3">
                        <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                          {field.label}
                        </label>
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional */}
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      {step1Data.additionalSection.title}
                    </h4>
                    {step1Data.additionalSection.fields.map((field) => (
                      <div key={field.id} className="block mb-3">
                        <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                          {field.label}
                        </label>
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                    <div className="block mb-3">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={step1Data.additionalSection.textareaId}>
                        {step1Data.additionalSection.textareaLabel}
                      </label>
                      <textarea
                        className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[140px]"
                        name={step1Data.additionalSection.textareaId}
                        id={step1Data.additionalSection.textareaId}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Camp experience */}
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      {step1Data.campExperienceSection.title}
                    </h4>
                    {step1Data.campExperienceSection.options.map((option) => (
                      <div key={option.id} className="block mb-3 check">
                        <input type="radio" name={option.name} id={option.id} />
                        <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor={option.id}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Priorities */}
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      {step1Data.prioritiesSection.title}
                    </h4>
                    {step1Data.prioritiesSection.options.map((option) => (
                      <div key={option.id} className="block mb-3 check">
                        <input type="radio" name={option.name} id={option.id} />
                        <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor={option.id}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone dependence */}
                <div className="grid grid-cols-12 col-span-12">
                  <div className="block col-span-12 md:col-span-6">
                    <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-5 col-span-12">
                      {step1Data.phoneSection.title}
                    </h4>
                    {step1Data.phoneSection.options.map((option) => (
                      <div key={option.id} className="block mb-3 check">
                        <input type="radio" name={option.name} id={option.id} />
                        <label className="text-sm md:text-base font-normal leading-tight py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full" htmlFor={option.id}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="block mt-2 col-span-12 md:col-span-6">
                  <button type="submit" className="bg-[#FF6A00] text-sm md:text-lg font-semibold leading-tight text-center text-white py-[18px] px-3 rounded-lg cursor-pointer w-full">
                    {step1Data.submitButton}
                  </button>

                  <p className="text-sm font-normal leading-tight mt-2 w-full max-w-[235px] md:max-w-full mx-auto text-center">
                    {step1Data.submitNote}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start mt-10">
                    <p className="text-[#FF6A00] text-lg font-normal leading-tight mb-2 sm:mb-0 sm:mr-4">
                      {step1Data.viberLabel}
                    </p>
                    <p className="text-sm md:text-base font-normal leading-tight">
                      {step1Data.viberNote}
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
                {step2Data.titlePrefix}. <span className="text-[#FF6A00]">{step2Data.titleHighlight}</span>
              </h1>
              <p className="text-sm md:text-base font-normal leading-6 mt-3 md:mt-4 w-full max-w-[690px] mx-auto text-center">
                {step2Data.subtitle}
              </p>

              <div className="block w-full mt-6 md:mt-10">
                <Image
                  width={step2Data.documentImage.width}
                  height={step2Data.documentImage.height}
                  src={step2Data.documentImage.src}
                  className='w-full h-full object-cover'
                  alt={step2Data.documentImage.alt}
                />
              </div>

              <div className="flex flex-col gap-5 mt-10">
                {step2Data.sections.map((section, index) => (
                  <div key={index} className="block ">
                    <div className="flex items-center gap-4 w-full mb-2">
                      <span className="min-w-[14px] h-[14px] block bg-[#FF6A00] rounded-full"></span>
                      <h6 className="text-2xl md:text-[36px] font-semibold leading-tight">
                        {section.title}
                      </h6>
                    </div>

                    <p className="text-sm md:text-base font-normal leading-tight">
                      {section.content}
                    </p>

                    {section.note && (
                      <div className="flex items-start mt-5">
                        <p className="text-[#FF6A00] text-xl font-medium leading-tight mr-4">
                          {step2Data.noteLabel}
                        </p>
                        <p className="text-sm md:text-base font-normal leading-tight">
                          {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <form action="#" className="grid grid-cols-12 gap-5 mt-[60px]">
                {/* Parent signature */}
                <div className="block col-span-12 md:col-span-6">
                  <h6 className="mb-5 md:mb-10 text-sm md:text-base font-normal leading-tight">
                    {step2Data.parentForm.intro}
                  </h6>
                  <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-[6px]">
                    {step2Data.parentForm.title}
                  </h4>
                  <p className="text-xs font-normal leading-tight text-[#242424]/80 mb-5">
                    {step2Data.parentForm.subtitle}
                  </p>
                  {step2Data.parentForm.fields.map((field) => (
                    <div key={field.id} className="block mb-[14px]">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[120px]"
                          name={field.id}
                          id={field.id}
                        ></textarea>
                      ) : (
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Camper signature */}
                <div className="block col-span-12 md:col-span-6">
                  <h6 className="mb-5 md:mb-10 text-sm md:text-base font-normal leading-tight">
                    {step2Data.camperForm.intro}
                  </h6>
                  <h4 className="text-[20px] md:text-xl font-medium leading-tight mb-[6px]">
                    {step2Data.camperForm.title}
                  </h4>
                  <p className="text-xs font-normal leading-tight text-[#242424]/80 mb-5">
                    {step2Data.camperForm.subtitle}
                  </p>
                  {step2Data.camperForm.fields.map((field) => (
                    <div key={field.id} className="block mb-[14px]">
                      <label className="text-sm md:text-base font-normal leading-tight mb-1 block" htmlFor={field.htmlFor}>
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[120px]"
                          name={field.id}
                          id={field.id}
                        ></textarea>
                      ) : (
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="col-span-12 mt-3">
                  <div className="flex flex-col sm:flex-row items-start mb-[22px]">
                    <p className="text-[#FF6A00] text-lg md:text-xl font-medium leading-tight mb-2 sm:mb-0 sm:mr-4">
                      {step2Data.viberLabel}
                    </p>
                    <p className="text-sm md:text-base font-normal leading-tight">
                      {step2Data.viberNote}
                    </p>
                  </div>

                  <div className="block mb-[22px] ruleCheck">
                    <input type="checkbox" id={step2Data.checkboxId} />
                    <label htmlFor={step2Data.checkboxId} className="cursor-pointer block text-sm md:text-base font-normal leading-tight">
                      {step2Data.checkboxLabel}
                    </label>
                  </div>

                  <button type="submit" className="bg-[#FF6A00] text-sm md:text-lg font-semibold leading-tight text-center text-white py-[18px] px-3 mb-3 rounded-lg cursor-pointer w-full">
                    {step2Data.submitButton}
                  </button>

                  <p className="text-xs md:text-sm font-normal leading-tight text-center">
                    {step2Data.submitNote}
                  </p>
                </div>
              </form>
            </div>
          </div>

          <span className="block absolute top-[-70px] left-0 w-full">
            <svg className="w-full" width="1440" height="4118" viewBox="0 0 1440 4118" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M299.841 3177.71C298.204 3172.09 297.286 3148.35 295.594 3138.25C306.435 3148.64 305.782 3198.16 299.841 3177.71ZM-492.595 2189.65C-492.409 2190.31 -492.222 2190.96 -492.036 2191.61C-489.463 2200.12 -486.851 2208.73 -484.201 2217.44C-484.187 2209.24 -484.482 2200.32 -484.84 2191.28C-485.735 2169.16 -486.895 2146.08 -485.768 2127.83C-485.492 2123.64 -478.507 2134.33 -478.429 2124.44C-478.33 2114.4 -487.536 2116.17 -488.706 2101.14C-490.33 2084.81 -482.992 2003.63 -478.976 1966.28C-476.324 1937.87 -473.4 1906.54 -462.675 1861.37C-456.774 1838.05 -449.684 1811.41 -431.399 1772.53C-412.19 1735.7 -384.338 1675.77 -293.4 1615.9C-200.904 1553.32 -68.6333 1554.01 -10.2485 1572.51C53.23 1589.61 83.6499 1609.33 107.916 1623.71C154.138 1653.23 174.118 1672.33 191.933 1687.73C202.333 1697.03 212.682 1706.69 222.819 1716.64C205.239 1702.47 194.317 1694.91 188.555 1691.63C181.53 1687.62 181.689 1689.66 185.814 1694.8C195.131 1706.31 225.28 1735.49 238.726 1746.26C243.366 1750.58 258.011 1737 328.267 1818.63C370.42 1870.13 313.312 1840.77 391.408 1914.53C351.659 1840.5 404.14 1903.59 442.867 1952.19C449.937 1960.61 500.023 2030.25 521.94 2059.3C529.692 2069.41 548.267 2079.69 558.057 2092.91C560.576 2096.31 562.321 2099.83 564.041 2103.63C566.857 2109.93 569.571 2116.98 575.918 2125.64C622.115 2188.86 664.825 2250.56 706.035 2314.29C662.116 2290.59 717.41 2348.59 718.423 2352.12C723.337 2370.55 676.183 2304.01 691.017 2332.92C716.891 2369.86 742.505 2406.7 767.962 2443.42C749.909 2411.38 811.108 2472.97 813.483 2490.14C826.779 2473.32 910.939 2668.19 933.998 2690.19C938.834 2694.77 923.351 2653.82 974.849 2738.55C980.443 2747.75 973.072 2747.81 976.684 2752.13C978.826 2754.69 1006.36 2760.54 1009.54 2784.38C1010.64 2792.69 974.288 2761.34 1032.19 2838.73C1034.05 2841.2 1036 2843.77 1038.02 2846.41C1029.8 2800.21 1132.31 2962.49 1148.15 2989.68C1146.36 2982.88 1144.35 2975.76 1142.6 2968.94C1156.56 2999.63 1165.47 2999.87 1169.55 3005.79C1186.04 3029.65 1204.51 3062.93 1218.47 3077.31C1230.31 3089.55 1237.45 3086.9 1244.14 3091.07C1245.29 3091.74 1246.24 3092.43 1246.56 3092.86C1246.82 3093.24 1246.66 3093.47 1243.92 3092.06C1249 3093.17 1249.17 3090.33 1248.57 3086.42C1248.46 3085.84 1248.34 3085.25 1248.21 3084.65C1248.56 3085.02 1248.9 3085.39 1249.22 3085.74C1250.8 3087.44 1251.75 3088.45 1250.79 3087.81C1249.62 3087.06 1247.34 3084.97 1237.26 3078.08C1225.21 3071.76 1214.68 3057.18 1143.3 3037.24C1107.85 3028.09 1042.66 3021.61 977.119 3041.89C911.56 3061.68 871.003 3096.28 853.658 3112.37C835.082 3129.76 823.422 3144.52 814.854 3156.39C824.683 3143.86 837.706 3129.04 854.948 3113.76C877.369 3092.72 934.575 3055.32 989.883 3043.21C1045.1 3030.06 1083.3 3034.35 1104.86 3037.06C1147.24 3044.04 1149.22 3047.51 1140.22 3044.78C1129.29 3043.23 1100.14 3031.47 1031.35 3037.86C961.16 3042.38 878.236 3093.58 857.07 3116.05C811.072 3159.39 802.487 3181.56 794.364 3193.66C787.367 3205.82 785.396 3209.91 784.663 3211.41C783.396 3214.22 783.443 3215.03 783.819 3215.53C784.212 3216 785.031 3215.96 785.773 3216.11C786.518 3216.26 787.172 3216.62 787.289 3217.76C787.426 3218.84 786.965 3220.9 786.105 3222.88C785.91 3223.26 784.374 3222.76 782.409 3223.41C780.508 3223.8 778.081 3226.05 778.012 3224.92C778.011 3223.41 779.021 3219.6 780.059 3216.9C781.123 3214.1 782.35 3211.95 783.54 3210.25C785.92 3206.78 788.162 3205.24 789.078 3198.65C789.198 3197.12 783.029 3201.9 784.878 3176.34C789.974 3087.71 789.335 3178.48 789.547 3180.52C789.807 3182.65 796.696 3177.4 801.404 3180.22C806.157 3181.94 808.506 3197.9 799.922 3221.82C805.47 3206.23 816.299 3203.14 816.891 3201.19C817.498 3199.99 821.073 3157.3 820.872 3154.15C819.548 3131.4 810.447 3150.41 809.599 3145.91C809.027 3142.85 823.246 3086.2 802.564 3070.45C805.391 3066.99 807.769 3064.67 809.767 3063.41C812.441 3062.9 814.484 3063.07 816.052 3063.85C821.829 3071.22 819.4 3103.03 818.619 3134.38C822.149 3141.62 830.432 3091.41 830.545 3088.35C831.282 3078.55 831.467 3070.94 831.253 3064.91C828.276 3050.6 814.516 3060.52 805.758 3055.33C800.402 3052.57 811.392 3040.61 796.808 3051.42C795.955 3039 797.099 3034.02 799.305 3034.82C801.445 3035.36 804.119 3039.55 804.692 3038.49C806.458 3035.52 801.252 3023.17 801.581 3021.24C802.156 3018.61 808.104 3027.02 808.873 3016.69C808.958 3014.93 798.399 2999.14 796.566 3021.02C794.649 2992.13 786.907 2994 800.179 2980.6C768.182 2961.08 813.825 2960.04 813.604 2949.51C812.657 2921.25 792.066 2933.27 790.76 2932.09C782.465 2924.07 772.31 2841.18 763.777 2820.21C781.563 2825.03 779.164 2886.49 784.606 2897.91C803.709 2937.77 779.595 2836.68 805.961 2862.94C797.661 2851.18 789.191 2839.03 780.698 2827.07C787.513 2799.4 801.597 2833.46 780.828 2767.75C767.29 2759.44 793.956 2814.55 782.524 2804.92C775.847 2799.1 765.436 2761.02 762.516 2760.72C759.178 2760.84 771.474 2794.86 765.197 2790.52C756.41 2784.27 744.183 2726.67 744.835 2713.63C745.033 2710.93 745.87 2710.36 747.523 2712.95C749.925 2716.92 753.895 2726.9 760.048 2746.64C756.451 2732.56 759.317 2721.01 761.17 2709.5C763.119 2699.08 764.09 2688.59 757.935 2678.03C749.632 2663.76 743.133 2757.46 714.609 2626.79C723.866 2621.51 731.165 2677.74 732.258 2679.02C733.877 2680.74 753.746 2665.05 754.393 2663C756.774 2656.34 708.941 2525.77 712.124 2493.91C702.386 2508.9 681.671 2392.2 674.215 2380.68C672.208 2377.65 667.747 2392.29 665.925 2388.96C654.859 2368.32 652.367 2304.5 645.011 2276.5C636.794 2245.19 631.051 2250.99 630.585 2249.26C627.176 2235.44 634.834 2245.12 632.501 2236.73C628.952 2224.04 605.823 2136.32 603.672 2132.17C603.018 2130.97 599.137 2147.43 592.415 2128.7C591.254 2125.43 601.064 2125.09 581.616 2069.43C558.224 2002.31 583.009 2120.04 565.594 2094.26C567.449 2046.61 554.165 2051.69 552.009 2039.48C551.281 2035.24 554.599 2001.34 544.911 1968.03C553.227 1991.57 561.574 2015.06 569.948 2038.52C565.601 2014.41 550.774 1969.26 547.898 1949.13C546.491 1939.32 558.14 1944.62 552.4 1924.02C551.139 1919.65 523.168 1908.45 548.039 1959.81C540.868 1966.36 539.422 1939.16 533.902 1927.81C533.056 1926.1 517.248 1922.64 521.86 1905.05C523.053 1900.77 574.045 1930.26 517.707 1834.59C515.894 1831.5 513.813 1844.43 511.913 1841.44C510.613 1839.39 505.836 1812.39 504.369 1809.66C502.824 1806.86 500.555 1821.08 498.545 1817.8C488.205 1800.98 504.111 1771.3 512.098 1809.43C511.588 1796.16 511.084 1782.83 510.611 1769.55C497.419 1787.29 500.876 1750.89 495.994 1733.56C491.808 1718.73 488.352 1707.26 485.462 1698.47C466.603 1640.84 471.231 1697.51 462.235 1681.9C445.621 1652.99 479.883 1669.72 460.14 1625.58C458.373 1621.53 459.48 1680.39 440.35 1569.39C444.608 1585.38 448.927 1601.48 453.258 1617.47C467.141 1604.33 438.333 1559.52 437.236 1555.73C425.041 1513.28 437.509 1540.98 414.61 1479.01C412.569 1473.47 413.763 1460.17 409.03 1448.37C389.476 1399.6 419.068 1516.35 413.386 1520.98C410.385 1523.35 382.774 1396.66 383.533 1392.01C386.241 1372.1 399.139 1448.69 404.367 1432.39C405.87 1426.56 361.041 1247.53 357.386 1210.67C352.736 1168.08 371.161 1144.96 346.284 1149.53C368.28 1132.83 349.661 1125.84 348.774 1120.4C338.469 1055.17 338.754 1055.12 326.062 999.933C323.302 987.841 328.793 976.001 326.755 971.916C325.542 969.541 318.465 975.663 313.783 963.813C307.195 947.281 297.16 842.044 300.362 833.625C303.423 825.188 309.798 877.179 315.422 866.628C310.738 836.049 304.656 806.743 299.66 776.463C298.516 769.53 297.443 762.638 296.47 755.767C294.287 740.113 300.629 747.227 299.625 740.335C299.14 737.282 286.205 683.343 284.683 685.552C282.813 688.984 290.113 738.443 295.473 777.155C300.09 810.937 302.939 836.933 295.301 817.092C292.141 808.854 298.834 777.085 285.459 784.196C285.207 782.434 284.956 780.679 284.706 778.932C274.248 705.667 264.471 631.517 256.757 553.63C252.896 513.979 249.518 474.36 247.605 428.621C246.731 405.656 246.044 381.289 247.128 349.98C247.813 333.614 248.571 316.221 252.397 288.833C254.572 274.624 256.908 258.62 264.832 231.134C268.918 217.688 274.181 200.643 286.774 174.807C299.938 150.776 316.796 111.151 380.944 59.9404C419.904 29.7774 468.946 8.75465 510.103 7.95423e-06C469.248 9.16578 420.475 30.4768 381.739 60.9815C307.724 122.109 297.263 160.426 283.157 187.849C272.357 213.122 267.849 230.336 264.322 244.749C258 272.23 256.64 287.77 255.209 302.687C252.942 330.44 253.099 349.026 253.203 366.603C253.648 400.901 255.084 428.135 256.57 455.071C259.671 508.299 263.441 556.098 269.963 601.886C271.775 615.08 276.53 658.368 282.979 652.029C273.724 571.193 256.022 478.497 259.269 370.849C259.416 367.262 265.972 380.391 266.979 366.988C267.795 357.098 266.598 340.619 267.676 312.106C268.421 297.677 269.174 280.642 275.097 252.059C278.256 237.723 282.714 219.357 293.675 193.393C307.161 165.864 320.806 125.866 388.92 70.3787C477.03 4.41163 551.706 6.03126 573.253 4.86158C577.502 5.23585 557.485 4.8733 521.443 12.8728C485.59 20.1958 429.903 43.7285 392.787 75.4404C323.797 134.275 319.42 165.217 312.371 177.122C307.629 189.823 308.113 190.21 322.804 166.667C337.573 144.168 358.535 114.682 399.222 83.8623C524.865 1.83765 600.456 22.4587 641.472 19.9705C684.758 22.2629 714.469 27.2424 742.508 40.7544C814.037 72.4656 903.684 177.141 929.981 190.419C945.233 198.343 930.385 181.385 911.17 161.726C892.41 142.289 866.46 118.924 873.216 119.285C947.406 173.195 990.534 229.665 1036.44 279.882C1042.93 287.027 1049.25 294.153 1055.22 300.943C1056.38 302.275 1051.32 286.369 1066.54 302.798C1092.09 330.975 1089.66 343.624 1098.7 357.891C1108.9 373.5 1143.63 421.238 1144.69 429.267C1144.87 430.314 1130.81 425.737 1129.62 424.448C1112.43 405.859 1116.47 391.359 1115.28 389.373C1110.38 381.723 1101.52 377.232 1096.69 370.247C1088.75 358.833 1087.4 350.012 1075.6 334.493C1067.24 323.617 1069.25 338.958 1061.25 328.497C1059.24 325.73 1047.74 296.468 1032.7 283.312C1028.76 280.134 1024.51 279.009 1020.11 281.673C1019.58 282 1021.45 284.951 1025.31 290.089C1090.06 359.452 1223.44 594.175 1239.13 614.824C1227.35 590.075 1215.21 564.985 1202.5 539.551C1227.62 591.766 1273.19 641.286 1256.28 656.342C1275.94 691.294 1295.03 725.669 1313.99 759.724C1393.8 903.123 1467.83 1045.98 1540.89 1184.44C1555.66 1215.61 1534.31 1206.46 1564.53 1252.82C1561.72 1238.36 1558.72 1223.41 1555.81 1208.55C1559.08 1216.55 1566.41 1232.58 1574.98 1250.45C1584.69 1270.74 1596.95 1294.85 1604.55 1308.38C1606.37 1311.65 1607.83 1314.14 1608.17 1314.82C1608.4 1315.41 1607.98 1314.54 1603.02 1308.39C1600.45 1305.28 1596.67 1300.65 1589.03 1292.94C1581.17 1285.46 1570.34 1273.68 1541.27 1255.8C1515.18 1239.31 1447.15 1209.23 1367.97 1221.75C1291.16 1234.95 1260.62 1264.07 1249.17 1271.06C1243.67 1275.13 1239.03 1278.89 1235.07 1282.26C1223.92 1291.81 1204.35 1305.77 1184.72 1329.95C1165.33 1353.56 1154.93 1376.25 1153.71 1379.27C1153.08 1380.78 1153.86 1379.42 1154.91 1378.18C1155.98 1376.86 1157.45 1375.32 1158.98 1373.86C1162.06 1370.82 1165.39 1368.21 1167.07 1363C1169.87 1354.28 1168.81 1341.74 1169.7 1338.65C1170.41 1336.18 1176.39 1335.98 1178.1 1329.86C1183.38 1310.34 1165.13 1324.98 1186.19 1306.6C1186.42 1311.73 1186.65 1316.71 1186.87 1321.63C1189.29 1310.7 1193.06 1297.46 1196.53 1289.86C1199.49 1285.67 1202.4 1284.41 1204.07 1290.56C1204.42 1293.22 1204.66 1296.62 1204.73 1300.98C1204.85 1307.49 1199.69 1301.44 1199.24 1306.18C1190.73 1394.22 1191.73 1386.08 1195.35 1379.98C1199.01 1371.25 1205.33 1326.9 1205.37 1290.68C1205.23 1288.07 1205.01 1285.26 1204.71 1282.46C1214.62 1275.07 1211.4 1177.14 1213.05 1172.39C1215.55 1167.66 1222.01 1185.47 1228.26 1162.36C1228.91 1159.48 1229.52 1010.66 1238.74 1064.8C1240.34 1076.49 1236.06 1146.11 1236.25 1161.69C1252.46 1129.21 1236.74 1051.51 1234.72 1024.22C1234.71 1022.74 1235.27 1018.32 1235.31 1016.84C1235.06 1013.65 1234.99 1011.38 1235.18 1010.23C1238.01 993.364 1239.94 1005.35 1242.05 1017.49C1242.02 1018.92 1241.47 1023.2 1241.48 1024.64C1244.19 1039.54 1247.22 1054.16 1250.76 1025.22C1250.74 1023.85 1251.27 1019.75 1251.3 1018.37C1252.13 1013.37 1253.03 1006.96 1254 998.864C1262.17 930.697 1244.06 993.666 1241.5 966.919C1240.05 951.923 1260.7 875.862 1243.47 876.365C1244.24 849.619 1251.74 866.068 1252.71 862.844C1253.59 859.658 1253.58 807.077 1258.84 790.495C1259.49 788.486 1267.7 795.82 1268.63 793.767C1270.27 789.824 1273.45 739.35 1272.9 737.256C1272.51 735.913 1263.57 747.17 1262.18 742.068C1260.58 736.061 1267.16 687.971 1265.22 685.062C1262.23 681.053 1258.56 740.843 1250.88 730.051C1255.77 702.695 1254.4 657.507 1249.22 638.636C1250.77 643.361 1248.44 669.858 1246.82 679.11C1234.56 673.486 1240.36 616.394 1248.48 636.906C1244.32 623.921 1240.62 632.112 1236.21 624.697C1235.11 622.601 1236.56 605.207 1234.7 601.502C1234.31 601.003 1227.73 618.708 1225.51 614.828C1223.54 611.276 1224.07 596.555 1225.28 582.27C1225.42 576.044 1229.15 557.861 1229.99 551.691C1232.83 538.658 1236.16 523.451 1245.61 498.733C1256.17 474.873 1268.12 436.897 1324.74 384.196C1381.35 327.941 1490.16 306.883 1529.02 313.021C1572.71 316.344 1583.57 321.925 1589.56 323.139C1602.15 327.008 1603.68 328.15 1604.47 328.775C1604.81 329.317 1603.48 329.264 1597.59 327.918C1591.38 326.691 1581.03 323.26 1553.67 319.559C1527.79 316.41 1473.35 312.342 1410 338.171C1346.62 363.749 1305.22 409.827 1286.35 438.098C1266.34 467.94 1259.36 487.28 1253.86 502.252C1243.99 531.505 1242.92 544.965 1241.89 554.218C1241.08 560.115 1237.52 577.496 1237.38 583.447C1237.86 584.906 1238.4 585.988 1239.01 586.487C1239.15 586.595 1239.72 585.523 1240.56 583.756C1240.69 577.877 1244.22 560.707 1245.01 554.881C1247.41 547.635 1250.48 537.24 1258.14 517.721C1267.84 498.313 1272.07 468.506 1329.29 409.386C1357.59 380.793 1411.26 349.645 1459.42 341.135C1507.79 331.779 1540.16 337.349 1558.6 340.627C1594.97 348.616 1595.63 351.605 1597.23 351.86C1597.79 353.195 1596.77 353.775 1592.82 353.303C1588.63 352.857 1581.66 350.901 1563.48 347.677C1545.72 345.108 1512.58 338.634 1460.2 349.647C1407.57 359.872 1352.83 396.865 1327.65 426.483C1277.15 486.784 1277.07 512.046 1270.1 529.51C1265.3 546.607 1264.43 554.924 1264.72 559.066C1263.98 564.441 1260.73 580.282 1260.61 585.706C1261.22 586.401 1262.07 586.601 1263.23 586.147C1263.25 586.087 1263.27 586.027 1263.29 585.967C1263.41 580.604 1266.63 564.94 1267.35 559.626C1272.57 543.289 1274.48 526.729 1298.49 482.009C1311.7 460.561 1332.73 422.01 1394.24 386.074C1457.43 348.697 1535.74 353.423 1562.53 360.783C1538.29 356.103 1476.57 349.174 1412.97 379.589C1350.21 409.973 1322.16 452.541 1307.94 476.375C1281.34 525.646 1281.41 544.034 1277.16 561.708C1276.46 566.799 1273.39 581.801 1273.26 586.937C1272.92 625.595 1267.2 672.934 1273.77 688.25C1275.54 649.705 1278.93 609.855 1287.57 588.329C1287.69 583.518 1290.57 569.464 1291.22 564.695C1296.44 548.459 1304.1 528.343 1317.69 506.303C1330.65 484.56 1351.85 463.707 1354.54 466.928C1355.95 469.374 1334.63 504.012 1329.82 524.85C1323.36 546.937 1322.36 561.541 1321.82 571.194C1321.27 575.262 1318.81 587.252 1318.71 591.357C1319.89 594.77 1320.79 597.328 1321.62 597.084C1323.47 596.51 1324.71 594.596 1325.49 592.017C1325.58 588.065 1327.95 576.525 1328.48 572.609C1330.55 565.726 1332.47 556.384 1337.78 540.485C1344.69 524.711 1347.69 499.506 1393.02 456.399C1415.31 435.724 1454.57 416.975 1485.72 412.767C1517.19 407.928 1537.42 411.305 1549.59 413.152C1573.51 417.691 1575.01 419.092 1576.37 419.372C1579.16 420.867 1578.89 421.346 1578.83 421.87C1578.83 421.87 1578.83 421.87 1578.83 421.87C1578.14 422.579 1578.97 423.46 1567.12 420.711C1560.88 419.446 1551.09 416.678 1531.2 415.019C1512.07 413.457 1477.56 414.253 1442.19 430.01C1367.92 466.151 1354.71 513.081 1345.92 531.227C1337.97 552.294 1336.28 564.039 1334.59 573.905C1334.07 577.682 1331.79 588.811 1331.7 592.621C1332.08 601.103 1332.42 608.167 1333.19 609.104C1336.35 612.966 1350.4 599.393 1357.24 595.105C1357.32 591.875 1359.25 582.438 1359.69 579.237C1361.47 577.117 1362.83 575.875 1363.47 576.035C1363.51 576.273 1363.32 577.709 1363.04 579.949C1362.61 583.074 1360.72 592.284 1360.65 595.437C1361.36 602.485 1362.69 628.982 1369.62 619.052C1373.11 614.007 1375.67 605.336 1377.51 597.077C1377.58 594.306 1379.24 586.214 1379.61 583.468C1382.81 572.318 1386.25 558.528 1396.42 539.067C1405 519.93 1432.09 494.34 1435.97 492.925C1454.93 481.284 1419.37 503.876 1405.85 529.831C1391.36 555.257 1389.27 572.083 1387.05 585.049C1386.7 587.624 1385.14 595.214 1385.08 597.813C1385.58 611.006 1385.7 625.63 1386.84 626.512C1387.87 627.454 1396.59 603.673 1399.75 599.24C1399.8 596.974 1401.16 590.355 1401.47 588.11C1401.89 587.311 1402.22 586.829 1402.43 586.73C1402.74 586.608 1402.93 587.236 1403.04 588.445C1402.74 590.654 1401.41 597.166 1401.35 599.396C1403.41 603.49 1405.98 621.796 1411.13 629.926C1415.53 636.95 1421.25 618.357 1421.71 621.758C1422 624.196 1416.86 675.516 1417.49 678.14C1418.43 682.004 1425.62 670.667 1426.96 672.518C1428.88 675.185 1425.07 691.582 1427.51 689.627C1429.33 688.14 1456.39 625.969 1461.89 626.876C1471.26 628.583 1442.83 694.518 1486.34 634.787C1486.62 634.454 1485.49 618.677 1485.76 618.273C1493.07 609.976 1498.57 653.899 1502.56 609.24L1502.51 609.571C1503.08 606.782 1503.78 603.608 1504.85 600.281C1504.08 603.513 1503.66 606.743 1503.38 609.755L1503.45 609.326C1504.96 706.974 1516.61 615.287 1530.44 632.859C1535.92 639.973 1534.15 683.731 1535.04 684.111C1543.23 680.533 1538.57 666.154 1542.84 661.755C1545.22 659.409 1549.57 699.199 1555.77 690.944C1558.96 686.67 1562.07 645.138 1562.77 643.46C1569.42 627.575 1572.89 648.194 1576.83 644.951C1579.46 642.909 1582.12 617.664 1582.6 617.177C1583.62 616.117 1589.99 651.198 1592.71 658.591C1594.81 664.239 1600.91 644.415 1601.69 648.275C1606.31 671.608 1584.09 718.022 1613.14 674.033C1614.92 671.379 1616.05 653.673 1616.39 653.284C1624.4 643.073 1621.82 675.522 1626.93 681.814C1635.74 692.696 1634.87 645.659 1637.94 685.031C1645.5 661.817 1647.76 646.894 1649.17 623.5L1646.6 640.173C1646.29 641.082 1645.87 642.719 1644.37 646.982C1642.5 651.491 1641.29 657.797 1630.09 675.215C1640.86 658.544 1642.4 651.924 1644.36 647.294C1645.98 642.91 1646.52 641.175 1646.97 640.252L1649.55 623.536C1648.56 704.784 1668.49 729.885 1677.5 632.015C1673.84 665.334 1688.51 662.943 1687.78 672.875C1687.32 679.01 1668.35 725.804 1702.43 706.806C1706.68 704.552 1704.51 674.726 1711.76 684.697C1702.77 754.578 1716.81 686.688 1717.89 686.724C1736.57 689.662 1704.34 858.845 1703.65 888.398C1702.82 922.578 1714.69 954.358 1713.99 961.696C1711.64 986.087 1706.08 965.12 1702.79 970.309C1699.51 975.522 1707.24 1046.09 1706.13 1049.47C1701.66 1062.56 1694.06 1048.1 1693.47 1049.45C1692.48 1051.72 1691.59 1055.53 1690.77 1060.5L1691.38 1052.77C1687.44 1078.11 1690.56 1145.06 1688.49 1167.58C1694.28 1166.6 1695.83 1116.65 1704.47 1148.03C1714.62 1184.95 1689.03 1187.36 1687.87 1188.2C1686.98 1231.84 1687.23 1275.66 1682.15 1335.06C1679.2 1366.73 1676.16 1398.58 1670.92 1435.89C1668.14 1454.9 1665.19 1474.6 1658.75 1501.83C1655.32 1515.69 1651.41 1531.24 1642.37 1554.5C1630.06 1577.89 1628.41 1611.3 1552.93 1674.73C1539.26 1684.76 1496.54 1716.53 1428.6 1722.79C1361.15 1728.44 1313.82 1706.42 1289.82 1693.37C1243.18 1665.75 1235.28 1652.03 1224.37 1641.62C1206.19 1621.49 1200.53 1612.49 1193.89 1603.28C1181.94 1586.01 1174.72 1574.05 1167.45 1562.07C1153.31 1538.55 1141.8 1518.08 1130.14 1497.17C1115.83 1471.43 1102.15 1446.29 1088.7 1421.47C1081.7 1426.88 1105.51 1468.78 1124.61 1500.23C1135.37 1518 1144.53 1532.2 1144.57 1533.56C1144.37 1539.89 1133.46 1525.56 1119.42 1503.11C1088.97 1454.52 1044.64 1369.21 1039.83 1353.36C1045.79 1370.67 1051.71 1387.9 1057.78 1405.37C1029.19 1385.33 1014.97 1315.79 987.915 1280.18C979.174 1268.69 986.828 1295.62 986.22 1295.37C973.257 1284.12 965.18 1259.3 981.477 1272.3C956.025 1241.63 966.335 1242.55 952.641 1215.94C951.928 1214.57 952.504 1228.87 938.909 1209.34C932.558 1200.15 904.308 1148.55 895.672 1144.39C892.086 1142.69 884.917 1180.53 905.179 1173.64C926.818 1234.69 923.425 1186.98 934.909 1209.07C936.636 1212.51 922.092 1210.25 956.94 1263.02C932.556 1262.48 912.023 1191.41 903.823 1181.87C886.988 1162.02 927.639 1259.47 951.392 1268.79C932.513 1268.71 952.99 1276.43 963.612 1297.58C975.254 1320.75 965.519 1313.08 972.169 1325.49C990.266 1359.4 993.009 1339.82 998.774 1372.82C1012.81 1329.98 1028.34 1418.78 1032.93 1445.24C1011.92 1409.8 991.299 1374.84 970.696 1340.03C970.284 1342.88 969.876 1345.74 969.461 1348.59C964.619 1339.07 959.799 1329.6 955.01 1320.19C957.261 1320.9 959.51 1321.62 961.757 1322.33C926.434 1279.24 930.736 1262.05 928.72 1258.03C902.803 1207.21 871.318 1149.82 843.734 1100.36C839.604 1093.04 833.2 1102.95 810.43 1046.13C810.342 1045.92 810.253 1045.7 810.165 1045.49C802.358 1026.37 819.126 1039.05 806.615 1019.57C772.741 1005.68 788.721 997.359 784.508 989.901C772.441 968.724 760.274 958.748 759.119 956.85C743.583 931.459 722.885 893.801 706.283 867.539C705.91 867.078 708.216 884.549 699.647 866.105C696.757 859.834 689.193 789.042 653.55 753.552C659.004 765.245 664.554 777.419 670.133 789.905C667.039 782.388 648.923 756.42 633.429 738.878C617.865 721.093 605.331 711.603 608.466 722.131C612.117 734.577 648.768 754.004 635.975 768.114C629.913 754.4 601.351 713.752 583.388 695.726C537.002 645.951 492.7 605.791 489.931 600.457C488.972 598.736 501.233 601.949 499.91 599.693C499.408 598.827 491.563 591.809 484.75 585.885C477.747 579.761 472.699 575.517 472.453 573.883C472.258 572.874 474.386 572.927 477.085 573.364C479.733 573.756 483.008 574.601 483.274 573.426C483.585 572.648 476.123 565.276 473.883 563.912C472.797 563.198 473.493 564.212 476.789 567.004C479.821 569.691 485.753 573.939 486.332 576.226C480.757 572.854 476.105 569.825 473.786 568.344C471.416 566.832 470.996 566.771 471.043 567.463C471.084 568.139 471.497 569.461 471.065 570.491C470.701 571.572 469.357 572.239 467.675 572.969C467.273 573.159 467.386 572.018 468.395 571.512C469.323 570.957 471.423 571.139 472.117 572.115C473.524 574.272 475.002 576.157 474.963 577.062C475 578.004 473.411 577.92 471.58 577.511C467.541 576.519 464.11 574.845 465.501 576.176C467.817 578.295 484.165 591.46 487.982 595.104C476.637 588.585 464.403 580.051 462.81 579.295C462.923 579.136 463.696 581.185 485.037 590.575C496.727 595.034 513.296 603.024 554.275 608.007C590.914 613.218 681.62 608.985 755.899 550.661C816.141 502.3 830.027 467.127 841.122 447.072C851.495 425.511 855.109 412.948 857.869 403.718C863.048 385.085 863.65 377.955 864.44 372.695C865.57 363.114 865.153 363.536 865.254 365.023C865.265 368.719 866.007 379.682 867.857 390.162C865.389 401.237 862.495 393.193 859.902 385.789C857.338 378.629 855.053 372.477 852.87 383.547C845.374 437.063 862.203 396.711 863.046 398.125C869.756 409.783 841.624 465.986 867.253 463.778C866.082 487.35 861.908 480.162 869.518 513.46C870.685 508.702 871.876 504.05 873.09 499.505C892.138 534.302 867.646 622.076 863.95 616.295C853.777 600.767 859.351 556.476 858.601 552.858C857.556 547.804 829.18 535.463 845.467 475.873C825.109 454.183 845.332 568.539 826.802 517.566C831.341 543.231 838.055 631.43 846.904 686.115C850.052 706.028 853.275 721.323 856.301 726.96C857.745 729.459 872.7 714.158 870.492 753.605C869.439 772.32 861.8 728.944 859.319 737.83C850.4 765.427 922.636 1108.91 938.368 1173.62C939.277 1177.85 933.684 1177.4 934.611 1181.57C937.411 1194.26 955.21 1239.22 957.772 1262.46C957.23 1213.12 977.938 1304.71 982.19 1328.17C988.508 1363.82 978.845 1363.88 980.347 1379.51C985.817 1436.09 1024.1 1514.31 1022.02 1565.54C1021.86 1569.26 1021.49 1572.84 1020.87 1576.27C1040.43 1568.69 1030.7 1657.56 1040.23 1694.79C1047.6 1723.9 1072.03 1762.57 1069.9 1721.22C1082.05 1771.6 1099.89 1823.44 1113.84 1870.27C1116.15 1878.02 1107.29 1868.88 1111.43 1882.05C1111.84 1883.23 1118.13 1883.33 1121.83 1894.58C1152.55 1987.56 1127.71 1945.05 1128.87 1963.7C1129.52 1974.12 1130.52 1981.75 1131.66 1987.2C1115.39 1932.37 1095.96 1869.55 1091.26 1852.66C1082.18 1870.57 1126.74 1973.93 1132 2006.44C1132.17 2007.57 1124.04 2005.71 1124.29 2006.84C1124.3 2006.86 1124.3 2006.88 1124.31 2006.91C1127 2018.92 1150.39 2093.51 1154.58 2075.69C1155.7 2070.92 1146.1 2036.21 1134.06 1995.32C1138.69 2005.99 1144.37 1995.51 1145.24 1997.38C1155.69 2020.11 1164.03 2080.62 1168.73 2101.64C1169.8 2106.41 1174.8 2104.69 1175.03 2105.46C1179.11 2124.7 1162.43 2120.99 1182.76 2136.14C1174.12 2175.37 1162.36 2072.88 1152.52 2083.05C1144.85 2090.7 1210.32 2308.09 1224.43 2303.83C1223.11 2305.01 1222.06 2308.58 1221.61 2315.38C1220.61 2330.42 1238.89 2391.36 1244.44 2401.49C1245.45 2403.15 1259.12 2398.67 1259.86 2400.86C1261.69 2406.21 1271.24 2485.02 1286.9 2511.61C1284.77 2495.51 1282.68 2479.76 1280.5 2463.75C1305.26 2556.84 1305.5 2541.83 1301.54 2509.33C1301.17 2507.76 1301.3 2506.11 1300.97 2504.61C1297.69 2479.53 1292.45 2448.12 1293.42 2447.36C1296.17 2444.87 1321.88 2533.33 1325.29 2566.8C1326.47 2577.92 1325.24 2582.63 1320.08 2575.78C1319.6 2575.13 1318.84 2572.49 1317.9 2568.67C1313.27 2549.8 1303.94 2502.84 1304.19 2535.36C1304.18 2539.06 1308.97 2555.85 1312.92 2569.93C1316.06 2581.11 1318.7 2590.58 1318.53 2591.77C1317.47 2598.87 1311.53 2587.87 1304.09 2572.16C1292.74 2548.26 1278.02 2514.74 1274.23 2523.98C1283.94 2538.09 1288.99 2556.34 1293.63 2574.81C1296.55 2586.41 1299.18 2597.48 1302.87 2608.48C1307.19 2621.29 1314.96 2622.77 1315.51 2624.41C1323.32 2648.33 1312.61 2636.39 1314.78 2644.46C1316.05 2648.92 1343.16 2693.38 1319.43 2689.43C1371.97 2848.98 1346.2 2728.77 1321.18 2632.41C1336.57 2660.96 1347.11 2722.91 1355.08 2751.01C1357.95 2761.01 1363.85 2753.22 1369.02 2770.35C1380.3 2801.67 1405.39 2990.07 1397.67 3062.95C1395.1 3024.61 1387.22 3036.02 1387.52 3065.23C1387.26 3095 1398.73 3070.36 1399.71 3076.2C1399.96 3077.81 1399.56 3088.8 1398.15 3104.49C1395.29 3134.62 1387.81 3192.33 1387.42 3205.32C1390.5 3128.7 1381.14 3145.07 1374.13 3209.85C1372.8 3200.03 1371.39 3190.46 1369.93 3181.01C1370.25 3218.18 1347.75 3300.7 1344.58 3331.5C1344.31 3336.01 1353.98 3321.51 1353.81 3324.09C1352.82 3336.58 1347.33 3362.48 1335.25 3397.6C1329.1 3415.2 1320.82 3436.04 1308.97 3458.21C1297.72 3480.01 1280.17 3503.48 1277.14 3507.87C1273.09 3514.93 1299.81 3483.45 1310.21 3466.85C1321.8 3449.61 1328.42 3438.96 1322.79 3454.49C1321.88 3456.59 1318.63 3462.63 1310.09 3475.86C1301.02 3488.67 1290.33 3508.52 1253.19 3542.87C1240.02 3554.23 1218.91 3572.43 1181.89 3589.59C1145.58 3607.03 1093.45 3616.55 1054.48 3613.49C974.253 3606.2 946.318 3583.72 924.063 3572.97C907.967 3563.69 905.939 3563.99 904.532 3565.25C903.404 3566.6 904.611 3569.46 901.415 3567.51C877.07 3552.21 877.121 3548.99 871.907 3542.31C867.54 3536.03 860.167 3527.01 843.293 3511.63C842.264 3510.69 841.176 3509.71 840.025 3508.67C813.126 3484.29 788.106 3472.72 763.166 3438.31C852.158 3556.76 768.177 3458.79 731.558 3418.93C725.56 3412.44 720.533 3425.35 693.073 3381.17C778.281 3454.89 681.435 3349.32 666.506 3327.61C665.666 3326.36 671.485 3321.4 663.496 3310.42C662.808 3309.5 659.68 3313.98 651.886 3304.07C579.751 3211.05 628.697 3268.49 619.808 3247.52C615.876 3238.4 577.722 3196.94 568.956 3184.51C566.983 3181.69 572.339 3180.01 564.525 3169.09C563.318 3167.4 562.084 3165.74 560.83 3164.12C548.007 3147.52 533.379 3134.64 525.121 3123.26C524.116 3121.82 530.979 3116.9 512.388 3094.41C507.163 3088.07 499.467 3082.07 504.014 3093.13C512.702 3114.29 534.429 3141.28 554.89 3168.22C569.558 3187.55 583.527 3206.75 591.442 3223.75C604.23 3250.95 568.738 3203.99 547.091 3173.6C538.874 3162.12 532.305 3152.64 531.344 3151.27C529.915 3149.23 547.432 3167.32 533.904 3146.13C522.284 3127.97 488.327 3104.06 473.34 3076.15C472.166 3073.99 468.452 3046.27 469.674 3046.79C470.725 3047.42 494.531 3077.89 494.391 3071.26C494.321 3070.43 480.559 3050.18 480.98 3046.01C481.463 3040.91 502.085 3014.35 499.852 3009.59C494.022 2997.37 492.844 3008.67 488.413 3001.17C478.945 2985.18 451.132 2926.61 440.752 2930.99C446.129 2940.22 451.422 2949.32 456.788 2958.52C423.056 2910.12 433.148 2933.68 426.775 2927.89C419.932 2921.68 429.387 2918.32 419.16 2901.36C416.905 2897.62 369.283 2829.91 366.739 2833.46C397.528 2867.89 378.108 2860.45 379.103 2862.33C382.882 2869.4 394.215 2874.24 400.06 2883.24C441.238 2946.83 389.981 2889.22 397.629 2905.61C400.29 2911.25 411.859 2918.21 413.09 2920.59C417.031 2928.21 410.835 2932.5 414.492 2936.88C423.006 2947.08 423.312 2928.33 424.354 2928.89C436.454 2934.99 455.342 2978.17 429.659 2960.66C435.786 2977.34 448.73 2971.31 451.667 2985.84C457.661 3014.85 437.201 2979.16 429.442 2970.89C401.731 2941.48 399.7 2928.68 366.975 2882.98C355.22 2866.54 336.248 2850.46 330.745 2842.89C327.265 2838.1 316.235 2778.67 284.311 2798.08C275.323 2778.14 276.975 2736.43 263.676 2718.66C251.757 2702.77 244.316 2715.36 242.86 2714.11C240.589 2712.17 228.101 2691.77 221.993 2686.06C214.855 2679.43 213.325 2686.16 203.22 2674.88C178.037 2646.77 189.729 2640.05 188.297 2636.38C171.639 2593.91 166.75 2620.81 159.943 2613.56C153.634 2606.53 87.219 2497.47 68.0367 2479.39C76.4872 2486.61 84.8097 2493.71 93.2697 2501.04C88.9646 2480.3 66.0523 2471.78 78.1144 2462.74C72.3787 2465.6 67.4854 2464.91 63.2933 2462.23C51.1449 2454.27 44.4333 2430.04 38.9481 2423.34C35.9879 2419.73 32.8535 2422.47 29.3055 2417.94C15.4355 2400.12 -12.1087 2358.18 -21.0262 2350.24C-59.4955 2315.02 8.49195 2428.48 13.865 2438.4C1.57761 2420.28 -73.7061 2331.29 -50.3751 2380.8C-46.8073 2388.38 -29.2605 2393.48 -26.0529 2397.03C-4.71341 2420.75 -27.5507 2406.6 -26.7819 2409.17C-25.4432 2413.42 -5.35098 2424.6 -2.86886 2429.88C-2.05627 2431.62 -16.2875 2427.11 1.74448 2452.02C-14.1183 2444.39 -59.5086 2372.58 -67.8387 2365.69C-70.7941 2363.3 -70.2349 2392.74 -99.8494 2327.58C-100.661 2329.28 -101.472 2330.97 -102.283 2332.67C-126.975 2303.47 -151.292 2276.42 -175.089 2252.26C-169.685 2252.26 -150.78 2260.98 -168.607 2244.4C-178.843 2235.06 -178.082 2248.5 -179.137 2247.75C-183.539 2244.62 -208.424 2218.23 -242.137 2188.96C-248.544 2183.34 -253.329 2179.45 -252.849 2179.81C-251.516 2180.21 -248.476 2185.08 -217.461 2199.59C-201.84 2206.27 -176.585 2216.95 -132.83 2221.7C-89.9493 2227.06 -21.009 2219.25 33.2524 2190.71C144.62 2128.08 156.072 2070.56 167.726 2051.43C176.945 2029.13 177.277 2023.18 178.203 2019.81C178.77 2016.95 178.475 2018.02 178.233 2020.04C177.67 2024.3 177.124 2031.85 176.993 2036.59C176.422 2046.04 183.017 2085.64 183.334 2089.31C183.787 2100.71 182.879 2132.22 183.208 2160C183.325 2176.21 183.818 2192.03 184.519 2197.43C185.726 2206.93 192.451 2197.39 192.636 2206C192.812 2214.08 185.257 2206.16 185.112 2208.58C183.137 2227.56 205.184 2383.01 202.653 2421.57C202.168 2397.97 178.343 2285.92 173.783 2288.7C173.144 2289.43 170.001 2316.96 173.113 2322.57C167.836 2332.79 189.128 2363.08 187.16 2381.34C186.943 2383.42 175.788 2376.29 176.883 2408.17C177.295 2419.42 188.093 2446.9 181.971 2476.81C190.062 2517.83 201.539 2741.32 214.755 2755.42C215.396 2755.84 215.547 2723.99 222.593 2744.66C231.966 2772.06 208.552 2749.19 210.673 2782.2C210.955 2787.2 224.054 2878.26 225.724 2881.12C240.566 2907.38 235.458 2826.99 236.953 2827.96C240.624 2830.33 250.745 2896.38 250.305 2899.17C249.798 2901.85 227.951 2849.6 241.724 2913.93C242.616 2906.25 243.509 2898.56 244.409 2890.9C251.709 2921.05 241.582 2925.28 241.858 2932.76C242.692 2956.04 261.755 2978.94 246.752 3018.44C242.767 3028.88 234.9 3013.38 234.272 3014.7C228.732 3027.39 249.439 3039.83 237.674 3059.37C236.797 3060.8 223.108 3020.78 232.316 3092.66C233.026 3087.56 233.737 3082.45 234.448 3077.33C238.725 3086.99 249.946 3159.54 250.548 3169.54C252.215 3198.4 239.278 3174.64 244.215 3203.31C255.015 3183.15 268.288 3270.41 256.251 3266.92C272.121 3276.9 271.083 3353.22 275.462 3388.12C278.221 3410.13 290.57 3454.3 290.805 3461.48C291.086 3470.24 280.985 3469.03 280.903 3484.67C280.826 3488.4 292.4 3527.89 290.455 3566.35C290.316 3569.6 290.085 3572.82 289.749 3576C288.899 3584.26 274.565 3602.67 268.461 3588.86C266.163 3583.64 264.688 3577.11 263.669 3570.02C260.233 3546.16 262.711 3516.24 255.163 3517.89C248.254 3519.16 252.588 3547.77 256.443 3571.01C258.48 3583.41 260.354 3594.16 260.662 3599.8C265.167 3679.56 247.832 3635.74 244.703 3637.96C237.296 3644.71 243.457 3687.68 242.943 3689.38C240.699 3697.26 230.053 3667.79 224.965 3667.77C218.434 3668.43 212.374 3711.26 208.902 3702.24C203.945 3689.26 208.487 3649.81 207.663 3647.27C197.019 3616.5 187.999 3662.26 182.19 3674.67C180.403 3678.5 174.745 3664.96 174.48 3667.97C170.679 3715.2 196.893 3674.64 198.995 3705.37C200.878 3732.79 186.206 3699.23 185.78 3700.16C185.409 3701.89 189.299 3734.12 186.527 3739.81C185.087 3742.34 154.299 3660.66 146.226 3665.67C151.803 3692.22 157.381 3718.74 163.003 3745.48C152.077 3749.16 155.035 3709.56 153.275 3705.32C149.838 3697.53 147.302 3721.14 143.609 3720.57C141.302 3720.51 129.535 3694.61 129.562 3719.38C129.538 3727.68 139.737 3743.56 135.836 3774.58C111.315 3672.65 114.82 3744.65 111.336 3748.76C107.783 3752.36 91.5481 3703.73 101.524 3763.84C80.0579 3769.5 94.4407 3763.49 88.2619 3747.03C80.6238 3726.47 80.1197 3776.05 75.0611 3698.89C65.4044 3704.43 74.6334 3766.1 74.2552 3769.34C73.9057 3772.26 66.9768 3759.18 65.9443 3764.28C54.1914 3824.88 57.7285 3783.97 47.4254 3802.4C46.4594 3803.76 49.4009 3859.22 41.7961 3817.96C27.911 3742.32 38.2053 3709.61 5.41593 3700.66C-0.334516 3758.63 29.0248 3823.58 31.7367 3840.51C35.8587 3866.51 25.7484 3840.16 24.4509 3843.79C24.0035 3844.78 27.6742 3867.26 27.2345 3867.75C5.83037 3887.06 12.9155 3767.74 3.85282 3732.07C1.69002 3742.54 -0.564527 3752.34 -2.71202 3762.91C-4.74803 3749.19 -6.63452 3736.53 -8.62823 3723.09C-7.04193 3787.24 -11.0672 3725.32 -32.2945 3712.64C-37.0721 3709.73 -23.9907 3750.27 -42.4802 3704.29C-40.3914 3739.93 -45.8383 3729.28 -36.1159 3759.98C-43.8734 3760.4 -62.3268 3690.3 -70.0948 3662.84C-65.1368 3762.89 -44.747 3702.84 -47.8185 3790.52C-36.1297 3805.12 -43.6336 3764.42 -41.6007 3767.57C-34.3777 3778.32 -39.3867 3808.1 -14.9612 3839.11C-10.9527 3844.17 -4.22928 3819.45 0.0991223 3854.06C0.575807 3858 -4.87074 3881.15 -5.55035 3880.78C-12.6015 3879.05 -13.1565 3856.85 -16.0789 3856.24C-18.8231 3855.86 -13.833 3879.98 -14.5724 3880C-22.8055 3882.1 -20.6091 3860.16 -22.7858 3863.67C-27.5671 3871.03 -33.3071 3960.91 -44.002 3846.15C-21.3018 3939.55 -33.1108 3856.99 -41.8573 3820.48C-44.013 3811.62 -49.4346 3809.23 -52.9651 3796.47C-57.6293 3779.28 -58.0219 3758.7 -60.1183 3750.26C-62.4511 3740.78 -66.7692 3796.86 -74.0827 3717.6C-80.3173 3759.35 -58.017 3828.52 -60.7441 3869.12C-66.2196 3951.31 -88.7961 3816.1 -92.263 3802.56C-93.206 3798.96 -98.2596 3812.14 -99.0104 3809.75C-100.156 3806.2 -107.675 3728.57 -114.251 3722.07C-120.849 3715.42 -110.166 3749.88 -115.62 3753.31C-119.388 3754.98 -138.925 3664.26 -134.786 3714.26C-131.932 3748.69 -107.349 3810.61 -122.787 3823.6C-131.225 3772.96 -139.589 3722.47 -147.937 3671.99C-150.63 3700.2 -153.177 3729.42 -155.813 3757.92C-163.724 3712.5 -164.97 3671.51 -173.592 3629.87C-175.735 3619.63 -178.395 3609.06 -181.799 3598.08C-182.062 3612.94 -182.597 3623.59 -183.29 3631.2C-185.401 3657.4 -189.249 3650.46 -193.276 3632.57C-199.088 3607.22 -205.349 3557.21 -206.791 3556.59C-208.392 3556.09 -218.155 3609.52 -220.052 3618.45C-232.745 3573.85 -254.615 3436.15 -264.325 3519.86C-261.635 3504.67 -277.983 3470.58 -278.78 3471.23C-287.343 3476.79 -270.902 3553.48 -280.849 3542.09C-292.451 3528.49 -282.201 3506.54 -286.299 3484.05C-307.277 3369.19 -350.766 3407.25 -358.595 3289.99C-359.988 3292.53 -361.382 3295.08 -362.776 3297.62C-376.73 3170.8 -390.235 3043.72 -402.939 2916.19C-423.634 2868.24 -448.091 2736.4 -453.577 2670.42C-454.758 2657.08 -454.034 2591.18 -453.162 2586.18C-451.548 2576.8 -445.292 2626.73 -442.847 2603.59C-442.445 2598.97 -450.43 2487.77 -457.737 2496.5C-457.497 2509 -449.481 2547.54 -450.753 2554.01C-460.767 2601.22 -481.626 2255.56 -486.149 2234.59C-488.351 2242.64 -490.524 2250.79 -492.669 2259.06C-492.815 2236.88 -492.844 2213.98 -492.609 2191.64C-492.604 2190.98 -492.6 2190.31 -492.595 2189.65Z" fill="#FAF2ED" />
            </svg>
          </span>
        </section>

        <section className={`step-3 transition-all duration-500 ease-in-out ${activeStep === 3 ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="auto_container">
            <div className="wrap">
              {/* Step 3 content goes here */}
            </div>
          </div>
        </section>
      </div>


    </main>

  );
}

import Image from "next/image";
import Link from "next/link";
import {
  contactsPageData,
  contactSection,
  socialNetworks,
  mapSection,
} from "@/data/contacts";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

export default function Contacts() {
  return (
    <main className="relative block mt-10 md:mt-[80px] mb-[60px]">
      <section className="block pb-[60px]">
        <div className="auto_container">
          <div className="wrap">

            {/* Page heading */}
            <h1 className="text-2xl md:text-[36px] font-semibold leading-tight w-full text-center max-w-[690px] mx-auto uppercase">
              {contactsPageData.title}{" "}
              <span className="text-[#FF6A00]">{contactsPageData.titleHighlight}</span>
            </h1>

            {/* Image + contact form */}
            <div className="grid grid-cols-12 mt-6 md:mt-10 gap-5">
              <div className="block col-span-12 md:col-span-7 rounded-xl overflow-hidden">
                <Image
                  width={contactsPageData.image.width}
                  height={contactsPageData.image.height}
                  src={contactsPageData.image.src}
                  className="w-full h-full object-cover"
                  alt={contactsPageData.image.alt}
                />
              </div>

              <div className="block col-span-12 md:col-span-5">
                <form action={contactsPageData.formAction}>
                  {contactsPageData.formFields.map((field) =>
                    field.type === "textarea" ? (
                      <div key={field.id} className="block mb-3">
                        <label
                          className="text-sm md:text-base font-normal leading-tight mb-1 block"
                          htmlFor={field.id}
                        >
                          {field.label}
                        </label>
                        <textarea
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full resize-none h-[120px]"
                          name={field.id}
                          id={field.id}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      </div>
                    ) : (
                      <div key={field.id} className="block mb-3">
                        <label
                          className="text-sm md:text-base font-normal leading-tight mb-1 block"
                          htmlFor={field.id}
                        >
                          {field.label}
                        </label>
                        <input
                          className="text-xs leading-tight font-normal placeholder:text-[#9CB7BB] py-5 px-6 bg-white border border-solid border-[#9CB7BB] rounded-[6px] w-full"
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      </div>
                    )
                  )}

                  <button
                    type="submit"
                    className="bg-[#FF6A00] text-lg font-semibold leading-tight text-center text-white py-[18px] px-3 rounded-lg cursor-pointer w-full mt-5"
                  >
                    {contactsPageData.submitButtonText}
                  </button>
                </form>
              </div>
            </div>

            {/* Contacts + social networks */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-8">
              {/* Contact info */}
              <div className="block">
                <h5 className="text-lg md:text-2xl font-semibold leading-tight text-[#FF6A00] mb-5">
                  {contactSection.title}
                </h5>

                <Link
                  href={contactSection.phoneHref}
                  className="flex items-center gap-[14px] mb-[14px]"
                >
                  <span className="block min-w-6 md:min-w-8">
                    <PhoneIcon />
                  </span>
                  <p className="text-lg md:text-2xl font-semibold leading-tight">
                    {contactSection.phone}
                  </p>
                </Link>

                <Link
                  href={contactSection.emailHref}
                  className="flex items-center gap-[14px]"
                >
                  <span className="block min-w-6 md:min-w-8">
                    <EmailIcon />
                  </span>
                  <p className="text-lg md:text-2xl font-semibold leading-tight">
                    {contactSection.email}
                  </p>
                </Link>

                <p className="text-sm font-normal leading-tight mt-5">
                  {contactSection.contactPersonPrefix} {contactSection.contactPerson}
                </p>
              </div>

              {/* Social networks */}
              <div className="block md:ml-[100px]">
                <h5 className="text-lg md:text-2xl font-semibold leading-tight text-[#FF6A00] mb-5">
                  {socialNetworks.title}
                </h5>

                <div className="flex items-center gap-[6px]">
                  {socialNetworks.items.map((item) => {
                    const IconComponent = socialIconMap[item.icon];
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="w-9 md:w-[42px] block"
                        aria-label={item.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {IconComponent ? <IconComponent /> : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Map + location card */}
            <div className="map relative md:h-[400px] rounded-xl overflow-hidden mt-5 md:mt-[60px]">
              <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "400px" }}>
                <a
                  href={mapSection.providerHref}
                  style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}
                >
                  {mapSection.providerLabel}
                </a>
                <a
                  href={mapSection.directionsHref}
                  style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}
                >
                  {mapSection.providerLabel}
                </a>
                <iframe
                  src={mapSection.iframeSrc}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{ position: "relative" }}
                />
              </div>

              <div className="block w-full md:max-w-[440px] mt-5 md:mt-0 relative! md:absolute md:left-10 md:bottom-[160px] bg-white md:bg-white/95 rounded-lg p-[18px] md:p-[26px]">
                <h6 className="text-[18px] md:text-2xl font-semibold leading-tight text-[#FF6A00] mb-5">
                  {mapSection.locationTitle}
                </h6>
                <p className="text-sm md:text-base font-normal leading-tight">
                  {mapSection.locationName} <br />
                  {mapSection.locationAddress}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

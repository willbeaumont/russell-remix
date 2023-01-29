import { UserData, UserSocial } from "~/data";

function ContactButtons({ data }: { data: Array<UserSocial> }) {
  return (
    <div
      className="grid grid-cols-4
sm:grid-cols-3 justify-around h-full mt-5  sm:place-items-center sm:justify-items-start"
    >
      {data.map((media) => (
        <a
          key={media.href}
          href={media.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={media.img} alt={media.alt} className="w-12" />
        </a>
      ))}
      <button className="sm:w-[144px] text-lg border-2 py-2 px-5 bg-blue-300 col-span-2">
        EMAIL
      </button>
    </div>
  );
}

export default function Contact({ data }: { data: UserData }) {
  return (
    <section
      id="contact-info"
      className="mx-14 lg:mx-40 sm:flex sm:flex-row-reverse sm:justify-between"
    >
      <div
        id="links"
        className="flex flex-col justify-between my-5 sm:w-1/2 sm:px-4 sm:mt-0 sm:justify-start"
      >
        <p className="text-2xl lg:text-3xl">Contact</p>
        <ContactButtons data={data.social} />
      </div>
      <img
        src={data.profile.img}
        alt={data.profile.alt}
        className="pb-10 sm:w-1/2 sm:max-w-xs"
      />
    </section>
  );
}

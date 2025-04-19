import t1 from '../images/team/Untitled.jpg';
import t2 from '../images/team/1.jpg';
import t3 from '../images/team/2.jpg';
import t4 from '../images/team/3.jpg';
import { Instagram } from 'lucide-react';

export default function TeamSection() {
  const teamData = [
    {
      id: 1,
      name: "Sumanth",
      role: "Founder",
      url: t3,
      instagram: "https://www.instagram.com/sumanthshruthii/?igsh=NXBjdXdwdGN2bWdu"
    },
    {
      id: 2,
      name: "Shruthi M",
      role: "Trustee",
      url: t2,
      instagram: "https://instagram.com"
    },
    {
      id: 3,
      name: "Tejas B M",
      role: "Trustee",
      url: t4,
     
    },
    {
      id: 4,
      name: "Ravi Kumar Jadhav",
      role: "Trustee",
      url: t1,

    }
  ];

  return (
    <>
      <div className="flex justify-center items-center p-5">
        <div className="flex max-sm:flex-col flex-row items-center gap-4 shadow-md p-4 rounded-xl max-sm:pr-4 pr-10 max-sm:text-center">
          <img
            src={teamData[0].url}
            className="rounded-xl sm:size-48 lg:size-60 object-center max-sm:mx-auto"
          />
          <div className="flex flex-col justify-start items-start max-sm:items-center">
            <h1 className="font-medium text-lg">{teamData[0].name}</h1>
            <p className="text-xs text-gray-700 sm:text-sm lg:text-base">{teamData[0].role}</p>
            <p className="text-xs text-gray-700 sm:text-sm lg:text-base">Meet the founder of Rishika</p>
            <a
              href={teamData[0].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-blue-500 hover:text-blue-700"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap max-sm:flex-col items-center justify-center gap-4 px-4">
        {teamData.slice(1).map((mm, id) => {
          return <Teamm prp={mm} key={id} />;
        })}
      </div>
    </>
  );
}

function Teamm({ prp }) {
  return (
    <div className="text-center shadow-md p-4 rounded-xl max-sm:w-4/5">
      <img
        className="rounded-xl sm:size-48 lg:size-60 mx-auto object-fill"
        src={prp.url}
      />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm font-medium text-black sm:text-base lg:text-lg">{prp.name}</h3>
        <p className="text-xs text-gray-700 sm:text-sm lg:text-base">{prp.role}</p>
    
      </div>
    </div>
  );
}

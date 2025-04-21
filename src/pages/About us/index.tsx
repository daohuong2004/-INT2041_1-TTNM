import Layout from "Layout";
import React from "react";

interface IProps {
  className?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  msv: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  msv,
  imageUrl,
}) => (
  <div className="bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center w-[262px] h-[289px] ml-1 mr-1 p-4 hover:bg-gradient-to-t hover:from-[#48C9B0] hover:to-[#1F618D]">
    <img
      src={imageUrl}
      alt={name}
      className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-lg"
    />
    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
    <p className="text-gray-700 text-sm mt-1">{role}</p>
    <p className="text-gray-700 text-sm mt-1 mb-5">MSV: {msv}</p>
  </div>
);

const teamMembers = [
  {
    name: "Nguyen Thu Ha",
    role:"member",
    msv: "22028282",
    imageUrl: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/28-School_Girl-128.png",
  },
  {
    name: "Dao Thi Thu Huong",
    role: "Member",
    msv: "22028292",
    imageUrl: "https://cdn4.iconfinder.com/data/icons/avatars-2-12/512/Avatar_2-22-128.png",
  },
  {
    name: "Le Minh Duong",
    role: "Member",
    msv: "22028283",
    imageUrl: "https://www.iconfinder.com/icons/5253088/avatar_face_interface_man_profile_user_web_icon",
  },
  
];

function Aboutus(props: IProps) {
  return (
    <Layout>
      <div>
        <h1 className="text-5xl font-extrabold mb-6 text-[#1F618D]">
          About Us
        </h1>
        <hr className="mb-6 border-[#1F618D]" />
        <p className="text-xl mb-6">
          We are a passionate team at VNU University of Engineering and Technology, working on creating innovative solutions for people with disabilities.
        </p>
        <p className="mb-4 text-lg text-center">University: VNU University of Engineering and Technology</p>
        <p className="mb-4 text-lg text-center">Class: INT2041 1 - Human Machine Interaction</p>
        <p className="mb-4 text-lg text-center">Project: Building applications to support people with disabilities</p>
        <hr className="mb-6 border-[#1F618D]" />

        <div className="container mx-auto p-2">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#1F618D]">Our Amazing Team</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.msv}
                name={member.name}
                role={member.role}
                msv={member.msv}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="text-3xl font-semibold">
            <span className="text-[#48C9B0]">Help us</span> make sign language accessible to everyone!
          </div>
          <div className="mt-4 text-xl font-light">
            Join us in building a more inclusive world. Let's make a difference together!
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aboutus;

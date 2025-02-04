import "./team.css";
import { Helmet } from "react-helmet";

const teamMembers = [
  { name: "Alda", role: "CEO", imageUrl: "/team/masalda.png" },
  { name: "Mindit", role: "COO", imageUrl: "/team/pak_mindit.png" },
  { name: "Rima", role: "CFO", imageUrl: "/team/bu_rima.png" },
  { name: "Amar", role: "Back-End Programmer", imageUrl: "/team/amar.png" },
  { name: "Fryma", role: "IoT Developer", imageUrl: "/team/mas_fryma.png" },
  { name: "Sutani", role: "Senior Developer", imageUrl: "/team/sutani.png" },
  { name: "Farhan", role: "IoT Developer", imageUrl: "/team/farhan.png" },
  { name: "Alfan", role: "Front-End Programmer", imageUrl: "/team/alfan.jpg" },
];

function Team() {
  const managementTeam = teamMembers.filter((member) =>
    ["CEO", "COO", "CFO"].includes(member.role),
  );

  const productTeam = teamMembers.filter(
    (member) => !["CEO", "COO", "CFO"].includes(member.role),
  );

  return (
    <>
      <Helmet>
        <title>Products | Layanan Cerdas Indonesia</title>
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-72 bg-gradient-to-r from-[#009f9a] from-10% to-[#006666]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h1 className="text-5xl font-light text-white mb-4 poppins-semibold">
                Our Team
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="w-full max-w-6xl mx-auto px-4">
            {/* Management Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-center mb-12 poppins-semibold">
                MANAGEMENT
              </h2>
              <div className="flex justify-center gap-8 flex-wrap poppins-regular">
                {managementTeam.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-gray-600 uppercase text-sm">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Development Section */}
            <div>
              <h2 className="text-3xl font-semibold text-center mb-12 poppins-semibold">
                PRODUCT DEVELOPMENT
              </h2>
              <div className="flex justify-center gap-8 flex-wrap max-w-6xl mx-auto poppins-regular">
                {productTeam.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;

// export default function FeaturedServices() {
//   const services = [
//     {
//       id: 1,
//       title: "Tech Support",
//       description: "Get help with your devices from our community experts",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="48"
//           height="48"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//         </svg>
//       ),
//       gradient: "from-blue-400 to-indigo-500",
//       action: "Learn More",
//     },
//     {
//       id: 2,
//       title: "Exclusive Events",
//       description:
//         "Join virtual and in-person meetups with fellow tech enthusiasts",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="48"
//           height="48"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//           <circle cx="9" cy="7" r="4"></circle>
//           <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//           <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//         </svg>
//       ),
//       gradient: "from-purple-400 to-pink-500",
//       action: "View Events",
//     },
//     {
//       id: 3,
//       title: "Product Reviews",
//       description: "Read and write authentic reviews from real users",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="48"
//           height="48"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
//           <polyline points="14 2 14 8 20 8"></polyline>
//           <line x1="16" y1="13" x2="8" y2="13"></line>
//           <line x1="16" y1="17" x2="8" y2="17"></line>
//           <line x1="10" y1="9" x2="8" y2="9"></line>
//         </svg>
//       ),
//       gradient: "from-green-400 to-teal-500",
//       action: "Browse Reviews",
//     },
//     {
//       id: 4,
//       title: "Tech Tutorials",
//       description: "Learn how to get the most out of your devices",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="48"
//           height="48"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
//           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
//         </svg>
//       ),
//       gradient: "from-yellow-400 to-orange-500",
//       action: "Start Learning",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 mb-12">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Featured Community Services
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
//           >
//             <div
//               className={`h-40 bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
//             >
//               {service.icon}
//             </div>
//             <div className="p-5">
//               <h3 className="font-bold text-lg mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-4">{service.description}</p>
//               <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
//                 {service.action}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1"
//                 >
//                   <path d="m9 18 6-6-6-6"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function FeaturedServices() {
  const services = [
    {
      id: 1,
      title: "Tech Support",
      description: "Get help with your devices from our community experts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      gradient: "from-blue-400 to-blue-600",
      action: "Learn More",
      link: "/support",
    },
    {
      id: 2,
      title: "Exclusive Events",
      description:
        "Join virtual and in-person meetups with fellow tech enthusiasts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
      action: "View Events",
      link: "/events",
    },
    {
      id: 3,
      title: "Product Reviews",
      description: "Read and write authentic reviews from real users",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      gradient: "from-green-400 to-green-600",
      action: "Browse Reviews",
      link: "/reviews",
    },
    {
      id: 4,
      title: "Tech Tutorials",
      description: "Learn how to get the most out of your devices",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      gradient: "from-orange-400 to-orange-600",
      action: "Start Learning",
      link: "/tutorials",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Featured Community Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div
                className={`bg-gradient-to-r ${service.gradient} rounded-lg p-8 text-white text-center h-full flex flex-col transition-transform duration-300 group-hover:scale-105 shadow-md`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="mb-6 flex-grow">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors mt-auto mx-auto"
                >
                  {service.action}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

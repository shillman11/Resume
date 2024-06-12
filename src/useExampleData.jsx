import { v4 as uuidv4 } from "uuid";

const useExampleData = {
  personalInfo: {
    fullName: "John Smith",
    email: "john@example.com",
    phoneNumber: "145-123-1256",
    location: "San Diego, CA",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Engineering",
        school: "San Diego University",
        location: "San Diego, CA",
        startDate: "2015-06-05",
        endDate: "2017-06-20",
      },
      {
        degree: "Masters in Engineering",
        school: "MIT",
        location: "Boston, MA",
        startDate: "2017-06-05",
        endDate: "",
      },
    ],

    experiences: [
      {
        companyName: "Umbrella Corp",
        position: "Security Engineer",
        location: "New York City, US",
        description:
          "Designed and prototyped experimental security products to ensure full control of lockdown systems",
        startDate: "2023-06-21",
        endDate: "2025-06-02",
      },

      {
        companyName: "black technologies",
        position: "Guided Missle Engineer",
        location: "Washington D.C, US",
        description:
          "designed and tested guidance systems on missle defense technology",
        startDate: "2025-06-05",
        endDate: "",
      },
    ],
  },
};

export default useExampleData;

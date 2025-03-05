interface Job {
  id: number;
  title: {
    id: number | null;
    label: string;
  };
  postedDate: string;
  location: {
    id: number;
    label: string;
    address: {
      name: string;
      description: string | null;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string;
      zipcode: string;
      country: string;
      phoneNumber: string | null;
    };
  };
  department: {
    id: number;
    label: string;
  };
  status: {
    id: number;
    label: string;
  };
  newApplicantsCount: number;
  activeApplicantsCount: number;
  totalApplicantsCount: number;
  postingUrl: string;
}
export default Job
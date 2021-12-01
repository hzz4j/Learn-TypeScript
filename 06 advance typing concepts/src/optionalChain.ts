type UserData = {
  id: string;
  name: string;
  job?: {
    title: string;
    description: string;
  };
};

const fetchedUserData: UserData = {
  id: "u1",
  name: "静默",
  // job: { title: "Developer", description: "Keep learning" },
};

console.log(fetchedUserData?.job?.title);

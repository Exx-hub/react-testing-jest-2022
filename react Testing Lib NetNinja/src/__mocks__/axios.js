const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Alvin",
          last: "Acosta",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/55.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};

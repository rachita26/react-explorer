const mockData = [
  {
    name: "public",
    isFolder: true,
    items: [
      {
        name: "index.html",
        isFolder: false
      }
    ]
  },
  {
    name: "src",
    isFolder: true,
    items: [
      {
        name: "components",
        isFolder: true,
        items: [
          {
            name: "Folder.js",
            isFolder: false
          }
        ]
      },
      {
        name: "data",
        isFolder: true,
        items: [
          {
            name: "mock.js",
            isFolder: false
          }
        ]
      },
      {
        name: "App.js",
        isFolder: false
      },
      {
        name: "index.js",
        isFolder: false
      },
      {
        name: "styles.css",
        isFolder: false
      }
    ]
  },
  {
    name: "package.json",
    isFolder: false
  }
];
export default mockData;

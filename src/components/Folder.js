import { useState } from "react";

const Folder = ({ mockData }) => {
  const [showItems, setShowItems] = useState(false);
  return mockData.map((data) => (
    <>
      <span onClick={() => setShowItems(!showItems)}>{data.name}</span>
      <br />
      <div style={{ paddingLeft: "15px" }}>
        {data.isFolder &&
          showItems &&
          data.items.map((item) => <Folder mockData={[item]} />)}
      </div>
    </>
  ));
};

export default Folder;

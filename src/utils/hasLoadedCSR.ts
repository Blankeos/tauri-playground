import { useState, useEffect } from "react";

const hasLoadedCSR = () => {
  const [hasLoadedCSR, setHasLoadedCSR] = useState<boolean>(false);

  useEffect(() => {
    setHasLoadedCSR(true);
  }, []);

  return hasLoadedCSR;
};

export default hasLoadedCSR;

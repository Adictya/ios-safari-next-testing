import Agora from "@appbuilder/react";
import { useEffect } from "react";

const AgoraWrapper = () => {
  useEffect(() => {
    Agora.customize({
      config: {
        BACKEND_ENDPOINT: process.env.NEXT_PUBLIC_AGORA_BACKEND,
      },
    });
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex" }}>
      <Agora.View />
    </div>
  );
};

export default AgoraWrapper;

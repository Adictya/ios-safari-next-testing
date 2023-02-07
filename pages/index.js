// import AgoraWrapper from '../components/agoraWrapper'

import dynamic from "next/dynamic";
const AgoraWrapper = dynamic(() => import("../components/agoraWrapper"), {
  ssr: false,
});

export default function Home() {
  return <AgoraWrapper />;
}

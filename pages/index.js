// import AgoraWrapper from '../components/agoraWrapper'

import dynamic from "next/dynamic";
import Link from "next/link";
const AgoraWrapper = dynamic(() => import("../components/agoraWrapper"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Link href="/test">Go</Link>
      <AgoraWrapper />
    </div>
  );
}

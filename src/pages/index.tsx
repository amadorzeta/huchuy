import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Converter from "../components/Converter";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Huchuy</title>
      </Head>

      <Converter />
    </>
  );
};

export default Home;

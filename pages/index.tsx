import { GetServerSideProps } from "next";

export default function Home() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // redirect to login page

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

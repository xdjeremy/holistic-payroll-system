import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import AllEmployeesPage from "@/components/admin/all-employees/all-employees.page";
import { initPocketBase } from "@/utils";
import { UsersPrivilegeOptions, UsersResponse } from "@/types";

const AllEmployees: NextPage = () => {
  return (
    <Layout title={"All Employees"}>
      <AllEmployeesPage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = await initPocketBase(ctx);
  // if user is not logged in, redirect to login page
  if (!pb.authStore.model || !pb.authStore.isValid) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const user = await pb
    .collection("users")
    .getOne<UsersResponse>(pb.authStore.model?.id);

  // if user is not admin, 404
  if (user.privilege !== UsersPrivilegeOptions.admin) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: JSON.stringify(user),
    },
  };
};

export default AllEmployees;

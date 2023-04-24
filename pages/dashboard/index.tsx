import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import {Button, PageTitle} from "@/components/common";
import {PlusIcon} from "@heroicons/react/20/solid";

const Dashboard: NextPage = () => {
  return (
    <Layout title={"Dashboard"}>
      <PageTitle title={"Dashboard"}>
          <Button color={'black'}>
              <PlusIcon className={'h-5 w-5 mr-2'}/>
              <span>
                  Punch In
              </span>
          </Button>
      </PageTitle>
    </Layout>
  );
};

export default Dashboard;

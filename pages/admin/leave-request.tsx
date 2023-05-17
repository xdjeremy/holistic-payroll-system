import React from 'react';
import {Layout} from "@/components/layout";
import LeaveRequestPage from "@/components/admin/leave-request/leave.request.page";

const LeaveRequest = () => {
    return (
        <Layout title={"Leave Request"}>
            <LeaveRequestPage/>
        </Layout>
    );
};

export default LeaveRequest;
import React, {FC} from 'react';
import TableLeaveItems from "@/components/admin/leave-request/table-leave-items";

const TableLeave: FC = () => {
    return (
        <table className={"w-full table-fixed"}>
            <thead>
            <tr>
                <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
                    Profile
                </th>
                <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
                    Date & Time
                </th>
                <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
                    Duration
                </th>
                <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
                    Type
                </th>
                <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
                    Attachment
                </th>
                <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
                    Status
                </th>
                <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
                    Action
                </th>
            </tr>
            </thead>
            <tbody>
            <TableLeaveItems profile={"Jeremy Neigh"} time={"9/23/16"} duration={"15h 40m"} type={"Design"} attachment={"DebitNoteMckee.jpg"} stat={"Busy"} action={""}/>
            <TableLeaveItems profile={"Annette Black"} time={"7/27/13"} duration={"11h 45m"} type={"Product"} attachment={"debitnote_0310.xlsx"} stat={"Busy"} action={""}/>
            <TableLeaveItems profile={"Theresa Webb"} time={"11/7/16"} duration={"10h 25m"} type={"Marketing"} attachment={"McKeeDebit01.pdf"} stat={"Ready"} action={""}/>
            <TableLeaveItems profile={"Kathryn Murphy"} time={"6/19/14"} duration={"16h 55m"} type={"Support"} attachment={"dealsheet2020.pdf"} stat={"Busy"} action={""}/>
            <TableLeaveItems profile={"Courtney Henry"} time={"7/11/19"} duration={"15h 45m"} type={"Operations"} attachment={"debitnote_march.pdf"} stat={"Ready"} action={""}/>
            <TableLeaveItems profile={"Jane Cooper"} time={"8/2/19"} duration={"10h 45m"} type={"HR"} attachment={"dealsheet_march.xlsx"} stat={"Busy"} action={""}/>

            </tbody>
        </table>
    );
};

export default TableLeave;
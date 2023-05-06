import React, {FC} from "react";

interface Props {
    name: string
    id: string
    status: string
    dept: string
    shift: string
    date: string
    role: string
}
const EmployeesTableItems: FC<Props> = ({name, id, status, dept, shift, date, role}) => {
    const renderTab = () => {
        switch (status) {
            case "Part-time":
                return "h-10 w-fit rounded-full bg-[#F0B732] px-4 py-2 text-center font-medium"
            case "On-contract":
                return "h-10 w-fit rounded-full bg-[#146ADC] px-4 py-2 text-white text-center font-medium"
            case "Full-time":
                return "h-10 w-fit rounded-full bg-[#0A7E22] px-4 py-2 text-white text-center font-medium"
            case "Seasonal":
                return "h-10 w-fit rounded-full bg-[#F5F5F5] px-4 py-2 text-black text-center font-medium"
        }
    }
    return (
      <tr>
        <td className={"flex flex-row items-center gap-2 p-3"}>
          <div className={"h-9 w-9 rounded-full bg-black"}></div>
          <div className={"text-sm font-normal text-black"}>{name}</div>
        </td>
        <td className={"gap-2 p-3"}>{id}</td>
        <td className={"gap-2 p-3"}>
          <div className={renderTab()}>{status}</div>
        </td>
        <td className={"gap-2 p-3"}>{dept}</td>
        <td className={"gap-2 p-3"}>{shift}</td>
        <td className={"gap-2 p-3"}>{date}</td>
        <td className={"gap-2 p-3"}>{role}</td>
      </tr>
    );
};

export default EmployeesTableItems;

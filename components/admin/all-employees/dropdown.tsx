import React, { FC, useContext } from "react";
import { EmployeeContext } from "@/components/admin/all-employees/all-employees.page";

const Dropdown: FC = () => {
  const { setPerPage } = useContext(EmployeeContext);

  const handleChange = (e: any) => {
    setPerPage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className={"h-8 w-14 rounded-lg border border-[#E0E0E0] bg-white"}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10" selected={true}>
        10
      </option>
    </select>
  );
};

export default Dropdown;

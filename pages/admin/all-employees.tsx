import {NextPage} from "next";
import {Layout} from "@/components/layout";
import AllEmployeesPage from "@/components/admin/all-employees/all-employees.page";

const AllEmployees:NextPage = () => {
    return (
        <Layout title={"All Employees"}>
            <AllEmployeesPage/>
        </Layout>
    )
}
export default AllEmployees
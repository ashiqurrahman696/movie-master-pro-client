import useRole from "../../hooks/useRole";
import AdminDashboardHome from "./AdminDashboardHome";
import UserDashboardHome from "./UserDashboardHome";

const DashboardHome = () => {
    const [role] = useRole();
    if(role === "admin"){
        return <AdminDashboardHome/>
    }
    else{
        return <UserDashboardHome/>
    }
};

export default DashboardHome;
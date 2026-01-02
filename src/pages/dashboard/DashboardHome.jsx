import useRole from "../../hooks/useRole";

const DashboardHome = () => {
    const [role] = useRole();
    console.log(role);
    return (
        <div>
            
        </div>
    );
};

export default DashboardHome;
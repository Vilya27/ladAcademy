import Profile from "@/components/Profile/Profile";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Profile />
      <div
        style={{
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </>
  );
};
export default Layout;

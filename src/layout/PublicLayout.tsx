import Profile from "@/components/Profile/Profile";

type PublicLayoutProps = {
  children: React.ReactNode;
};
const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <header>
        <Profile />
      </header>
      <main>
        <div
          style={{
            textAlign: "center",
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
};
export default PublicLayout;

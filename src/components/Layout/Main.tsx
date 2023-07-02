import NavigationHeader from "./Header";
import SideBar from "./SideBar";

export default function Main(props: any) {
  const getMain = () => {
    return (
      <>
        <NavigationHeader />
        <SideBar>{props.children}</SideBar>
      </>
    );
  };

  return <>{getMain()}</>;
}

/* eslint-disable react-hooks/exhaustive-deps */
// import { ColorSchemeToggle } from "../Common/ColorSchemeToggle";
import { Header, Image, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";
import VariantToggle from "../global/Common/VariantToggle";
import { ColorSchemeToggle } from "../global/Common/ColorSchemeToggle";
// import VariantToggle from "../Common/VariantToggle";

const HEADER_HEIGHT = 90;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#22272B",
  },

  header: {
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    borderBottom: "0px",
  },
}));

export default function NavigationHeader() {
  const { classes } = useStyles();

  return (
    <div className="fixed top-0 z-[100] w-full">
      <Header height={HEADER_HEIGHT} className={`${classes.root} !border-b-0`}>
        <div className="flex justify-between items-center h-full mx-5 lg:mx-10">
          <div className="">
            <Link to="/">
              <Image
                alt="logo"
                height={25}
                src="/variantB/assets/images/logoTransport.jpeg"
              />
            </Link>
          </div>
          <div className="flex justify-start items-center mb-6 mr-4">
            <ColorSchemeToggle />
          </div>
        </div>
      </Header>
    </div>
  );
}

import React, { Suspense, useState } from "react";
import "./container.scss";
import Header from "../header";
import Sidebar from "../sidebar";
import { GlobalLoader } from "../loader";
import { Box, Drawer } from "@mui/material";
import PropTypes from "prop-types";

function Container({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Suspense fallback={<GlobalLoader />}>
      <Box sx={{ display: "flex" }}>
        <div className={`main_container ${!open ? "collapse" : "collapsed"}`}>
          <Header open={open} setOpen={setOpen} clname="af_login_header" />
          <Box>
            <Drawer variant="permanent" open={!open} className="menuBar">
              <Sidebar />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1 }}>
              <div className="rightContainer">{children}</div>
            </Box>
          </Box>
        </div>
      </Box>
    </Suspense>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default React.memo(Container);

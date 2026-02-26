import React from "react";
import {Copyright, Earth, Rss, Mail} from "lucide-react";

const MainFooter = () => {
  return (
    <section className="border-t border-gray-600 py-4">

      <div className="flex items-center justify-center text-gray-500 gap-4">
        <Earth width={"14px"} />
        <Rss width={"14px"} />
        <Mail width={"14px"} />
      </div>
      <div className="flex items-center gap-1 justify-center">
        <Copyright className="text-gray-500" width={"14px"}/>
        <p className="text-gray-500 text-xs">
          2026 Sangrah Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default MainFooter;

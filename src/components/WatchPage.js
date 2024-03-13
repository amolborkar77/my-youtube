import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CommentsContainer } from "./Comment";
import { LiveChat } from "./LiveChat";
import { Video } from "./Video";
import { closeMenu } from "../utils/appSlice";
import Card from "../Cards/Card";

const MENU = [
  {
    menu_name: "computer",
    subMenu: [
      {
        menu_name: "computer1",
        subMenu: [
          {
            menu_name: "computer2",
          },
        ],
      },
    ],
  },
  {
    menu_name: "my lab",
  },
  {
    menu_name: "my board",
  },
  {
    menu_name: "my notes",
    subMenu: [
      {
        menu_name: "computer2",
      },
      {
        menu_name: "computer88",
      },
      {
        menu_name: "computer88",
        subMenu: [
          {
            menu_name: "computer2",
          },
        ],
      },
    ],
  },
];

function addIsOpenProperty(menu) {
  if (Array.isArray(menu)) {
    return menu.map((menuItem) => addIsOpenProperty(menuItem));
  }
  return {
    ...menu,
    isOpen: false,
    ...(menu.subMenu && { subMenu: addIsOpenProperty(menu.subMenu) }),
  };
}

export const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <Video />

        <LiveChat />
      </div>

      <CommentsContainer />

      <div className="flex flex-row">
        <Card menu={addIsOpenProperty(MENU)} />
      </div>
    </div>
  );
};

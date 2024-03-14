import React, { useState } from "react";

import Logo from "../../assets/Images/Logo/logo.png";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import DetailModal from "../DetailModal/DetailModal";
import { Alert } from "@mui/material";
import { CharacterCard } from "../CharacterList/CharacterList";

const Header = ({ characters, query, setQuery, favorites , RemoveFavoriteHandler}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="bg-gray-800 border border-gray-600 flex-between rounded-xl my-6 p-2">
          <img src={Logo} alt="ghorbani-dev.ir" className="w-12 md:w-25 rounded-lg" />
          <div className="flex flex-col items-center gap-2">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="rounded-full h-10 dark:focus:text-white outline-none text-white dark:text-gray-600 placeholder:text-slate-500 dark:placeholder-gray-600 w-40 md:w-48 focus:w-44 md:focus:w-64 border border-transparent hover:border-gray-200 dark:border-gray-700 dark:focus:border-gray-600 bg-gray-700 text-base placeholder:text-lg block transition-all"
              placeholder="search..."
            />
            <span className="font-DanaBold">
              Found{" "}
              <span className="text-emerald-500 font-sans">
                {characters.length}
              </span>{" "}
              Characters
            </span>
          </div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex-centre relative"
          >
            <FavoriteBorderOutlined className="text-rose-500 md:size-9" />
            <span className="bg-rose-500 font-sans text-white size-4 text-xs md:text-base md:size-6 md:pt-2 flex-center rounded-full absolute -top-2 -right-1">
              {favorites.length}
            </span>
          </button>
        </div>
      </div>
      <DetailModal title="Your Favorite List" open={isOpen} setOpen={setIsOpen}>
        {favorites.length ? (
          favorites.map((favorite) => {
            return (
              <React.Fragment key={favorite.id}>
                <CharacterCard characterInfos={favorite}>
                  <button onClick={() => RemoveFavoriteHandler(favorite.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 text-rose-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </CharacterCard>
              </React.Fragment>
            );
          })
        ) : (
          <Alert variant="outlined" severity="info" className="text-white">
            You didn't select item ...
          </Alert>
        )}
      </DetailModal>
    </header>
  );
};

export default Header;

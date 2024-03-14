import React, { useEffect, useState } from "react";

import {
  GppMaybe,
  Man2Outlined,
  PrivacyTipOutlined,
  WomanOutlined,
} from "@mui/icons-material";

const CharacterList = ({ selectedID, SelectedIDHandler, characters }) => {
  return (
    <div className="grid gap-2 mb-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 lg:grid-cols-2">
      {characters.map((character) => {
        return (
          <React.Fragment key={character.id}>
            <CharacterCard characterInfos={character}>
              <button
                onClick={() => SelectedIDHandler(character.id)}
                className="text-violet-500 size-4"
              >
                {selectedID === character.id ? (
                  <GppMaybe />
                ) : (
                  <PrivacyTipOutlined />
                )}
              </button>
            </CharacterCard>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CharacterList;

export function CharacterCard({ characterInfos, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center bg-gray-800 border border-gray-600 rounded-lg my-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full flex-between gap-2">
        <img
          className="rounded-full size-10"
          src={characterInfos.image}
          alt={characterInfos.name}
        />
        <div className="flex flex-1 flex-col space-y-4 font-medium dark:text-white text-left">
          <div className="flex gap-1 text-orange-500 font-bold">
            <p className="flex-centre bg-gray-200 rounded-full text-sky-500 size-6 child:size-6">
              {characterInfos.gender === "Male" ? (
                <Man2Outlined />
              ) : (
                <WomanOutlined />
              )}
            </p>
            <p className="text-base">{characterInfos.name}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 ">
            <p>
              {characterInfos.status === "Alive" ? (
                <span className="block size-2 bg-emerald-500 rounded-full"></span>
              ) : characterInfos.status === "unknown" ? (
                <span className="block size-2 bg-white rounded-full"></span>
              ) : (
                <span className="block size-2 bg-rose-500 rounded-full"></span>
              )}
            </p>
            <p className="pt-1.5">
              
              {characterInfos.status} - {characterInfos.species}
            </p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

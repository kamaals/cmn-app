"use client";
import React from "react";
import { CategoryWithGames, GameType } from "@/lib/types";
import axios from "axios";

export type GameContextType = {
  games: Array<GameType>;
  categories: Array<CategoryWithGames>;
  selectedCategory: CategoryWithGames | null;
  setSelectedCategory: (cat: CategoryWithGames) => void;
  searchByName: (text: string) => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

export const GameContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [originalGames, setGamesList] = React.useState<Array<GameType>>([]);
  const [games, setGames] = React.useState<Array<GameType>>([]);

  const [categories, setCategories] = React.useState<Array<CategoryWithGames>>(
    [],
  );

  const [category, setCategory] = React.useState<CategoryWithGames | null>(
    null,
  );

  React.useEffect(() => {
    const initGameFetch = async () => {
      const { data } = await axios.get("/api/games");
      const resp = await axios.get("/api/category");
      if (Array.isArray(resp.data) && Array.isArray(data)) {
        const _categories = (resp.data || []).map((c) => {
          const games = (data || []).filter((f) =>
            f.categoryIds.includes(c.id),
          );
          return { ...c, games };
        });
        setGamesList(data);
        setGames(data);
        setCategories(_categories);
        setCategory(_categories[0]);
      }
    };

    initGameFetch().catch(console.log);
  }, []);

  const setSelectedCategory = React.useCallback(
    (category: CategoryWithGames) => {
      setCategory(category);
      setGames(category.games);
    },
    [],
  );

  const searchByName = React.useCallback(
    (text: string) => {
      if (text && text.length > 0) {
        const _games = games.filter((g) =>
          g.name.toLowerCase().includes(text.toLowerCase()),
        );
        setGames(_games);
      } else {
        const _games = originalGames.filter((g) =>
          g.categoryIds.includes(category?.id as number),
        );
        setGames(_games);
      }
    },
    [games, originalGames, category],
  );

  return (
    <GameContext.Provider
      value={{
        games: games,
        categories: categories,
        selectedCategory: category,
        setSelectedCategory,
        searchByName,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

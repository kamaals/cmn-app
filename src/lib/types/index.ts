import { z } from "zod";
import { loginSchema } from "@/lib/schema";

export type GameType = {
  name: string;
  description: string;
  code: string;
  icon: string;
  categoryIds: number[];
};

export type CategoryType = {
  id: number;
  name: string;
};

export type PlayerUsernameType = "rebecka" | "eric" | "stoffe";

export type PlayerType = {
  name: string;
  avatar: string;
  event: string;
  password: string;
};

export type PlayerLookupType = Record<PlayerUsernameType, PlayerType>;

export type LoginType = z.infer<typeof loginSchema>;

export type UserType = PlayerType & { username: PlayerUsernameType };

import { List } from "./list";

    export type ArrayOf<T> = T extends (infer p)[] ? p : never;
    export type ListOf<T> = T extends List<infer p> ? p : never;


export declare type ListPredict<T> = T | ((item?: any, index?: number, list?: List<T>) => boolean);
export declare class List<T> {
    private $;
    constructor(...args: T[]);
    push(item: T): number;
    get length(): number;
    splice(start: number, deleteCount: number, ...items: T[]): this;
    join(separator?: string, predict?: (item: T, i: number, list: List<T>) => string): string;
    reverse(): this;
    sort(compareFn?: (a: T, b: T) => number): this;
    eq(pos: number): T;
    predicateMatch(item: any, index: number, list: List<T>, predicate: ListPredict<T>): boolean;
    last(): T;
    first(): T;
    toArray<U>(predicate: (item?: T, index?: number, list?: List<T>) => U): List<U>;
    append(a: List<T> | T[] | T, pos?: number): List<T>;
    insertAt(pos: number, a: List<T> | T[] | T): List<T>;
    replaceAt(pos: number, a: T): List<T>;
    appendArray(a: List<any> | any[], pos?: number): List<T>;
    insertArrayAt(pos: number, a: List<any> | any[]): List<T>;
    removeAt(pos: number): List<T>;
    remove(predicate: T | ((item?: any, index?: number, list?: List<T>) => boolean)): List<T>;
    removeAll(predicate: T | ((item?: any, index?: number, list?: List<T>) => boolean)): List<T>;
    removeBefore(predicate: T | ((item?: any, index?: number, list?: List<T>) => boolean), isIncludeFind?: boolean): List<T>;
    removeAfter(predicate: T | ((item?: any, index?: number, list?: List<T>) => boolean), isIncludeFind?: boolean): List<T>;
    exists(predicate: T | ((item?: T, index?: number, list?: List<T>) => boolean)): boolean;
    trueForAll(predicate: T | ((item?: any, index?: number, list?: List<T>) => boolean)): boolean;
    findLast(predicate: T | ((item?: T, index?: number, list?: List<T>) => boolean)): T | null;
    findBefore(indexPredict: ListPredict<T>, predict: ListPredict<T>, isIncludeSelf?: boolean): T;
    findAfter(indexPredict: ListPredict<T>, predict: ListPredict<T>, isIncludeSelf?: boolean): T;
    findSkip(predicate: T | ((item?: T, index?: number, list?: List<T>) => boolean), skip?: number): T;
    findRange(predicate: T | ((item?: T, index?: number, list?: List<T>) => boolean), predicate2: T | ((item?: T, index?: number, list?: List<T>) => boolean)): List<T>;
    findAll(predicate: T | ((item?: T, index?: number, list?: List<T>) => boolean)): List<T>;
    findAt(predicate: T | ((item?: T, index?: number, list?: List<T>) => boolean), defaultIndex?: number): number;
    findLastIndex(predicate: T | ((item?: T, index?: number, list?: List<T>) => boolean), defaultIndex?: number): number;
    forEach(predicate: T | ((item?: T, index?: number, list?: List<T>) => any)): void;
    each(predicate: T | ((item?: T, index?: number, list?: List<T>) => any)): void;
    reach(predicate: T | ((item?: T, index?: number, list?: List<T>) => any)): void;
    recursion(predicate: (item?: T, index?: number, next?: ((index?: number) => void)) => void): void;
    eachReverse(predicate: T | ((item?: T, index?: number, list?: List<T>) => any)): void;
    limit(index: number, size: number): List<T>;
    range(start: number, end?: number): List<T>;
    split(predicate: T | ((item?: T, index?: number, list?: List<T>) => any)): List<List<T>>;
    matchIndex(regex: string | RegExp, map: (item?: T, index?: number, list?: List<T>) => string, startIndex?: number): number;
    subtract(arr: List<T>): List<T>;
    sum(predicate?: T | ((item?: T, index?: number, list?: List<T>) => number)): number;
    match(regex: string | RegExp, map: (item?: any, index?: number, list?: List<T>) => string, startIndex?: number): List<T>;
    copy(): List<T>;
    asArray(): T[];
    treeEach(treeChildName: string, fn: (item: T, deep?: number, index?: number, sort?: number, parent?: T, arr?: List<T>) => (void | {
        break?: boolean;
        continue?: boolean;
        returns?: any;
    }), parent?: T, defaultDeep?: number, defaultIndex?: number): {
        total: number;
        deep: number;
    };
    findIndex(predicate: any, defaultIndex?: number): number;
    find(predicate: any): T;
    map<U>(predicate: (item: T, i: number, list: List<T>) => U): List<U>;
    static isList(t: any): boolean;
    static asList<V>(t: V | V[] | List<V>): List<V>;
    static treeEach<T>(list: List<T>, treeChildName: string, fn: (item: T, deep?: number, index?: number, sort?: number, parent?: any, arr?: List<T>) => (void | {
        break?: boolean;
        continue?: boolean;
        returns?: any;
    }), parent?: any, defaultDeep?: any, defaultIndex?: any): {
        total: any;
        deep: any;
    };
}
export declare var _: {
    remove<T>(list: T[], predict: T | ((t: T, index?: number, thisArray?: T[]) => boolean)): void;
    remoteAt<T_1>(list: T_1[], at?: number): void;
    removeAll<T_2>(list: T_2[], predict: T_2 | ((t: T_2, index?: number, thisArray?: T_2[]) => boolean)): void;
    each<T_3>(list: T_3[], predict: (t: T_3, index?: number, thisArray?: T_3[]) => boolean): void;
    addRange<T_4>(list: T_4[], newArray: T_4[]): void;
    find<T_5>(list: T_5[], predict: (t: T_5, index?: number, thisArray?: T_5[]) => boolean): T_5;
    findIndex<T_6>(list: T_6[], predict: T_6 | ((t: T_6, index?: number, thisArray?: T_6[]) => boolean)): number;
    exists<T_7>(list: T_7[], predict: T_7 | ((t: T_7, index?: number, thisArray?: T_7[]) => boolean)): boolean;
    treeEach<T_8>(list: T_8[], treeChildName: string, fn: (item: T_8, deep?: number, index?: number, sort?: number, parent?: any, arr?: any[]) => (void | {
        break?: boolean;
        continue?: boolean;
        returns?: any;
    }), parent?: any, defaultDeep?: any, defaultIndex?: any): {
        total: any;
        deep: any;
    };
    treeFind<T_9>(list: T_9[], treeChildName: string, predict: (t: T_9) => boolean): T_9;
    treeFindAll<T_10>(list: T_10[], treeChildName: string, predict: (t: T_10) => boolean): T_10[];
};

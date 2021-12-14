import { FC } from 'react';
export interface StorageBoard {
    storage?: {
        getAllKeys: () => Promise<string[]>;
        getItem: (key: string) => Promise<string> | null;
        setItem?: (key: string, value: string) => Promise<void>;
        removeItem?: (key: string) => Promise<void>;
        clear?: () => Promise<void>;
    };
}
export declare const StorageBoard: FC<StorageBoard>;

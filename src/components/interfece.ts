

// type Props = {
//     label: string
//     important: boolean;
//     id?: string;
//     onDelete?: any;

import { ChangeEvent } from "react";

// }


// interface TodoListItemProps {
//     posts: Props[];
// }

// export default Props

export interface TodoInterface {
    id?: number;
    label?: string;
    important?: boolean;
    onDelete?: (id: number) => void
    deleteItem?: (id: number | undefined) => void
    addItem?: (id: number | undefined) => void
    onAdd?: (body: string) => void
    onToggleImportant?: (id: number | undefined) => void
    onToggleLiked?: (id: number | undefined) => void
    maxId?: number | undefined
    liked?: number
    allPosts?: number
    onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onUpdateSearch?: ((event: ChangeEvent<HTMLInputElement>) => void);
    filter?: string
    onFilterSelect?: (name: string) => void
}

export interface TodoListIterface {
    posts: TodoInterface[];
    onDelete: (id: number | undefined) => void
    onToggleImportant: (id: number | undefined) => void
    onToggleLiked: (id: number | undefined) => void

}

export interface TodoListIterfaceItem {
    label?: string;
    onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void
    onToggleImportant: (event: React.MouseEvent<HTMLButtonElement>) => void
    onToggleLiked: (event: React.MouseEvent<HTMLButtonElement>) => void
    important?: boolean
    like?: string
}

export interface TodoListIterfaceAddForm {
    props?: TodoInterface[];
    onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onAdd: (body: string) => void

}

export interface SerchPanelInterface {
    props?: TodoInterface[];
    onUpdateSearch: ((event: ChangeEvent<HTMLInputElement>) => void);
}

export interface PostStatusFilterInterface {
    props?: TodoInterface[];
    filter: string
    onFilterSelect: (name: string) => void
}
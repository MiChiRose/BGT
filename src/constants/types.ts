export type getDataProps = {
    mainPath: string;
    documentPath: string;
}

export type HomeScreenProps = {
    navigation: any
}

export type HomeScreenItemProps = {
    image: string;
    text: string;
    last: boolean;
};

export type HomeScreenDropdownInfoProps = {
    data: IData[];
};

export type ScrollViewProps = {
    children: JSX.Element | JSX.Element[];
    refresh?: () => void;
    refreshing?: boolean
}

export type ContactsMenuItemProps = {
    data: Array<any>;
    image: any;
}

export type ContactsData = {
    header: string;
    title: string;
    phone?: string
    fax?: string;
    headOfDept?: string;
    email?: string;
}

export type CatalogScreenProps = {
    navigation: any;
}

export type ICatalog = {
    id: string;
    image: string;
    title: string;
    data: any[];
}

export type IData = {
    id: string;
    image: string;
    link: string;
    title: string
}

export type ListItemProps = {
    image: any,
    title: string,
    onPress?: () => void,
    disabled?: boolean;
    showDetailsButton?: boolean
    pressDetailsButton?: () => void;
}

export type RegionProps = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}
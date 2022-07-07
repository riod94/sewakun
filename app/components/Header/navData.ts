import {
    GITHUB_LINK,
} from '../../contants';

export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

export interface Category {
    name: string;
    subLabel: string;
    id: string;
    children?: SubCategory[];
}

export interface SubCategory {
    name: string;
    id: string;
    description?: string;
    children?: Template[];
}

export interface Template {
    name: string;
    filename: string;
    tags?: string[];
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Layanan',
        href: '#products'
    },
    {
        label: 'Cara Pesan',
        href: '#howToOrder',
    },
    {
        label: 'FAQ',
        href: '#faq',
    },
    {
        label: 'Contact Us',
        href: '#contactUs',
    },
];
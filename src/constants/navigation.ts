export interface NavigationItem {
    href: string;
    label: string;
}

export const navigationItems: NavigationItem[] = [
    { href: "#home", label: "Главная" },
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "Обо мне" },
];

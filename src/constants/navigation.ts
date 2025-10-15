export interface NavigationItem {
    href: string;
    label: string;
}

export const navigationItems: NavigationItem[] = [
    { href: "#home", label: "Главная" },
    { href: "#about", label: "Обо мне" },
    { href: "#portfolio", label: "Достижения" },
    { href: "#contact", label: "Контакты" },
];

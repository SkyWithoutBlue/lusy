const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ADMIN_EMAILS = [
    "nikitachebotov@gmail.com",
    "ludmilachipizubova@mail.ru",
];

async function setAdmins() {
    console.log("🔧 Назначение роли администратора...");
    console.log("");

    for (const email of ADMIN_EMAILS) {
        try {
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                console.log(
                    `⚠️  Пользователь ${email} не найден. Сначала зарегистрируйтесь на сайте!`
                );
                continue;
            }

            if (user.role === "admin") {
                console.log(`✓ ${email} уже является администратором`);
                continue;
            }

            await prisma.user.update({
                where: { email },
                data: { role: "admin" },
            });

            console.log(`✓ ${email} назначен администратором`);
        } catch (error) {
            console.error(`✗ Ошибка при обработке ${email}:`, error);
        }
    }

    console.log("");
    console.log("✅ Готово!");
    await prisma.$disconnect();
}

setAdmins().catch((error) => {
    console.error("Ошибка:", error);
    process.exit(1);
});

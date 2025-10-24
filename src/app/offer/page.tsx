import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export const metadata = {
    title: "Договор оферты | Lyudmila Chipizubova",
    description:
        "Публичная оферта на оказание информационно-консультационных услуг в сфере фитнеса и здорового образа жизни",
};

export default function OfferPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-24! pb-16! bg-white">
                <div className="max-w-4xl! mx-auto! px-6! sm:px-8!">
                    {/* Заголовок */}
                    <div className="mb-12!">
                        <Link
                            href="/"
                            className="inline-flex items-center text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors mb-6!"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Вернуться на главную
                        </Link>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4!">
                            Договор публичной оферты
                        </h1>
                        <p className="text-[#6B6B6B] text-lg">
                            Оказание информационно-консультационных услуг в сфере
                            фитнеса и здорового образа жизни
                        </p>
                        <div className="w-full h-1 bg-linear-to-r from-[#2C2C2C] to-gray-400 rounded-full mt-6!"></div>
                    </div>

                    {/* Содержание */}
                    <div className="prose prose-lg max-w-none">
                        {/* Преамбула */}
                        <section className="mb-10!">
                            <p className="text-[#6B6B6B] leading-relaxed mb-4!">
                                Настоящий документ является официальным
                                предложением (публичной офертой) Чипизубова
                                Людмила Васильевна (далее — «Исполнитель») в адрес
                                физических лиц (далее — «Заказчик») заключить
                                договор на оказание информационно-консультационных
                                услуг в сфере фитнеса и здорового образа жизни
                                (далее — «Договор») на условиях, изложенных ниже.
                            </p>
                            <p className="text-[#6B6B6B] leading-relaxed mb-4!">
                                В соответствии с пунктом 2 статьи 437
                                Гражданского кодекса Российской Федерации (ГК РФ)
                                в случае принятия изложенных ниже условий и
                                оплаты услуг юридическое или физическое лицо,
                                производящее акцепт этой оферты, становится
                                Заказчиком (в соответствии с п. 3 ст. 438 ГК РФ
                                акцепт оферты равносилен заключению Договора на
                                условиях, изложенных в оферте).
                            </p>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                <strong className="text-[#2C2C2C]">
                                    Моментом полного и безоговорочного принятия
                                    Заказчиком предложения Исполнителя заключить
                                    Договор оферты (акцептом оферты) считается
                                    факт оплаты Заказчиком услуг Исполнителя.
                                </strong>
                            </p>
                        </section>

                        {/* 1. Термины и определения */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                1. Термины и определения
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        1.1. Оферта
                                    </strong>{" "}
                                    — публичное предложение Исполнителя,
                                    адресованное неопределенному кругу лиц,
                                    заключить договор на оказание
                                    информационно-консультационных услуг на
                                    условиях, содержащихся в настоящем договоре
                                    оферты.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        1.2. Заказчик
                                    </strong>{" "}
                                    — физическое лицо, заключившее с Исполнителем
                                    Договор на условиях, содержащихся в настоящем
                                    Договоре.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        1.3. Акцепт
                                    </strong>{" "}
                                    — полное и безоговорочное принятие Заказчиком
                                    условий настоящего Договора.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        1.4. Услуги
                                    </strong>{" "}
                                    — информационно-консультационные услуги в
                                    сфере фитнеса и здорового образа жизни,
                                    оказываемые Исполнителем по заявке Заказчика,
                                    включая но не ограничиваясь: персональные
                                    тренировки, групповые тренировки, онлайн
                                    марафоны, составление программ тренировок и
                                    питания, консультации.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        1.5. Сайт
                                    </strong>{" "}
                                    — интернет-сайт, расположенный в сети Интернет
                                    по адресу:{" "}
                                    <a
                                        href="https://chipizubova.online/"
                                        className="text-[#2C2C2C] underline hover:text-[#1A1A1A]"
                                    >
                                        https://chipizubova.online/
                                    </a>
                                    .
                                </p>
                            </div>
                        </section>

                        {/* 2. Предмет договора */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                2. Предмет договора
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        2.1.
                                    </strong>{" "}
                                    Исполнитель обязуется оказать Заказчику
                                    информационно-консультационные услуги в сфере
                                    фитнеса и здорового образа жизни в объеме и
                                    порядке, предусмотренном настоящим Договором,
                                    а Заказчик обязуется принять и оплатить эти
                                    услуги.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        2.2.
                                    </strong>{" "}
                                    Перечень, стоимость и сроки оказания услуг
                                    определяются на Сайте и/или в переписке с
                                    Исполнителем.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        2.3.
                                    </strong>{" "}
                                    Исполнитель оказывает услуги в соответствии с
                                    выбранным Заказчиком тарифом и форматом
                                    обучения (персональные тренировки, групповые
                                    тренировки, онлайн-марафоны и т.д.).
                                </p>
                            </div>
                        </section>

                        {/* 3. Стоимость услуг и порядок оплаты */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                3. Стоимость услуг и порядок оплаты
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        3.1.
                                    </strong>{" "}
                                    Стоимость услуг Исполнителя определяется в
                                    соответствии с действующими на момент оплаты
                                    ценами и указывается на Сайте или сообщается
                                    Заказчику индивидуально.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        3.2.
                                    </strong>{" "}
                                    Оплата услуг Заказчиком производится в
                                    российских рублях одним из способов, указанных
                                    на Сайте или согласованных с Исполнителем.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        3.3.
                                    </strong>{" "}
                                    Оплата производится в полном объеме до начала
                                    оказания услуг, если иное не согласовано
                                    сторонами.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        3.4.
                                    </strong>{" "}
                                    При оплате услуг Заказчик получает
                                    электронный чек на указанный адрес электронной
                                    почты.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        3.5.
                                    </strong>{" "}
                                    Исполнитель оставляет за собой право изменять
                                    цены на услуги. При этом цена на оплаченные
                                    Заказчиком услуги изменению не подлежит.
                                </p>
                            </div>
                        </section>

                        {/* 4. Права и обязанности сторон */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                4. Права и обязанности сторон
                            </h2>

                            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3!">
                                4.1. Исполнитель обязуется:
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4!">
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    оказать услуги надлежащего качества в
                                    соответствии с выбранным Заказчиком форматом и
                                    программой;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    предоставить Заказчику доступ к материалам и
                                    занятиям в соответствии с условиями выбранного
                                    тарифа;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    консультировать Заказчика по вопросам,
                                    связанным с оказываемыми услугами, в рамках
                                    выбранного тарифа;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    соблюдать конфиденциальность персональных
                                    данных Заказчика.
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3!">
                                4.2. Исполнитель имеет право:
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4!">
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    требовать от Заказчика своевременной и полной
                                    оплаты услуг;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    изменять программу тренировок с учетом
                                    индивидуальных особенностей Заказчика;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    отказать в оказании услуг при наличии
                                    медицинских противопоказаний или отказе
                                    Заказчика предоставить необходимую информацию
                                    о состоянии здоровья;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    привлекать к оказанию услуг третьих лиц.
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3!">
                                4.3. Заказчик обязуется:
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4!">
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    своевременно и в полном объеме оплатить услуги
                                    Исполнителя;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    предоставить достоверную информацию о состоянии
                                    здоровья, наличии заболеваний и
                                    противопоказаний;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    соблюдать рекомендации Исполнителя при
                                    выполнении упражнений;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    не распространять материалы, предоставленные
                                    Исполнителем, третьим лицам без письменного
                                    согласия Исполнителя;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    самостоятельно проконсультироваться с врачом
                                    при наличии хронических заболеваний или сомнений
                                    в возможности выполнения физических нагрузок.
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3!">
                                4.4. Заказчик имеет право:
                            </h3>
                            <ul className="list-disc pl-6 space-y-2!">
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    получать услуги надлежащего качества в
                                    соответствии с условиями настоящего Договора;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    получать консультации Исполнителя по вопросам,
                                    связанным с оказываемыми услугами;
                                </li>
                                <li className="text-[#6B6B6B] leading-relaxed">
                                    требовать возврата денежных средств в случаях,
                                    предусмотренных настоящим Договором.
                                </li>
                            </ul>
                        </section>

                        {/* 5. Порядок оказания услуг */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                5. Порядок оказания услуг
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        5.1.
                                    </strong>{" "}
                                    Услуги оказываются Исполнителем после
                                    получения оплаты от Заказчика.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        5.2.
                                    </strong>{" "}
                                    Доступ к материалам и занятиям предоставляется
                                    Заказчику в течение срока, указанного в
                                    описании выбранного тарифа.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        5.3.
                                    </strong>{" "}
                                    Для участия в онлайн-марафонах Заказчик
                                    добавляется в закрытую группу VKontakte или
                                    другую платформу, указанную Исполнителем.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        5.4.
                                    </strong>{" "}
                                    Расписание занятий, формат и способ проведения
                                    определяются Исполнителем и сообщаются
                                    Заказчику.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        5.5.
                                    </strong>{" "}
                                    Исполнитель не несет ответственности за
                                    технические проблемы на стороне Заказчика
                                    (отсутствие интернета, неисправность
                                    оборудования и т.д.).
                                </p>
                            </div>
                        </section>

                        {/* 6. Ответственность сторон */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                6. Ответственность сторон
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        6.1.
                                    </strong>{" "}
                                    За неисполнение или ненадлежащее исполнение
                                    обязательств по настоящему Договору Стороны
                                    несут ответственность в соответствии с
                                    действующим законодательством РФ.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        6.2.
                                    </strong>{" "}
                                    Исполнитель не несет ответственности за
                                    результаты тренировок, если Заказчик не
                                    соблюдал рекомендации или предоставил
                                    недостоверную информацию о состоянии здоровья.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        6.3.
                                    </strong>{" "}
                                    Исполнитель не несет ответственности за вред
                                    здоровью, причиненный в результате
                                    самостоятельных тренировок Заказчика без
                                    консультации с врачом при наличии медицинских
                                    противопоказаний.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        6.4.
                                    </strong>{" "}
                                    Заказчик несет полную ответственность за
                                    достоверность предоставленной информации.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        6.5.
                                    </strong>{" "}
                                    Стороны освобождаются от ответственности за
                                    неисполнение или ненадлежащее исполнение
                                    обязательств по Договору на время действия
                                    непреодолимой силы (форс-мажор).
                                </p>
                            </div>
                        </section>

                        {/* 7. Возврат денежных средств */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                7. Возврат денежных средств
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        7.1.
                                    </strong>{" "}
                                    Заказчик имеет право на возврат денежных
                                    средств в следующих случаях:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4!">
                                    <li className="text-[#6B6B6B] leading-relaxed">
                                        если услуги не были оказаны по вине
                                        Исполнителя;
                                    </li>
                                    <li className="text-[#6B6B6B] leading-relaxed">
                                        при отказе от услуг до начала их оказания
                                        (не менее чем за 24 часа);
                                    </li>
                                    <li className="text-[#6B6B6B] leading-relaxed">
                                        в иных случаях, предусмотренных
                                        законодательством РФ.
                                    </li>
                                </ul>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        7.2.
                                    </strong>{" "}
                                    Возврат денежных средств не производится:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4!">
                                    <li className="text-[#6B6B6B] leading-relaxed">
                                        после начала оказания услуг (предоставления
                                        доступа к материалам, добавления в группу и
                                        т.д.);
                                    </li>
                                    <li className="text-[#6B6B6B] leading-relaxed">
                                        при отказе Заказчика от услуг по личным
                                        причинам после начала их оказания;
                                    </li>
                                    <li className="text-[#6B6B6B] leading-relaxed">
                                        если Заказчик не использовал
                                        предоставленные услуги по собственному
                                        желанию.
                                    </li>
                                </ul>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        7.3.
                                    </strong>{" "}
                                    Возврат денежных средств осуществляется в
                                    течение 10 рабочих дней с момента получения
                                    письменного заявления Заказчика.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        7.4.
                                    </strong>{" "}
                                    Возврат производится на тот же счет/карту, с
                                    которого была произведена оплата.
                                </p>
                            </div>
                        </section>

                        {/* 8. Интеллектуальная собственность */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                8. Интеллектуальная собственность
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        8.1.
                                    </strong>{" "}
                                    Все материалы (тренировочные программы,
                                    видеозаписи, методические материалы и т.д.),
                                    предоставляемые Исполнителем, являются
                                    объектами интеллектуальной собственности и
                                    охраняются законодательством РФ.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        8.2.
                                    </strong>{" "}
                                    Заказчик получает право использования
                                    материалов исключительно для личного
                                    использования.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        8.3.
                                    </strong>{" "}
                                    Запрещается копирование, распространение,
                                    публикация или иное использование материалов
                                    без письменного согласия Исполнителя.
                                </p>
                            </div>
                        </section>

                        {/* 9. Конфиденциальность */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                9. Конфиденциальность
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        9.1.
                                    </strong>{" "}
                                    Исполнитель обязуется не разглашать
                                    персональные данные Заказчика третьим лицам,
                                    за исключением случаев, предусмотренных
                                    законодательством РФ.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        9.2.
                                    </strong>{" "}
                                    Обработка персональных данных Заказчика
                                    осуществляется в соответствии с Политикой
                                    конфиденциальности, размещенной на Сайте.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        9.3.
                                    </strong>{" "}
                                    Принимая условия настоящего Договора,
                                    Заказчик дает согласие на обработку своих
                                    персональных данных.
                                </p>
                            </div>
                        </section>

                        {/* 10. Срок действия договора */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                10. Срок действия договора
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        10.1.
                                    </strong>{" "}
                                    Настоящий Договор вступает в силу с момента
                                    акцепта оферты Заказчиком и действует до
                                    полного исполнения Сторонами своих
                                    обязательств.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        10.2.
                                    </strong>{" "}
                                    Досрочное расторжение Договора возможно по
                                    соглашению Сторон или в случаях,
                                    предусмотренных законодательством РФ.
                                </p>
                            </div>
                        </section>

                        {/* 11. Изменение условий договора */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                11. Изменение условий договора
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        11.1.
                                    </strong>{" "}
                                    Исполнитель оставляет за собой право вносить
                                    изменения в условия настоящей оферты и/или
                                    отзывать оферту в любой момент по своему
                                    усмотрению.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        11.2.
                                    </strong>{" "}
                                    Изменения вступают в силу с момента их
                                    опубликования на Сайте, если иное не
                                    предусмотрено новой редакцией оферты.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        11.3.
                                    </strong>{" "}
                                    Заказчик обязуется самостоятельно
                                    отслеживать изменения условий настоящего
                                    Договора путем периодического ознакомления с
                                    актуальной редакцией.
                                </p>
                            </div>
                        </section>

                        {/* 12. Разрешение споров */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                12. Разрешение споров
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        12.1.
                                    </strong>{" "}
                                    Все споры и разногласия, возникающие между
                                    Сторонами по настоящему Договору или в связи
                                    с ним, разрешаются путем переговоров.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        12.2.
                                    </strong>{" "}
                                    В случае невозможности разрешения споров
                                    путем переговоров, они подлежат рассмотрению
                                    в судебном порядке в соответствии с
                                    действующим законодательством РФ.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        12.3.
                                    </strong>{" "}
                                    Претензионный порядок разрешения споров
                                    обязателен. Срок ответа на претензию — 10
                                    рабочих дней с момента ее получения.
                                </p>
                            </div>
                        </section>

                        {/* 13. Заключительные положения */}
                        <section className="mb-10!">
                            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4!">
                                13. Заключительные положения
                            </h2>
                            <div className="space-y-3!">
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        13.1.
                                    </strong>{" "}
                                    Настоящий Договор составлен в соответствии с
                                    законодательством Российской Федерации.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        13.2.
                                    </strong>{" "}
                                    Признание судом какого-либо положения
                                    Договора недействительным или не подлежащим
                                    принудительному исполнению не влечет
                                    недействительности иных положений Договора.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        13.3.
                                    </strong>{" "}
                                    К отношениям между Заказчиком и Исполнителем
                                    применяются положения Российского
                                    законодательства.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    <strong className="text-[#2C2C2C]">
                                        13.4.
                                    </strong>{" "}
                                    Актуальная версия Договора оферты размещена в
                                    сети Интернет по адресу:{" "}
                                    <a
                                        href="https://chipizubova.online/offer/"
                                        className="text-[#2C2C2C] underline hover:text-[#1A1A1A]"
                                    >
                                        https://chipizubova.online/offer/
                                    </a>
                                    .
                                </p>
                            </div>
                        </section>

                        {/* Реквизиты */}
                        <div className="mt-12! p-6! bg-[#F8F8F8] rounded-2xl border-l-4 border-[#2C2C2C]">
                            <h3 className="text-xl font-bold text-[#2C2C2C] mb-4!">
                                Реквизиты Исполнителя
                            </h3>
                            <div className="space-y-2">
                                <p className="text-[#6B6B6B]">
                                    <strong className="text-[#2C2C2C]">
                                        Исполнитель:
                                    </strong>{" "}
                                    Чипизубова Людмила Васильевна
                                </p>
                                <p className="text-[#6B6B6B]">
                                    <strong className="text-[#2C2C2C]">
                                        Email:
                                    </strong>{" "}
                                    <a
                                        href="mailto:nikitachebotov@gmail.com"
                                        className="text-[#2C2C2C] underline hover:text-[#1A1A1A]"
                                    >
                                        nikitachebotov@gmail.com
                                    </a>
                                </p>
                                <p className="text-[#6B6B6B]">
                                    <strong className="text-[#2C2C2C]">
                                        Сайт:
                                    </strong>{" "}
                                    <a
                                        href="https://chipizubova.online/"
                                        className="text-[#2C2C2C] underline hover:text-[#1A1A1A]"
                                    >
                                        https://chipizubova.online/
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

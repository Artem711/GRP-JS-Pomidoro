import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        GeneralPhrases: {
          Продолжить: "Продолжить",
          Оплатить: "Оплатить",

          Validation: {
            ИмяОбязательно: "Имя обязательно",
            ТелефонОбязателен: "Телефон обязателен",
            ПарольОбязателен: "Пароль обязателен",
            СМСКодОбязателен: "СМС код обязателен",

            PPShortPassword: "Пароль слишком кототкий - минимум 6 символов",
            PPPassCharValid: "Пароль должен обязательно иметь цифры и буквы",

            Необязательно: "Необязательно",
          },
        },

        Dashboard: {
          Главная: "Главная",
          ЛичныйКабинет: "Личный кабинет",
          Меню: "Меню",
          КонструкторПиццы: "Конструктор пиццы",
          ВашиЗаказы: "Ваши заказы",
          Корзина: "Корзина",
          Акции: "Акции",
          УсловияДоставки: "Условия доставки",
          Контакты: "Контакты",
        },

        Auth: {
          LoginScreen: {
            Войти: "Войти",
            ВходСистему: "Вход в систему",
            ПолучитеНовыйПароль: "Получите новый пароль",

            RecieveNewPassScreen: {
              ПолучитьНовыйПароль: "Получить новый пароль",
              PPПолучитьНовыйПароль:
                "Введите номер телефона, введенный вами при регистрации",
              PPВведитеКодСмс: "Введите код полученый в СМС",
              КодВостоновлениеСмс: "Код востоновление из СМС",
              ОтправитьСмсЕщеРаз: "Отправить СМС еще раз",
              БудетДоступноЧерез: "будет доступно через",
            },

            RegionSelectionScreen: {
              ВыберитеВашРегион: "Выберите ваш регион",
            },
          },

          RegisterScreen: {
            Регистрация: "Регистрация",
            Зарегистрироваться: "Зарегистрироваться",

            PPRecievePassBySMS: "Получать каждый раз новый пароль по СМС",

            SuccesfulRegistrationScreen: {
              PPSuccesfulRegisterTitle: "Регистрация прошла успешно",
              PPSuccesfulRegisterSubtitle:
                "Теперь вы можете воспользоваться всеми преимуществами приложения",
            },
          },

          SharedFields: {
            ИмяПользователя: "Имя пользователя",
            НомерТелефона: "Номер телефона",
            ВведитеПароль: "Введите пароль",
          },
        },

        PrivateCabinetScreen: {
          Header: {
            Выйти: "Выйти",
          },

          Credentials: {
            Имя: "Имя",
            Фамилия: "Фамилия",
            Email: "Email",
            НомерТелефона: "Номер телефона",
            Регион: "Регион",
            Пароль: "Пароль",
          },

          CreditCard: {
            КартаОплаты: "Карта оплаты",
            ПривязатьКарту: "Привязать карту",
          },

          OrdersList: {
            ИсторияЗаказов: "История заказов",
            ПоказатьВсеЗаказы: "Показать все заказы",
          },

          Bonuses: {
            Бонусы: "Бонусы",
            УВас: "У вас",
            Бонусов: "бонусов",
            УзнатьКакПотратить: "Узнать как потратить",
          },

          LanguageSection: {
            ЯзыкПриложения: "Язык приложения",
          },
        },

        OrdersScreen: {
          Заказы: "Заказы",

          ДобавитьЗаказВКорзину: "Добавить весь заказ в корзину",

          EmptyCase: {
            EmptyCaseTitle: "Пока нет заказов",
            PPEmptyCaseSubtitle:
              "Иследуйте наши блюда и заказывайие с доставкой",
          },
        },

        PizzaConstructorScreen: {
          КонструкторПиццы: "Конструктор пиццы",
          Добавить: "Добавить",

          IngridientsList: {
            PPВсегдаВходитСтоимость: "Всегда входит в стоимость: ",
            PPДобавки: "Добавки",
          },

          TabNavigator: {
            Мясо: "Мясо",
            Соусы: "Соусы",
            Овощные: "Овощные",
            Сыры: "Сыры",
          },
        },

        ContactsScreen: {
          Контакты: "Контакты",
          Адрес: "Адрес",
          ContactUs: "Связаться с нами",
          PPWorkInfo: `Мы работаем ежедневно с 10:00 до 22:30, и доставляем Вам горячую пиццу и свежие суши`,
        },

        DeliveryTerms: {
          УсловияДоставки: "Условия доставки",
          PPDeliveryTerms: `Мы осуществляем доставку Пиццы и Суши в такие города, как Бровары, а также Калиновка, Княжичи, Требухов и близлежащие поселки ${"\n"} ${"\n"}Доставка по Броварам — БЕСПЛАТНАЯ ${"\n"} ${"\n"} Горяченькую пиццу и свежие суши доставит наш курьер на нашем собственном транспорте 🙂`,
        },
      },
    },

    ua: {
      translation: {},
    },
  },
  lng: "ru",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
})

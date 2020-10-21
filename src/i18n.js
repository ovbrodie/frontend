import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    resources:{
        en: {
            translations:{
                "Sign Up":"Sign Up",
                "Password mismatch":"Password missmatch",
                "Username":"Username",
                "Displayname":"Dislpayname",
                "Password":"Password",
                "Password Repeat":"Password Repeat",
                "Login":"Login"
        }
        },
        tr: {
            translations:{
                "Sign Up":"Kayıt Ol",
                "Password mismatch":"Aynı şifreyi giriniz",
                "Username":"Kullanıcı adı",
                "Displayname":"Mahlas",
                "Password":"Şifre",
                "Password Repeat":"Şifre tekrarı",
                "Login":"Giriş"
            }
        }
},
fallbackLng: "en",
ns: ["translations"],
defaultNS:"translations",
keySeperator:false,
interpolation:{
    escapeValue:false,
    formatSeparator:","
},
react:{
    wait:true
}
});

export default i18n;

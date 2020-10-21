import React from 'react'
import {withTranslation} from "react-i18next"
import {changeLanguage} from "../api/apiCalls"

function LanguageSelector(props) {

    const onChangeLanguage = (language) => {
        const {i18n} = props;
        i18n.changeLanguage(language)
        changeLanguage(language)
      }

    return (
        <div>
             <div className="language">
              <img src="https://www.countryflags.io/tr/shiny/32.png" onClick={() => onChangeLanguage("tr")} style={{cursor:"pointer"}}/>
              <img src="https://www.countryflags.io/us/shiny/32.png" onClick={() => onChangeLanguage("en")} style={{cursor:"pointer"}}/>
             </div>
        </div>
    )
}


export default withTranslation()(LanguageSelector);
import React from "react";
import ReactDOM from "react-dom";
import {injectIntl, IntlProvider, FormattedRelative, useIntl} from 'react-intl';
import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";
import localEnMessages from './locales/en.json';

if(navigator.language.startsWith("es"))
{
    ReactDOM.render(
        <IntlProvider locale="es-ES" messages= {localeEsMessages}>
            <JobsList data = {localeEsMessages}/>
        </IntlProvider>, document.getElementById("root")
    );
}
else{
    ReactDOM.render(
        <IntlProvider locale="en" messages= {localEnMessages}>
            <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );
}
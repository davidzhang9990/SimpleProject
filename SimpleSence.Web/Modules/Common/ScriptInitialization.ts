/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace SimpleSence.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('SimpleSence');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}
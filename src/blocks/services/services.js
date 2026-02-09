import { driveTabs } from "../../js/libs/driveTabs";

(() => {

    const tabs = driveTabs({
        container: '.services__tabs',
        controls: '.services__tabs-button',
        selects: '.services__tab',
        cls: 'active'
    });

})();

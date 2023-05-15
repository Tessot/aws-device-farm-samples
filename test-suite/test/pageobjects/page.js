/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub section of the app
    * @param categoryName name of the section (e.g. "Login Page")
    */
    async open (categoryName) {
        await $('~ReferenceApp').click();
        await $('id=com.amazonaws.devicefarm.android.referenceapp:id/navigation_drawer_fragment').isExisting();
        const textviewElements = await $$("android.widget.TextView");
        for (let i = 0; i < textviewElements.length; i++) {
            const textView = await textviewElements[i].getAttribute('text');
            if (categoryName === textView) {
                await textviewElements[i].click();
                break;
            }
        }
        driver.setImplicitTimeout(1000);
        const max_wait_time = Date.now()+30000;
        while (Date.now() < max_wait_time &&
            await $('id=com.amazonaws.devicefarm.android.referenceapp:id/navigation_drawer_fragment').isExisting()) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        driver.setImplicitTimeout(10000);
    }

}

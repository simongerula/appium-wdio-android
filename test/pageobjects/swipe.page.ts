class SwipePage{


    get el () {
        return $('//android.widget.ScrollView[@content-desc="Swipe-screen"]')
    }

    get greatCommunityCard () {
        return $('(//android.view.ViewGroup[@content-desc="card"])[2]/android.widget.TextView')
    }

    public async swipeRight () {
        await this.el.touchAction([
            { action: 'press', x: 800, y: 1200 },
            { action: 'wait', ms: 500 },
            { action: 'moveTo', x: 200, y: 1200 },
            'release'
        ]); 
    }

    public async isDisplayed () {
        return (await this.greatCommunityCard).isDisplayed()
    }
}
export default new SwipePage();

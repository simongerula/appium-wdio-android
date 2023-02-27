class SwipePage{


    public get el () {
        return $('//android.widget.ScrollView[@content-desc="Swipe-screen"]')
    }

    public async scrollRight () {

    await this.el.touchAction([
        { action: 'press', x: 800, y: 1200 },
        { action: 'wait', ms: 500 },
        { action: 'moveTo', x: 200, y: 1200 },
        'release']); 
    }
}
export default new SwipePage();

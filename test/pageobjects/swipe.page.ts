class SwipePage{

    public async scrollDown () {
        driver.touchAction([
            {action: 'press', x:800, y:1200},
            {action: 'moveTo', x:250, y:1200},
            'release'
        ])

    }
}
export default new SwipePage();

import { assert } from 'chai'

describe('firstTest', () => {
    it('works!', () => {
        assert.isTrue(true)
    })
    it('also works!', () => {
        assert.isTrue(!false)
    })
    it('good luck with your life', () => {
        assert.isTrue(typeof 'AHA! AHA! AHA!' === 'string')
    })
})
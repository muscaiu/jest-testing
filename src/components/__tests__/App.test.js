import { total } from '../App';

const add = jest.fn(() => 3)

test('add function', () => {
    expect(add(1, 2)).toBe(3)
    expect(add).toHaveBeenCalledTimes(1)
    expect(add).toHaveBeenCalledWith(1, 2)
})

//integration test because it also contains the add function
// test('total function', () => {
//     expect(total(5, 20)).toBe('$25')
// })

import {login,startLogin,logout,startLogOut} from '../../actions/auth';
test('should set login',() =>{
    const action = login('12345678');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '12345678'
      })

});

test('should set logout',() =>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
      })

});
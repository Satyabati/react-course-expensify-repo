import authReducers from '../../reducers/auth'
test('should set default state',() =>{
    const state = authReducers(undefined,{type: '@@INIT'});
    expect(state).toEqual({});
});

test('should set uid for login',() =>{
    const action = {
        type:'LOGIN',
        uid:'12345678'
    }
    const state = authReducers(undefined,action);
    expect(state).toEqual( {
        uid:'12345678'
    });
});

test('should set default for logout',() =>{
    const action = {
        type:'LOGOUT',
        uid:'12345678'
    }
    const state = authReducers(undefined,action);
    expect(state).toEqual( {});
});
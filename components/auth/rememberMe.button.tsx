import React, {FC} from 'react';

const RememberMeButton: FC = () => {
    return (
        <div className={'flex flex-row items-center'}>
            <input name={'rememberMe'} type={'checkbox'}/>
            <label htmlFor="rememberMe" className={'ml-2 font-bold'}>
                Remember Me
            </label>
        </div>
    );
};

export default RememberMeButton;

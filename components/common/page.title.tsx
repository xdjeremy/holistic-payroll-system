import React, {FC, ReactNode} from 'react';

interface Props {
    title: string;
    children: ReactNode
}

const PageTitle: FC<Props> = ({title, children}) => {
    return (
        <div className={'flex flex-row items-center justify-between w-full py-4'}>
            <h2 className={'font-medium text-xl'}>
                {title}
            </h2>
            <div className={'flex flex-row items-center'}>
                {children}
            </div>
        </div>
    );
};

export {PageTitle};
import React, {FC} from 'react';

interface Props {
    title: string;
}
const PageTitle: FC<Props> = ({title}) => {
    return (
        <h2 className={'font-medium text-xl'}>
            {title}
        </h2>
    );
};

export {PageTitle};
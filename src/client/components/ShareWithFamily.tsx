import React from 'react'
import Button from './UI/Button/Button'

const ShareWithFamily: React.FC<{onClickYes: () => void, onClickNo: () => void}> = ({onClickYes, onClickNo}) => {
    return (
        <div>
            <div>Приобрести и поделиться с семейной группой?</div>
            <Button 
                className='bg-orange-600 hover:bg-orange-400 rounded-lg px-5 py-3 text-white mt-10 mr-3'
                onClick={onClickYes}
            >
                Да
            </Button>
            <Button 
                className='bg-orange-600 hover:bg-orange-400 rounded-lg px-5 py-3 text-white mt-10'
                onClick={onClickNo}
            >
                Нет
            </Button>
        </div>
    );
};

export default ShareWithFamily;
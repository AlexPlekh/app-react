import React from 'react'
import { useCurrentUser } from '../hooks/useUserData'
import { useState } from 'react'
import ShareWithFamily from '../components/ShareWithFamily'

const ActivatePromocode = () => {
    const user = useCurrentUser()

    const [toggle, setToggle] = useState(true)
    const [shareWithFamilyGroup, setShareWithFamilyGroup] = useState(false)

    const onClickYes = () => {
        setShareWithFamilyGroup(true)
        setToggle(false)
    }
    const onClickNo = () => {
        setToggle(false)
    }

    return (
        <>
        {user.familyGroup?.length && toggle
            ? <ShareWithFamily onClickYes={onClickYes} onClickNo={onClickNo} />
            : <div>Активация промокода</div>
        }
        </>
    );
};

export default ActivatePromocode;
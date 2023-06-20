
import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { animalSeq } = useParams();
    return (
        <>
            <h3>{animalSeq}번 페이지 입니다.</h3>
        </>
    );
}

export default Detail;
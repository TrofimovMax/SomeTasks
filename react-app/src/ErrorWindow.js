import React from 'react';
import 'antd/dist/antd.css';
import { message } from 'antd';

export default function ErrorWindow({ errorState, errorMessage, setErrorState }) {
    if (errorState) {
        message.error(errorMessage)
        //setErrorState(!errorState)
        return <div></div>
    } else {
        return <div></div>
    }
}
import React, { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function ExportScore({ score, gameRunning }) {
    var token = jwt.sign({ score }, 'vlad')
    const [btnText, setbtnText] = useState("Copy my score to clipboard")
    const text = `:bird: FLAPPY PONY :turtle: \n *I just got ${score} point at @SirVaalok#9067 & @jonmathias#7191 game* \n\n my security token: ${token.split('.').join(". ")}`

    if (!gameRunning && score > 0) {
        return (
            <div onClick={() => {
                navigator.clipboard.writeText(text); setbtnText("COPIED! paste it into the chat"); setTimeout(() => {
                    setbtnText("Copy my score to clipboard")
                }, 4000);
            }} className="exp-btn">
                {btnText}
            </div>
        )
    } else {
        return null
    }
}

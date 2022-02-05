import React, { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function ExportScore({ score, gameRunning }) {
    var token = jwt.sign({ score }, 'vlad')
    const [btnText, setbtnText] = useState("Copy my score to clipboard")
    const text = `:gg_lfg: FLAPPY GOONIEZ :gg_lfg:\n\n :star: *I just got ${score} point @SirVaalok | GG | 30lvl+arts/quiz#9067 game* :star: \n \n **Can you be better**:question: \n\n my security token: ${token}`

    if (!gameRunning && score > 0) {
        return (
            <div onClick={() => {
                navigator.clipboard.writeText(text); setbtnText("COPIED! paste it into hapes chat"); setTimeout(() => {
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

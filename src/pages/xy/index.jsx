import React from 'react'
import './style.less'
import { Button } from 'antd'
import axios from 'axios'

const List =() => {
    const handleClick = () => {

        // 
        const list = document.querySelectorAll('.ant-table-tbody tr')
        for(let i = 0; i < list.length; i++) {
            const item = list[i]
            const tdList = item.querySelectorAll('td')
            for(let j = 0; j < tdList.length; j++) {
                const td = tdList[j]
                console.log('td', td.textContent)
            }
        }
        axios.get('https://test-bi.bananain.cn/bjx-app-api/dict/findDict?dictKey=guanyuanpageconfig').then(res => {
            console.log('res', res)
        })
        console.log('click', list)

    }
    return <div>
        list......大大大大大在.........
        <Button type="primary" onClick={() => handleClick()}>Button</Button>
    </div>
}

export  default  List
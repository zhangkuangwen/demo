import React, { useState, useMemo } from 'react'
import "./index.less"
import { Input } from 'antd'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector, RootStateOrAny } from "react-redux"
const { Search } = Input
export default function Login() {
    const [list, setlist] = useState<Array<any>>([])
    // const [reduxList, setreduxList] = useState<any>({})
    let dispath = useDispatch();
    const selector = useSelector((state: RootStateOrAny) => state.userinfo);
    let navigate = useNavigate();
    const listMemo = useMemo(() => list.map(res => "时间：" + new Date().toLocaleDateString() + "___" + "内容：" + res), [list])
    return (
        <div className='login_wrap'>
            <div>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="新增"
                    size="large"
                    onSearch={(value) => {
                        setlist([value, ...list])
                        dispath({ type: "add", data: value })

                        console.log(list)
                    }}
                />
            </div>
            <div>
                {
                    listMemo.map((res, index) => {
                        return <div key={index}>{res}</div>
                    })
                }
            </div>
            <div>
                {
                    selector.map((res: any, index: number) => {
                        return <div key={index}>
                           ——————redux： {res}
                        </div>
                    })
                }
            </div>

        </div>
    )
}

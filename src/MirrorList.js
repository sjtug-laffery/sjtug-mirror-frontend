import React from 'react';
import * as timeago from 'timeago.js';

function SvgCheck() {
    return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
    </svg>
}

function SvgX() {
    return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
}

function MirrorList({ summary }) {
    const rows = Object.entries(summary.WorkerStatus).map(entry => {
        const [key, value] = entry;
        return <tr key={key}>
            <td><a href={`/${key}/`}>{key}</a></td>
            <td>{timeago.format(value.LastFinished, 'zh_CN')}</td>
            <td>
                <div className="d-flex flex-row align-items-center">
                    {value.Idle ? (value.Result ?
                        <>
                            <div className="mx-1 text-success"><SvgCheck /></div>
                            <div className="text-success">同步成功</div>
                        </>
                        :
                        <>
                            <div className="mx-1 text-warning"><SvgX /></div>
                            <div className="text-warning">同步失败</div>
                        </>
                    ) :
                        <>
                            <div className="spinner-grow spinner-grow-sm mx-1 text-info"></div>
                            <div className="text-info">正在同步</div>
                        </>
                    }
                </div>
            </td>
        </tr>
    })
    return <table className="table table-sm table-borderless">
        <thead>
            <tr>
                <th scope="col">镜像名称</th>
                <th scope="col">上次同步</th>
                <th scope="col">同步状态</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
}

export default MirrorList;

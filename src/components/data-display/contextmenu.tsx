

import * as  React from "react";
import VpIcon from "../layout/icon";
type ContextMenuItem={
    icon?: string,
    name?: string,
    title?: string,
    text?: string,
    label?: string,
    type?: 'sp',
    disabled?: boolean,
    childs?: ContextMenuItem[]
}
export function Contextmenu(props: {
    menus: ContextMenuItem[]
}) {
    function renderItems(items: ContextMenuItem[]) {
        return <ol>
            {items.map(item => {
                return <>
                    {item.type == 'sp' && <li className='sp'></li>}
                    {item.type != 'sp' && <li >
                        <a>
                            <i>{item.icon && <VpIcon icon={item.icon}></VpIcon>}</i>
                            <span>{item.title || item.text}</span>
                            {item.label && <label>{item.label}</label>}
                            {Array.isArray(item.childs) && item.childs.length > 0 && <em></em>}
                        </a>
                        {Array.isArray(item.childs) && item.childs.length > 0 && renderItems(item.childs)}
                    </li>}
                </>
            })}
        </ol>
    }
    return <div className={'contextmenu'}>
        {renderItems(props.menus)}
    </div>
}
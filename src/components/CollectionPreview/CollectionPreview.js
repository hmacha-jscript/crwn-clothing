import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem';
import './collection-preview.styles.scss';

export default function CollectionPreview({title,items}) {
    return (
        <div className='collection-preview'>
            <h4 className="title">{title}</h4>
            <div className="preview">
                {items.filter((item,idx)=>idx<4).map(item=>(
                    <CollectionItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    )
}

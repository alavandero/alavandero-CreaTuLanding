import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ detail }) {
    return (
        <div className="itemDetail">
            <p>{detail.name}</p>
            <p>{detail.description}</p>
            <p>${detail.price}</p>
            <ItemCount product={detail} />
        </div>
    )
}

export default ItemDetail;
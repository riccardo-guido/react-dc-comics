export default function ProductCard ({ title, thumb }) {
    return <div className="col-30">
        <div className="card">
            <div className="card-media">
                <img src={thumb} alt={title} />
            </div>
            <div className="card-content">{title}</div>
        </div>

    </div>
}